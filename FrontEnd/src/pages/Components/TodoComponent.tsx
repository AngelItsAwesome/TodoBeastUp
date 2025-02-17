import {User} from '../../utils/Interfaces.ts'


function Todo({title,content,status,category}: {title: string, content: string, status: string, category: string}){
    return(
        <tr className="border-t-2 border-gray-100 h-20">
            <td className="p-2 text-2xl whitespace-nowrap"><input type="checkbox" /></td>
            <td className="p-2 text-2xl whitespace-nowrap">{title}</td>
            <td className="p-2 text-2xl whitespace-nowrap">{content}</td>
            <td className="p-2 text-2xl whitespace-nowrap">
                <div className="flex items-center gap-x-2">
                    <img className="w-6 h-6" src={`/src/assets/svg/${status}.svg`} alt="Clock"/>
                    <span>{status}</span>
                </div>
            </td>
            <td className="p-2 text-2xl whitespace-nowrap">
                <div className="flex items-center gap-x-2">
                    <img className="w-8 h-8" src={`/src/assets/svg/${category}.svg`} alt="Clock"/>
                    <span>{category}</span>
                </div>
            </td>
        </tr>
    )
}

export default Todo;