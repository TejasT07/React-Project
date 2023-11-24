import { useState } from "react"

const App = () => {

  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTasks = () => {
    if (task !== "") {
      setTasks([...tasks, task])
      setTask("");
      console.log(tasks);
    }
  }

  const deletetasks = (index) => {
    const updatedList = [...tasks];
    console.log('Automatic...')
    // delete updatedList[index];
    updatedList.splice(index, 1)
    setTasks(updatedList)

  }

  return (
    <div className="flex flex-col items-center">
      <div>
        <h1 className="text-4xl  m-10 font-bold">Simple Todo App</h1>
      </div>
      <div className="p-6">
        <input className="bg- black-100 rounded p-3 m-3 "
          type="text"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
          placeholder="Create a new task" />
        <button onClick={addTasks}
          className="text-white bg-red-300 rounded p-3 m-3 font-bold hover:bg-red-600"> Add Tasks </button>
      </div>
      <div>
        {tasks?.length > 0 ? (
          <ul> {
            tasks.map((task, index) => (
              <div className=" flex bg-slate-100 m-4 py-4 pl-12 pr-4 rounded-md" key={index}>
                <li className="self-center font-semibold pr-10 mr-6 grow">{task}</li>
                <button onClick={() => { deletetasks(index) }}
                  className="bg-green-300 rounded p-3 m-3 hover:bg-green-400 font-bold">Delete</button>
              </div>
            ))
          }
          </ul>
        ) : (
          <div>
            <p> No Task found</p>
          </div>
        )}
      </div>
    </div>

  )

}
export default App