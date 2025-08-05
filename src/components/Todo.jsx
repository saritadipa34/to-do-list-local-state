
const Todo=()=>{
    return(
        <div className="max-h-[400px] w-[500px] bg-black text-white px-10 py-5">
             <h1 className="text-center font-bold text-xl">Todo List</h1>
             <div className="flex justify-between mb-5">
             <p>24/06/1999</p>
             <p>2:27:28</p>
             </div>
             <div className="w-full flex">
             <input type="text" className=" px-2 outline-0 border-1 w-3/4 bg-white text-black h-10 rounded-l-2xl" />
                <p  className="h-10 flex justify-center items-center cursor-pointer bg-sky-400 w-1/4 text-white rounded-r-lg">Add Task</p>
            
             </div>
        </div>
    )
}
export default Todo;