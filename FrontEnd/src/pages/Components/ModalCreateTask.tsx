import React, {useState, useEffect} from 'react';

function Modal(){
    return(
        <>
            {/*-- Modal */}
            <div className="p-10 fixed top-[50%] left-[50%] w-[500px] transform-[translate(-50%,-50%)] h-[500px] bg-white z-100 max-w-[95%] rounded-xl border border-gray-200">
                <div className="flex align-center justify-between mb-10">
                    <div className="flex flex-col items-start text-left">
                        <h1 className="text-3xl font-bold color-gray-600 mb-4 text-center m-[0]">Create Task</h1>
                        <span className="text-2xl text-blue-400 font-bold hover:cursor-pointer">How to create a task guide</span>
                    </div>
                    <button className="text-5xl">X</button>
                </div>
                {/*Options */}
                <div className="flex align-center">
                    <img className="p-3 w-[50px] h-[50px] border-l-2 border-t-2 border-r-2 border-gray-200 rounded-xl rounded-br-xs" src="/src/assets/svg/CreateTask.svg" alt="Create Task Icon" />
                    <div className="flex-1 border-b-2 border-gray-200"></div>
                </div>

                <div className="flex">
                    <span>Project name</span>
                    <input/>
                </div>


            </div>
            {/* Overlay */}
            <div className="fixed top-[0] left-[0] bottom-[0] right-[0] shadow-xs blur-sm z-5 bg-black/40"></div>
        </>
    )
}

export default Modal;

