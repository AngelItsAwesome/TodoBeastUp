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
                <h2 className="text-3xl font-bold">Your recent tasks...</h2>
            </div>
            <div className="border-gray-100 border-2 rounded-lg overflow-auto max-w-[95%] mx-auto">
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

                        <Todo title={"Doctor's Appointment"} content={"I have a check-up at 11 AM. Don’t forget to bring my medical records from last year."} status={"Canceled"} category={"Medium"}></Todo>

                        <Todo title={"Read Book"} content={"Finish reading the last chapter of the new novel. I need to get to the conclusion to start the next one!"} status={"In Progress"} category={"Low"}></Todo>

                        <Todo title={"Clean the House"} content={"Vacuum, dust, and clean the bathroom. The house is a bit messy and needs to be tidy for the weekend."} status={"In Progress"} category={"Medium"}></Todo>

                        <Todo title={"Write Blog Post"} content={"Draft a blog post about productivity tips for work from home. Keep it engaging and informative."} status={"Completed"} category={"High"}></Todo>

                        <Todo title={"Call Mom"} content={"I need to catch up with Mom today. Call her to talk about the family plans for the weekend."} status={"Completed"} category={"Low"}></Todo>

                        <Todo title={"Update Resume"} content={"Add recent job experiences and update skills to reflect my new certifications."} status={"In Progress"} category={"High"}></Todo>

                        <Todo title={"Attend Workshop"} content={"Participate in the online workshop about digital marketing strategies. Take notes for the upcoming project."} status={"Completed"} category={"Medium"}></Todo>

                        <Todo title={"Buy Birthday Gift"} content={"Pick up a nice gift for my friend's birthday. A new watch would be a great idea!"} status={"In Progress"} category={"Medium"}></Todo>

                        <Todo title={"Plan Vacation"} content={"Book flights and accommodation for my summer vacation. Check out the best deals online."} status={"In Progress"} category={"Low"}></Todo>

                        <Todo title={"Fix Computer"} content={"The laptop is not turning on. Try troubleshooting or take it to the repair shop."} status={"Canceled"} category={"High"}></Todo>

                        <Todo title={"Organize Files"} content={"Organize all the digital files on my laptop and back them up to the cloud."} status={"Completed"} category={"Low"}></Todo>

                        <Todo title={"Prepare Dinner"} content={"Make a healthy dinner tonight. I'll cook grilled chicken with vegetables and some quinoa."} status={"In Progress"} category={"Low"}></Todo>

                        <Todo title={"Send Invoice"} content={"Send the invoice to the client for the completed project. Double-check the payment details."} status={"Completed"} category={"Medium"}></Todo>

                        <Todo title={"Review Code"} content={"Go over the code for the new feature. Look for bugs and make sure everything is well-documented."} status={"In Progress"} category={"High"}></Todo>

                        <Todo title={"Clean Out Email"} content={"Delete unnecessary emails and organize my inbox. Set up a folder for important projects."} status={"Completed"} category={"Medium"}></Todo>
                    </tbody>
                </table>
            </div>
        </>
    )
}


export default Home;