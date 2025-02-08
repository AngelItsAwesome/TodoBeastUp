import {User} from '../../utils/Interfaces.ts'


function Todo({title}: {title: string, content: string, date: string, owner: User, status: boolean}){
    return(
        <div className="grid grid-cols-[2fr_2fr] items-center gap-x-4 mt-10">
            <div className="flex items-center gap-x-2">
                <img className="h-[4rem]" src="/src/assets/home/pending.png" alt={"image"}/>
                <p className="text-2xl break-all"> Walk the dog in the afternoon</p>
            </div>
            <div className="flex gap-x-3">
                <button className="h-[3rem] w-[9rem] bg-green-500 rounded-xl text-2xl text-black font-bold">Completed</button>
                <button className="h-[3rem] w-[9rem] bg-yellow-500 rounded-xl text-2xl text-black font-bold">Edit</button>
                <button className="h-[3rem] w-[9rem] bg-red-500 rounded-xl text-2xl text-black font-bold">DELETE</button>
            </div>
        </div>
    )
}

export default Todo;