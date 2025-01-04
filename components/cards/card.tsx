import axios from "axios"
import EditCard from "./editDialog";

export default function Card({ id, word, definition }: { id: number, word: string, definition: string }) {
  return (
    <div className='flex py-2 my-2 mx-4 px-[2em] border border-solid border-black rounded'>
      <div className="w-[12rem] text-xs text-justify">
        {word}
      </div>
      <div className="w-[12rem] text-xs text-justify">
        {definition}
      </div>
      <button className='border border-black border-solid rounded h-[2.5rem] aspect-square px-2 text-xs mx-2 ml-auto' onClick={() => { cardDeleteHandler(id) }}>
        delete
      </button>
      <EditCard id={id} word={word} definition={definition}></EditCard>
      <button className='border border-black border-solid rounded h-[2.5rem] aspect-square px-2 text-xs mx-2' onClick={() => { cardClickHandler(id) }}>
        review
      </button>
    </div>
  )
}

function cardClickHandler(id: number) {
  window.location.href = `http://127.0.0.1:3000/card/${id}`;
}

async function cardDeleteHandler(id: number) {
  const response = await axios.delete(`http://localhost:3000/api/words/${id}/`);
  window.location.reload()
}
