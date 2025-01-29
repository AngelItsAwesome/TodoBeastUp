import {Outlet} from "react-router-dom";
import '../../styles/home.css';
import {useEffect, useState} from "react";
import {useOutletContext ,Link} from "react-router-dom";
import {User} from '../../utils/Interfaces';
import '../../styles/helpers.css'

type TypeUser = { user: User };

const BaseAuth = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    const getSession = async (): Promise<void> => {
        try {
            const res: Response = await fetch("http://localhost:3000/home/get-session", {
                credentials: "include",
            });
            if (!res.ok) {
                window.location.href = "/";
                return;
            }
            const session = await res.json();
            setUser(session);
        } catch (error) {
            console.error("Error fetching session:", error);
        } finally {
            setLoading(false); // Done loading
        }
    };
    const routes = [
        {
            path: "/",
            title: "Home",
        },
        {
            path: "/List",
            title: "List",
        },
    ]

    useEffect(() => {
        getSession();
    }, []);
    if (loading) {
        return (
            <div className={"home__loading"}>
                <span className={"loader"}></span>
            </div>
        )
    }
    return (
        <>
            <header className={"home__header"}>
                <h1>TodoBeast {user?.username}</h1>
            </header>

            <div className={"home__principal"}>
                <aside className={"home__sidebar"}>
                    {routes.map(route => (
                        <Link to={route.path}>
                            <div>
                                <p>{route.title}</p>
                            </div>
                        </Link>
                    ))}

                </aside>
                <main className={"home__content"}>
                    <Outlet context={{user}}/>
                </main>
            </div>
        </>
    );
};

export default BaseAuth;

export function useUser() {
    return useOutletContext<TypeUser>();
}
