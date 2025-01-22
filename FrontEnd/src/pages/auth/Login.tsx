import {useState, ChangeEvent,MouseEvent} from "react";
import '../authStyles/login.css';
function Login() {
    const [ready, setReady] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const login = async function(e : MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        const credentials = {
            email: email,
            password: password,
        }
        try{
            setReady(true);
            const res = await fetch("http://localhost:3000/auth/login/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(credentials),
                })
            if(res.ok){
                const resM = await res.json();
                console.log(resM);
                return;
            }
            const data = await res.json();
            console.log(data);
        }catch(error : unknown){
            console.log(error);
        }finally {
            setReady(false);
        }
    }
    return (
        <>
            <header className="login__header">
                <h1>Login</h1>
            </header>
            <form className="login__form">
                <span className={"login__error"}></span>
                <div className="login__camp">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email..."
                        value={email}
                        onChange={(e : ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    />
                </div>
                <span className={"login__error"}></span>
                <div className="login__camp">
                    <label htmlFor={"password"}>Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password..."
                        value={password}
                        onChange={(e : ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    />
                </div>
                <button disabled={ready} onClick={login} className={`login__button ${ready ? "loginBtn" : ""}`}>Log In</button>
            </form>
            <div className="login__options">
                <a href={'/forgot'}>Forgot your password?</a>
                <a href={'/register'}>Dont have an account?</a>
            </div>
        </>
    )
}
export default Login;