import {useEffect, useState} from "react";
import {useUser} from "./Base";
import Todo from '../Components/TodoComponent.tsx'
import Group from '../Components/Groups.tsx';
import TableHead from "../Components/TableHead.tsx";


function Home(){
    const {user} = useUser();
    return(
        <>
            <div className="max-w-[95%] mx-auto">
                <h1 className="font-bold text-5xl mb-10">Welcome {user.username}</h1>
                <h2 className="text-3xl">Your recent tasks...</h2>
            </div>
            <div className="border-gray-100 border-2 rounded-lg overflow-auto max-w-[95%] mx-auto mt-10">
                <table className="w-full">
                    <thead className="w-full">
                        <tr>
                            <th className="text-left p-2"><input type="checkbox" /></th>
                            <th className="text-left p-2 text-2xl text-gray-600 font-bold">Task</th>
                            <th className="text-left p-2 text-2xl text-gray-600 font-bold">Title</th>
                            <th className="text-left p-2 text-2xl text-gray-600 font-bold">
                                <div className="flex items-center w-[100px] gap-x-2">
                                    <img className="w-6 h-6" src="/src/assets/svg/UpDown.svg" alt="UpDownArrow"/>
                                    <span className="text-2x">Status</span>
                                </div>
                            </th>
                            <th className="text-left p-2 text-2xl text-gray-600 font-bold">
                                <div className="flex items-center w-[100px] gap-x-2">
                                    <img className="w-6 h-6" src="/src/assets/svg/UpDown.svg" alt="UpDownArrow"/>
                                    <span className="text-2xl">Priority</span>
                                </div>
                            </th>
                            <th className="text-left p-2 text-2xl text-gray-600 font-bold">
                                
                            </th>
                        </tr>
                    </thead>
                    <tbody className="w-full h-[80%] md:h-full">
                        <Todo title={"Study"} content={"Today i have to study for my exam because is the last exam to finish my career, i have to study alot DONT FORGET"} status={"In Progress"} category={"High"}></Todo>
                        <Todo title={"Grocery Shopping"} content={"I need to buy vegetables, fruits, milk, eggs, and some snacks for the week. Don’t forget to get the coffee beans."} status={"In Progress"} category={"Medium"}></Todo>

                        <Todo title={"Finish Report"} content={"I need to complete the financial report for the company. It's due tomorrow! Make sure to double-check the numbers."} status={"Completed"} category={"High"}></Todo>

                        <Todo title={"Meeting with Client"} content={"Prepare presentation for the client meeting at 2 PM. Discuss project updates and potential next steps."} status={"In Progress"} category={"High"}></Todo>

                        <Todo title={"Yoga Practice"} content={"It's time for some relaxation! Follow my usual yoga routine for 45 minutes to clear my mind."} status={"Completed"} category={"Low"}></Todo>
                    </tbody>
                </table>
            </div>
            <div className="max-w-[95%] mx-auto mt-20">
                <h1 className="text-3xl text-center md:text-left">Your Recent Groups:</h1>
                <div className="grid gap-y-10 justify-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-10">
                    <Group name="Coppel Team"></Group>
                    <Group name="Coppel Team"></Group>
                    <Group name="Coppel Team"></Group>
                    <Group name="Coppel Team"></Group>
                </div>
            </div>
        </>
    )
}


export default Home;