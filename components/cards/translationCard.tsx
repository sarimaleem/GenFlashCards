'use client'

import { useEffect } from "react"
import axios from "axios"
import QuestionForm from "./questionForm";

export default function TranslationCard({ word, question, setQuestion }: { word: string, question: string, setQuestion: Function }) {
  console.log("the question is", question);
  useEffect(() => {
    const fetchQuestion = async () => {
      const response = await axios.get(
        'http://127.0.0.1:3000/api/question/translate',
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
      <i>Translate the following sentence to English:</i>
      <br />
      <QuestionForm question={question}></QuestionForm>
    </div>
  )
}
