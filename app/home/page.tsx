'use client'
import { useEffect, useState } from "react";
import Card from "../components/card";
import AddCard from "../components/addCard";

export default function Home() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/words')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setCards(data);
      });
  }, []);

  return (
    <div className="text-center bg-gray-50 min-h-screen">
      <div className="text-lg">
        Flash Cards
      </div>
      <div className="text-xs text-gray-400">
        A list of all your flashcards here, create and delete them at will.
      </div>
      <br />
      {cards.map((word, index) => (
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
