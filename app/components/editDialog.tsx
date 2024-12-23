import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"
import axios from "axios"

export default function EditCard({ id, word, definition }: { id: number, word: string, definition: string }) {

  const [data, setData] = useState({
    word: word,
    definition: definition
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const response = await axios.patch(`http://localhost:3000/api/words/${id}`, {
      data
    })

    window.location.reload()
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="border border-black border-dotted rounded h-[2.5rem] aspect-square px-2 text-xs mx-2">edit</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Word</DialogTitle>
          <DialogDescription>
            Edit
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="word" className="mb-1 text-sm font-medium text-gray-700">
              Word
            </label>
            <input
              type="text"
              id="word"
              className="border border-gray-300 border-dotted rounded-lg px-3 py-2 outline-none"
              placeholder="Enter a word"
              value={data.word}
              onChange={(e) => { setData({ ...data, word: e.target.value }) }}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="definition"
              className="mb-1 text-sm font-medium text-gray-700"
            >
              Definition
            </label>
            <input
              type="text"
              id="definition"
              className="border border-gray-300 border-dotted rounded-lg px-3 py-2 outline-none"
              placeholder="Enter a definition"
              value={data.definition}
              onChange={(e) => { setData({ ...data, definition: e.target.value }) }}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 font-medium rounded-lg border border-dotted border-black"
          >
            Submit
          </button>
        </form>
        <DialogFooter>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}




