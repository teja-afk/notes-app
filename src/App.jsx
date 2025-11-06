import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  function submitHandler(e){
    e.preventDefault()

    const copyTask = [...task]
    copyTask.push({title, details})
    setTask(copyTask)

    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form onSubmit={(e) => {
          submitHandler(e);
        }} className="flex flex-col items-center lg:w-1/2 gap-4 p-10"
      >
        <h1 className="text-4xl mb-2 font-bold">Add Notes</h1>

        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 w-full font-medium py-3 border-2 outline-none rounded"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          className="px-5 w-full font-medium h-32 py-2 flex flex-row items-start border-2 outline-none rounded"
          placeholder="Write Details here"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />

        <button className="bg-white active:scale-95 font-medium w-full outline-none  text-black px-5 py-2 rounded">
          Add Note
        </button>
      </form>

      <div className="lg:w-1/2 lg:border-l-2  p-10">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto">
          {task.map(function (elem, idx){
            return (
              <div
                key={idx}
                className=" flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"
              >
                <div>
                  <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
                  <p className='mt-3 leading-tight font-semibold text-xs  text-gray-600'>{elem.details}</p>
                </div>
                <button
                  onClick={()=>{
                    deleteNote(idx)
                  }} className="w-full cursor-pointer active:scale-95  bg-red-600 rounded text-white text-xs font-bold py-1">
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App
