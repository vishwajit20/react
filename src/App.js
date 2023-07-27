import './App.css';
import React,{useState} from "react";

function App() {


  const [todo, setTodo]= useState([
    {"id": "1", "name": "Shahrukh Khan"},
    {"id": "2", "name": "Akshay Kumar"},
  ])

  const [newTask, setNewTask]= useState("");
  const [updateTask, setUpdateTask]= useState("");
  const [apidata, setApidata]= useState("");


  const addtask=()=>{
    let num= Math.random();
    let newContent= {id: num, name: newTask};
    let newww= [...todo, newContent];
    setTodo(newww); 
    setNewTask("");
    console.log(todo, "todo");
  }

  const deletetask=(id)=>{
  let totoo= todo.filter((fil)=>{
    return(fil.id !=id)
  })
  setTodo(totoo);
  }

  // const edittask=()={

  // }

  const changetask= (e)=>{
    let newentry={
      id: updateTask.id,
      name: e.target.value
    }

    setUpdateTask(newentry);
  }

  const apicall=()=> {
    fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{
        let rrrr= res;
        setApidata(rrrr);
        console.log(res, apidata,"apicall");
    })
  // return(
  //   <div>
  //   console.log("jhjhjhjh")
  //   <div>ji ho</div>
  //   </div>
  // )
  }
  return (
    <div className="App">
     {todo.map((tod)=>{
      return(
        <div key={tod.id}>
         <span>{tod.id}</span>   <span>{tod.name}</span>    
         <span onClick={()=>deletetask(tod.id)}>Delete me!</span>  
         <span onClick={()=>setUpdateTask({
          id: tod.id, name: tod.name
         })}>Edit me!</span>   
        </div>
      )
     })}
       <input type="text" value={newTask} onChange={(e)=>setNewTask(e.target.value)}/>
         <button onClick={addtask}>Add new!</button>


         <input type="text" value={updateTask.name} onChange={(e)=>changetask(e)}/>
         <button onClick={updateTask.name}>Update!</button>
         <button onClick={apicall}>api call!</button>
         {/* <h5>{apidata}</h5> */}
    </div>
  );
}

export default App;
