import {ChangeEvent, useState} from "react";
import {useNavigate} from "react-router-dom";

function Reset(){
    const [email, setEmail] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [verify, setVerify] = useState<boolean>(false);
    const navigate = useNavigate();
    const sendToken = async function(e: React.MouseEvent<HTMLButtonElement>) : Promise<void>{
        e.preventDefault();
        try{
            const res : Response = await fetch("http://localhost:3000/auth/recover/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({"email": email}),
                })
            if (res.ok) {
                console.log("henge");
                navigate("/check");
            }
        }catch (error : unknown){
            console.log(error);
        }finally {
            setLoading(false);
        }
    }
    return (
        <>
            <header className="login__header">
                <h1>Reset Password</h1>
            </header>
            <form className={"login__form"}>
                <div className="login__camp">
                    <span className={"login__error"}></span>
                    <label htmlFor="email">Email</label>
                    <input
                        onChange={(e : ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        name="email"
                        type="email"
                        id="email"
                        placeholder="Enter your email..."
                        value={email}
                    />
                </div>
                <button onClick={sendToken} disabled={loading} className={`login__button ${loading ? 'loginBtn' : ""}`}>Submit</button>
            </form>
        </>
    )
}

export default Reset;