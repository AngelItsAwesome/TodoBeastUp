import {User} from '../../utils/Interfaces.ts'


function Todo({title}: {title: string, content: string, date: string, owner: User, status: boolean}){
    return(
        <div className="border border-gray-500 border-solid rounded-xl p-5">
            <h1 className="text-5xl">Todo title</h1>
            <div className="grid grid-cols-2">
                <p className="text-2xl break-all">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                <div className="flex flex-col gap-20">
                    <button className="bg-yellow-300 h-[100%] rounded-xl">EDIT</button>
                    <button className="bg-red-600 h-[100%] rounded-xl">DELETE</button>
                </div>
            </div>
        </div>
    )
}

export default Todo;