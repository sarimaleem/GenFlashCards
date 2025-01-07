"use client"

import { useEffect, useState } from "react";
import TranslationCard from "./translationCard";
import ProductionCard from "./productionCard";
import StatisticsCard from "./statisticsCard";
import TabButton from "./tabButton";
import axios from "axios";

export default function PracticeCard({ data }: { data: Record<string, string> }) {
  console.log("page reload", data);

  if (data == null) {
    return <div></div>;
  }

  const word = data["word"];
  const definition = data["definition"];

  const [clickedButton, setClickedButton] = useState<string>("");

  const [translationQuestion, setTranslationQuestion] = useState('')
  const [productionQuestion, setProductionQuestion] = useState('')

  useEffect(() => {
    const fetchTranslationQuestion = async () => {
      const response = await axios.get(
        'http://127.0.0.1:3000/api/question/translate',
        {
          params: {
            word
          }
        }
      );
      const question = response.data
      setTranslationQuestion(question['data']);
    }
    const fetchProductionQuestion = async () => {
      const response = await axios.get(
        'http://127.0.0.1:3000/api/question/produce',
        {
          params: {
            word
          }
        }
      );
      const question = response.data
      setProductionQuestion(question['data']);
    }
    if (translationQuestion === '') {
      fetchTranslationQuestion()
    }

    if (productionQuestion === '') {
      fetchProductionQuestion()
    }
  }, [])

  return (
    <div className="flex flex-col items-center">
      <div className="text-3xl">
        {word}: {definition}
      </div>
      <div className="mt-4">
        <TabButton name="translation" clickedButton={clickedButton} setClickedButton={setClickedButton}></TabButton>
        <TabButton name="production" clickedButton={clickedButton} setClickedButton={setClickedButton}></TabButton>
        <TabButton name="statistics" clickedButton={clickedButton} setClickedButton={setClickedButton}></TabButton>
      </div>
      {clickedButton === 'translation' ? <TranslationCard word={word} question={translationQuestion} setQuestion={setTranslationQuestion} /> : <div />}
      {clickedButton === 'production' ? <ProductionCard word={word} question={productionQuestion} setQuestion={setProductionQuestion} /> : <div />}
      {clickedButton === 'statistics' ? <StatisticsCard /> : <div />}
    </div>
  );
}

