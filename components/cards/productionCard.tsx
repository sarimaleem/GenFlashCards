'use client'
import { useEffect, useState } from "react"
import { Textarea } from "../ui/textarea"
import axios from "axios"

export default function ProductionCard({ question, setQuestion }: { question: string, setQuestion: Function }) {
  useEffect(() => {
    const fetchQuestion = async () => {
      const response = await axios.get('http://127.0.0.1:3000/api/question/produce');
      const question = response.data
      setQuestion(question['data']);
    }
    if (question === '') {
      fetchQuestion()
    }
  }, [])

  return (
    <div className='mt-[5rem] text-center'>
      <i>Translate the following sentence to Arabic</i>
      <div>{question}</div>
      <form>
        <Textarea className="border-[2px] border-gray-300 border-dotted w-[25rem] h-[5rem]"></Textarea>
      </form>
    </div>
  )
}
