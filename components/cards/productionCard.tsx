'use client'
import { useEffect } from "react"
import axios from "axios"
import QuestionForm from "./questionForm"

export default function ProductionCard({ word, question, setQuestion }: { word: string, question: string, setQuestion: Function }) {
  useEffect(() => {
    const fetchQuestion = async () => {
      const response = await axios.get(
        'http://127.0.0.1:3000/api/question/produce',
        {
          params: {
            word
          }
        }
      );
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
      <br />
      <QuestionForm question={question} ></QuestionForm>
    </div>
  )
}
