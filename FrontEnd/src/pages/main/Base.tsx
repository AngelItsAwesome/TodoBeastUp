import {Outlet} from "react-router-dom"
import '../../styles/home.css'
import {useEffect, useState} from "react";
import {useOutletContext} from "react-router-dom";
import  {User} from '../../utils/Interfaces';
type TypeUser = {user: User};
const BaseAuth = () => {
    const [user, setUser] = useState<User>();
    useEffect(() => {
        const getSession = async (): Promise<void> => {
            try {
                const res : Response = await fetch("http://localhost:3000/home/get-session",{
                    credentials: "include",
                });
                if(!res.ok){
                    window.location.href = "/";
                }
                const session = await res.json();
                setUser(session);
            } catch (error) {
                console.error("Error fetching session:", error);
            }
        };
        getSession();
    }, []);
    return (
        <>
            <header className={"home__header"}>
                <h1>TodoBeast {user?.username}</h1>
            </header>

            <aside className={"home__sidebar"}>
                <a>
                    <div>
                        <p>This is a link</p>
                    </div>
                </a>
            </aside>
            <main>
                <Outlet context={{user}}/>
            </main>
        </>
    );
};

export default BaseAuth;
export function useUser(){
    return useOutletContext<TypeUser>();
}