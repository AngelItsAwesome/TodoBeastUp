function Groups({name} : { name: string }) {
    return (
        <div className="border-gray-100 border-2 rounded-lg w-[300px] p-5">
            <div className="flex items-center gap-x-4">
                <img className="w-30 h-30" src="/src/assets/home/groupdefault.jpg" alt="GroupImage"/>
                <h1 className="text-4xl">{name}</h1>
                <button className="text-3xl font-bold hover:cursor-pointer ml-auto">...</button>
            </div>
        </div>
    )
}
export default Groups;