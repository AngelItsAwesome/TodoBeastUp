import {useParams} from "react-router-dom";
import {useState} from "react";

function Verify(){
    const {token} = useParams<{token: string}>();
    const [verify, setVerify] = useState<boolean>(false);
    (async () => {
        try{
            const res : Response = await fetch(`http://localhost:3000/auth/token/${token}`);
            if(res.ok){
                setVerify(true);
            }
        }catch (e) {
            console.log(e);
        }
    })()
    return (
        <>
            <h1>{verify ? "Verified" : "whoops! something went wrong"}</h1>
            <div className="login__options">
                <a href={"/"}>Already have an account?</a>
                <a href={"/register"}>Don't have an account?</a>
            </div>
        </>
    )
}

export default Verify;