import axios from "axios"
import PracticeCard from "@/components/cards/practiceCard";
import { getFlashcard } from "@/queries/words.queries";
import { client } from "@/lib/supabaseClient";


export default async function Home({ params }: { params: Promise<{ id: number }> }) {
  const parameters = await params;
  const id = parameters.id
  const data = await getFlashcard.run({id}, client)

  if (data === null || data[0] === null) {
    return (
      <div>
        Fail
      </div>
    )
  }

  return (
    <div>
      <PracticeCard data={data[0]}></PracticeCard>
    </div>
  )
}

