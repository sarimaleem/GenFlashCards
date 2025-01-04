import axios from "axios"
import { supabase } from '@/lib/supabaseClient';
import PracticeCard from "@/components/cards/practiceCard";


export default async function Home({ params }: { params: Promise<{ id: number }> }) {
  const parameters = await params;
  const id = parameters.id
  const { data } = await supabase.from('flashcards').select('*').eq('id', id);

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

