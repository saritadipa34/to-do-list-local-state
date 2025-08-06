import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";

const Todo=()=>{
    const [tasks,setTasks]=useState([]);
const [inputValue,setInputValue]=useState("");

const handleInput=(e)=>{
    const inputData=e.target.value;
    setInputValue(inputData);
}

const handleClick=()=>{
    if(inputValue.trim() === "") return;
    setTasks([...tasks,inputValue]);
    setInputValue("");
    console.log("clicked");
}

    return(
        <div className="max-h-[400px] w-[500px] bg-black text-white px-10 py-5">
             <h1 className="text-center font-bold text-xl">Todo List</h1>
             <div className="flex justify-between mb-5">
             <p>24/06/1999</p>
             <p>2:27:28</p>
             </div>
             <div className="w-full flex mb-4">
             <input value={inputValue} onChange={handleInput} type="text" className=" px-2 outline-0 border-1 w-3/4 bg-white text-black h-10 rounded-l-lg" />
             <p onClick={handleClick} className="h-10 flex justify-center items-center cursor-pointer bg-sky-400 w-1/4 text-white rounded-r-lg">Add Task</p>
             </div>
        <div className="flex flex-col gap-4 overflow-y-hidden"> 
            { 
tasks.map((task,i)=>(
    <div key={i} className="w-full flex" task={task}>
    <div className="px-2 w-3/4 min-h-10 bg-white rounded-l-lg text-black text-ellipsis overflow-hidden">
    {task}
    </div>
<div className="w-1/4 h-10 px-2 max-h-20 text-wrap flex items-center justify-between gap-2 bg-white rounded-r-lg">
<FaEdit className="text-2xl text-amber-400 cursor-pointer"/>
<RiDeleteBin6Fill className="text-2xl text-red-400 cursor-pointer" />
        </div>
     </div>
))

            }
        </div>

        </div>
    )
}
export default Todo;