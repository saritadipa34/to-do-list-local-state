import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";

const Todo=()=>{
    const [tasks,setTasks]=useState(()=>{
        const storedTasks=localStorage.getItem("localTodo");
        return storedTasks ? JSON.parse(storedTasks) : [];
    });
    const [inputValue,setInputValue]=useState("");
    const [fullText,setFullText]=useState(null);

useEffect(()=>{
localStorage.setItem("localTodo",JSON.stringify(tasks));
},[tasks]);

const handleText=(i)=>{
   setFullText(prev=>(prev === i ? null : i))
}

const handleDelete=(i)=>{
    const filtered=tasks.filter((_,index)=>{
        return i !== index;
    })
    setTasks(filtered);
}

const handleEdit=(i)=>{
    const oldTask=tasks[i];
    const promptValue=prompt("Edit Task",oldTask);
    if(promptValue === null || promptValue.trim() === ""){
        alert("Invalid Input");
        return;
    };
    if(promptValue === oldTask){
        alert("No changes made");
        return;
    }
    const updated=[...tasks];
    updated[i]=promptValue;
    setTasks(updated);
}

const handleInput=(e)=>{
    const inputData=e.target.value;
    setInputValue(inputData);
}

const handleAdd=()=>{
    if(inputValue.trim() === "") return;
    setTasks([...tasks,inputValue]);
    setInputValue("");
}

    return(
        <div className="min-h-[200px] w-[500px] bg-black text-white px-10 py-5">
             <h1 className="text-center font-bold text-xl">Todo List</h1>
             <div className="flex justify-between mb-5">
             <p>24/06/1999</p>
             <p>2:27:28</p>
             </div>
             <div className="w-full flex mb-4">
             <input value={inputValue} onChange={handleInput} type="text" className=" px-2 outline-0 border-1 w-3/4 bg-white text-black h-10 rounded-l-lg" />
             <p onClick={handleAdd} className="h-10 flex justify-center items-center cursor-pointer bg-sky-400 w-1/4 text-white rounded-r-lg">Add Task</p>
             </div>
        <div className="flex flex-col gap-4 "> 
            { 
tasks && tasks.map((task,i)=>(
    <div key={i} className="w-full flex  min-h-10 rounded-lg">
    <div className={`px-2 w-3/4 min-h-10 bg-white max- rounded-l-lg text-black overflow-hidden ${fullText === i ? "whitespace-pre-wrap break-words" : "overflow-hidden text-ellipsis whitespace-nowrap" }`}
    onClick={()=>handleText(i)}>
 {task}
    </div>
<div className="w-1/4 min-h-10 px-2  text-wrap flex items-center justify-between gap-2 bg-white rounded-r-lg">
<FaEdit onClick={()=>handleEdit(i)} className="text-2xl text-amber-400 cursor-pointer"/>
<RiDeleteBin6Fill onClick={()=>handleDelete(i)} className="text-2xl text-red-400 cursor-pointer" />
        </div>
     </div>
))

            }
        </div>

        </div>
    )
}
export default Todo;