import {useEffect, useState} from "react";
import {useUser} from "./Base";
import Todo from '../Components/TodoComponent.tsx'


function Home(){

    const {user} = useUser();
    return(
        <>
            <h1 className="font-bold font-mono">Welcome {user.username}</h1>
            <h2>What we got here!</h2>

            <div className={"grid grid-cols-3 w-[100%]"}>
                <Todo>

                </Todo>
            </div>
        </>

    )
}

export default Home;