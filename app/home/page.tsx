'use client'

import AddCard from "@/components/cards/addCard";
import Card from "@/components/cards/card";
import { useEffect, useState } from "react";

export default function Home() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:3000/api/words')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setCards(data);
      });
  }, []);

  return (
    <div className="flex flex-col items-center text-center min-h-screen">
      <div className="text-lg">
        Flash Cards
      </div>
      <div className="text-xs text-gray-400">
        A list of all your flashcards here, create and delete them at will.
      </div>
      <br />
      {cards.map((word: any, index: any) => (
        <Card key={index} id={word['id']} word={word['word']} definition={word['definition']} ></Card>
      ))}
      <br />
      <AddCard></AddCard>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
