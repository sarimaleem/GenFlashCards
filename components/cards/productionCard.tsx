'use client'
import { useEffect, useState } from "react"
import axios from "axios"
import QuestionForm from "./questionForm"
import EvaluationBanner from "./evaluationBanner"

export default function ProductionCard({ word, question, setQuestion }: { word: string, question: string, setQuestion: Function }) {

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

  const [evaluation, setEvaluation] = useState({});

  return (
    <div className='text-center'>
      <i>Translate the following sentence to Arabic</i>
      <br />
      <QuestionForm word={word} question={question} evaluation={evaluation} setEvaluation={setEvaluation} fetchQuestion={fetchQuestion} />
      <EvaluationBanner evaluation={evaluation}></EvaluationBanner>
    </div>
  )
}
