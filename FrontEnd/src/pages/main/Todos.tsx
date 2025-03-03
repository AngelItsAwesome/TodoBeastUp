import Todo from "../Components/TodoComponent.tsx";
import Modal from "../Components/ModalCreateTask.tsx";
import React, {useEffect, useState} from "react";

function Todos(){
    const [request, setRequest] = React.useState<string>();

    //This function open a modal window for create a new task
    const createModal = function(){
        console.log("Create Modal");
        //Logic
        const main = document.querySelector(".main");
    }

    return(
        <div className="border-gray-200 border-2 rounded-lg m-5">
            <Modal></Modal>
            <div className="w-full max-w-[95%] mx-auto mt-10">
                <h1 className="text-4xl font-bold">Welcome Back!</h1>
                <h1 className="text-2xl font-bold text-gray-600 font-bold mt-2">This is a list of all of your tasks.</h1>

                <div className="flex justify-between items-center gap-2 mt-10 mb-5">
                    <div className="flex items-center gap-x-3">
                        <input className="border border-gray-300 rounded-xl text-gray-600 p-3 font-bold text-xl" type="search" placeholder="Filter tasks." />
                        <select className="border border-gray-300 rounded-xl text-gray-600 p-3 font-bold text-xl">
                            <option>Status</option>
                        </select>
                        <select className="border border-gray-300 rounded-xl text-gray-600 p-3 font-bold text-xl">
                            <option>Priority</option>
                        </select>
                        <button onClick={createModal} className="border border-gray-300 rounded-xl text-gray-600 p-3 font-3xl font-bold hover:cursor-pointer">Create New Task</button>
                    </div>
                    <select className="border border-gray-300 rounded-xl text-gray-600 p-3 font-bold text-xl">
                        <option>View</option>
                    </select>
                </div>
                <div className="border-gray-200 border-2 rounded-lg overflow-auto">
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
                        <Todo title={"Grocery Shopping"} content={"I need to buy vegetables, fruits, milk, eggs, and some snacks for the week. Don’t forget to get the coffee beans."} status={"In Progress"} category={"Medium"}></Todo>

                        <Todo title={"Finish Report"} content={"I need to complete the financial report for the company. It's due tomorrow! Make sure to double-check the numbers."} status={"Completed"} category={"High"}></Todo>

                        <Todo title={"Meeting with Client"} content={"Prepare presentation for the client meeting at 2 PM. Discuss project updates and potential next steps."} status={"In Progress"} category={"High"}></Todo>

                        <Todo title={"Yoga Practice"} content={"It's time for some relaxation! Follow my usual yoga routine for 45 minutes to clear my mind."} status={"Completed"} category={"Low"}></Todo>

                        <Todo title={"Doctor's Appointment"} content={"I have a check-up at 11 AM. Don’t forget to bring my medical records from last year."} status={"Canceled"} category={"Medium"}></Todo>

                        <Todo title={"Read Book"} content={"Finish reading the last chapter of the new novel. I need to get to the conclusion to start the next one!"} status={"In Progress"} category={"Low"}></Todo>

                        <Todo title={"Clean the House"} content={"Vacuum, dust, and clean the bathroom. The house is a bit messy and needs to be tidy for the weekend."} status={"In Progress"} category={"Medium"}></Todo>

                        <Todo title={"Write Blog Post"} content={"Draft a blog post about productivity tips for work from home. Keep it engaging and informative."} status={"Completed"} category={"High"}></Todo>

                        <Todo title={"Call Mom"} content={"I need to catch up with Mom today. Call her to talk about the family plans for the weekend."} status={"Completed"} category={"Low"}></Todo>

                        <Todo title={"Plan Vacation"} content={"Book flights and accommodation for my summer vacation. Check out the best deals online."} status={"In Progress"} category={"Low"}></Todo>

                        </tbody>
                    </table>
                </div>
                <div className="flex items-center justify-between w-full mx-auto max-w-[95%] h-[50px] my-5">
                    <span className="text-2xl text-gray-600">0 of 100row(s) selected.</span>
                    <div className="flex items-center gap-x-5 h-full">
                        <span className="text-black text-2xl">Rows per page</span>
                        <select className="[text-align-last:center] w-30 py-2 border border-gray-200 border-2 rounded-2xl text-2xl">
                            <option>10</option>
                            <option>20</option>
                            <option>30</option>
                            <option>40</option>
                            <option>50</option>
                        </select>
                        <span className="text-2xl">Page n of n</span>
                        <div className="flex gap-x-2">
                            <button className="p-2 text-2xl border-1 border-gray-200 rounded-2xl w-15">&#60;&#60;</button>
                            <button className="p-2 text-2xl border-1 border-gray-200 rounded-2xl w-15">&#60;</button>
                            <button className="p-2 text-2xl border-1 border-gray-200 rounded-2xl w-15">&#62;</button>
                            <button className="p-2 text-2xl border-1 border-gray-200 rounded-2xl w-15">&#62;&#62;</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Todos;