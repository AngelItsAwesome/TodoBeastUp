import {ChangeEvent, useState, MouseEvent, useEffect} from "react";
import {useParams, useNavigate, NavigateFunction} from "react-router-dom";

function Recover(){
    const [password, setPassword] = useState<string>("");
    const [password2,setPassword2] = useState<string>("");
    const [ready, setReady] = useState(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const {token} = useParams<{token: string}>();
    const nav : NavigateFunction = useNavigate();

    useEffect(() => {
       const checkToken = async () : Promise<void> => {
           try{
               const res : Response = await fetch(`http://localhost:4000/auth/reset/${token}`);
               if(res.ok){
                   setReady(true);
               }
           }catch(error : unknown){
               console.log(error);
           }
           finally {
               setLoading(false);
           }
       }
        checkToken();
    },[]);
    const changePassword = async function(e: MouseEvent<HTMLButtonElement>) : Promise<void>{
        e.preventDefault();
        try{
            const values = {
                password: password,
                password2: password2
            }
            const res = await fetch(`http://localhost:4000/auth/changePassword/${token}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values)
                })
            if(res.ok){
                nav('/');
            }
            const errors = await res.json();
            const msg = errors.message;
            setError(msg);
            console.log(msg);
        }catch(error : unknown){
            console.log(error);
        }

    }
    if(ready){
        return(
            <>
                <header className="login__header">
                    <h1>Reset</h1>
                </header>
                <form className={"login__form"}>
                    <span className={"login__error"}>{error}</span>
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
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword2(e.target.value)}
                            name="password2"
                            type="password"
                            id="password2"
                            placeholder="Repeat your new password..."
                            value={password2}
                        />
                    </div>
                    <button onClick={changePassword} disabled={loading}
                             className={`login__button ${loading ? 'loginBtn' : ""}`}>Submit
                    </button>
                </form>
            </>
        )
    }

    return(
        <>
            <h1>Something went wrong...</h1>
        </>
    )

}


export default Recover;