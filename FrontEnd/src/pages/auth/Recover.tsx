import {ChangeEvent, useState} from "react";
import {useParams, useNavigate, NavigateFunction} from "react-router-dom";

function Recover(){
    const [password, setPassword] = useState<string>("");
    const [ready, setReady] = useState(false);
    const [loading, setLoading] = useState<boolean>(false);
    const {token} = useParams<{token: string}>();
    const nav : NavigateFunction = useNavigate();
    (async () => {
        try{
            console.log(token);
            const res = await fetch(`http://localhost:3000/auth/reset/${token}`);
            if(res.ok){
                nav('/');
            }
        }catch(error : unknown){
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    })()

    return(
        <>
            <header className="login__header">
                <h1>Reset</h1>
            </header>
            <form className={"login__form"}>
                <span className={"login__error"}></span>
                <div className="login__camp">
                    <label htmlFor="email">New password</label>
                    <input
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        name="password"
                        type="password"
                        id="password"
                        placeholder="Enter your new password..."
                        value={password}
                    />
                </div>
                <span className={"login__error"}></span>
                <div className="login__camp">
                    <label htmlFor="email">Repeat your Password</label>
                    <input
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        name="password"
                        type="password"
                        id="password2"
                        placeholder="Repeat your new password..."
                        value={password}
                    />
                </div>
                <button  disabled={loading}
                        className={`login__button ${loading ? 'loginBtn' : ""}`}>Submit
                </button>
            </form>
        </>
    )
}


export default Recover;