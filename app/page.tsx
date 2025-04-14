'use client'

import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [ping, setPing] = useState('')
  const API_URL = process.env.NEXT_PUBLIC_HOST_URL;
  useEffect(() => {
    const fetchPing = async () => {
      const response = await axios.get(`${API_URL}/api/ping`);
      setPing(response.data['data']);
      let test = await axios.get(`${API_URL}/api/words`);
      console.log(test)
    };
    fetchPing();
  }, [])



  return (
    <div className="text-center p-6">
      <h1 className="text-2xl font-bold">{ping}</h1>
    </div>
  );
}
