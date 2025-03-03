import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import "../../styles/helpers.css";
function Verify(){
    const {token} = useParams<{token: string}>();
    const [message, setMessage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    useEffect(() => {
        const fetchData = async () : Promise<void> => {
            try {
                setLoading(true);
                const res: Response = await fetch(`http://localhost:4000/auth/token/${token}`);
                if (res.ok) {
                    setMessage("User verified!")
                }
                setMessage("Something went wrong...")
            } catch (e) {
                setMessage("Connexion Error")
                console.log(e);
            }
            finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    return (
        <>
            {loading ? <div className="custom-loader"></div> : null}
            <h1>{message}</h1>
            <div className="login__options">
                <a href={"/"}>Already have an account?</a>
                <a href={"/register"}>Don't have an account?</a>
            </div>
        </>
    )
}
export default Verify;