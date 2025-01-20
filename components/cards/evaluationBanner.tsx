'use client'

export default function EvaluationBanner({ evaluation }: { evaluation: Record<string, any> }) {
  if (Object.keys(evaluation).length === 0) {
    return (<div></div>)
  }

  if (evaluation['evaluation'] === 1) {
    return (
      <div className="bg-red-100 border border-red-500 text-red-700 px-4 py-3 my-4 w-[20rem] max-w-[40rem]" role="alert">
        <p className="font-bold text-sm">Wrong!</p>
        <p className="text-xs">Answer: {evaluation['feedback']}</p>
      </div>
    )
  }
  else if (evaluation['evaluation'] === 2) {
    return (
      <div className="bg-yellow-100 border border-yellow-500 text-yellow-700 px-4 py-3 my-4 w-[20rem] max-w-[40rem]" role="alert">
        <p className="font-bold">Almost</p>
        <p className="text-xs">Answer: {evaluation['feedback']}</p>
      </div>
    )
  }
  else if (evaluation['evaluation'] === 3) {
    return (
      <div className="bg-green-100 border border-green-500 text-green-700 px-4 py-3 my-4 w-[20rem] max-w-[40rem]" role="alert">
        <p className="font-bold">Correct!</p>
        <p className="text-xs">Answer: {evaluation['feedback']}</p>
      </div>
    )
  } else {
    console.log('something went wrong here')
    return (<div></div>)
  }
}
