import {useEffect, useState} from "react";
import {useUser} from "./Base";
import Todo from '../Components/TodoComponent.tsx'
import Group from '../Components/Groups.tsx';


function Home(){

    const {user} = useUser();
    return(
        <>
            <h1 className="font-bold text-5xl mb-10">Welcome {user.username}</h1>
            <div className={"grid grid-cols-[2fr_1fr] box-s border border-gray-500 border-solid p-5 rounded-xl w-[100%]"}>
                <div className="">
                    <h1 className="text-3xl ">Your Recent Activity...</h1>
                    <Todo></Todo>
                </div>

                <div>
                    <h2 className="text-3xl text-center">Your recent groups</h2>
                    <Group></Group>
                </div>
            </div>
        </>

    )
}

export default Home;