import axios from "axios"
import EditCard from "./editDialog";

export default function Card({ id, word, definition }: { id: number, word: string, definition: string }) {
  return (
    <div className='flex py-2 my-2 mx-4 px-[2em] max-w-2xl border-[2px] border-solid border-black rounded'>
      <div className="w-[12rem] text-xs text-justify flex items-center">
        {word}
      </div>
      <div className="w-[12rem] text-xs text-justify flex items-center">
        {definition}
      </div>
      <button
        className='border-[2px] border-black border-solid rounded h-[2.5rem] aspect-square px-2 text-xs mx-2 ml-auto transition duration-300 hover:bg-[#ffe3e3]'
        onClick={() => { cardDeleteHandler(id) }}
      >
        delete
      </button>
      <EditCard id={id} word={word} definition={definition}></EditCard>
      <button className='border-[2px] border-black border-solid rounded h-[2.5rem] aspect-square px-2 text-xs mx-2 transition duration-300 hover:bg-[#d0ebff]' onClick={() => { cardClickHandler(id) }}>
        review
      </button>
    </div>
  )
}

function cardClickHandler(id: number) {
  window.location.href = `http://127.0.0.1:3000/card/${id}`;
}

async function cardDeleteHandler(id: number) {
  await axios.delete(`http://localhost:3000/api/words/${id}/`);
  window.location.reload()
}
