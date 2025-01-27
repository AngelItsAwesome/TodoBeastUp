import {useEffect, useState} from "react";
import {useUser} from "./Base";


function Home(){

    const {user} = useUser();
    console.log(user);
    console.log("HELLO");
    return(
        <h1>Ur logged in! welcome</h1>

    )
}

export default Home;