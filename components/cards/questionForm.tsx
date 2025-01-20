"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"
import axios from "axios"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "../ui/textarea"

const formSchema = z.object({
  answer: z.string().min(1, {
    message: "answer must be at least 1 character.",
  }).max(300, {
    message: "answer cannot be more than 300 characters",
  }),
})

export default function QuestionForm({ word, question, evaluation, setEvaluation, fetchQuestion }: { word: string, question: string, evaluation: Record<string, string>, setEvaluation: Function, fetchQuestion: Function}) {

  const [submitted, setSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      answer: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (submitted) {
      // the button should be showing as next
      setEvaluation({})
      fetchQuestion()
      form.reset()
    } else {
      const response = await axios.post("http://127.0.0.1:3000/api/question/translate", {
        word,
        question,
        answer: values["answer"],
      })

      setEvaluation(response.data)
    }
    setSubmitted(!submitted)
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="my-4">
        <FormField
          control={form.control}
          name="answer"
          render={({ field }) => (
            <FormItem className="flex flex-col items-center mb-4">
              <FormLabel className="w-[20rem] font-normal text-xs text-center">
                {question}
              </FormLabel>
              <FormControl>
                <Textarea
                  className="border-[2px] border-black w-[20rem] max-w-[40rem]"
                  placeholder="your answer"
                  disabled={submitted}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-white border-[2px] border-black text-black max-w-xl hover:bg-[#dbe4ff]"
        >
          {submitted ? "Next" : "Submit"}
        </Button>
      </form>
    </Form>
  )
}
