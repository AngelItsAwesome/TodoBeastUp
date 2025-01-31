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
            path: "/home",
            title: "Home",
            image: "/src/assets/home/home.png",
        },
        {
            path: "/Home/Todo",
            title: "List",
            image: "/src/assets/home/to-do-list.png",
        },
        {
            path: "/Groups",
            title: "Groups",
            image: "/src/assets/home/Groups.png",
        },
        {
            path: "/Profile",
            title: "Profile",
            image: "/src/assets/home/user.png",
        },
        {
            path: "/Logout",
            title: "Logout",
            image: "/src/assets/home/logout.png",
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
                <h1 className={"text-6xl"}>TodoBeast</h1>
            </header>
            <div className={"home__principal"}>
                <aside className={"home__sidebar"}>
                    {routes.map(route => (
                        <Link className={"my-4"} style={{marginLeft: "10px"}} to={route.path} key={route.path}>
                            <div className={"home__route"}>
                                <img className={"icon"} src={route.image} alt="image" />
                                <p className={"home__route-n"}>{route.title}</p>
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
