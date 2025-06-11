import { useState } from 'react';

const questions = [
  { q: "What's your favorite way to spend free time?", a: ["Reading", "Sports", "Drawing", "Talking to friends"] },
  { q: "Which word describes you best?", a: ["Curious", "Creative", "Kind", "Adventurous"] },
  { q: "What do you want from this community?", a: ["Support", "Fun", "Learning", "Friends"] }
];

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);

  if (step >= questions.length) {
    return (
      <div>
        <h3>🎉 Thanks for taking the quiz!</h3>
        <p>Your choices show you value: <b>{answers.join(", ")}</b>.</p>
      </div>
    );
  }

  return (
    <div>
      <p>{questions[step].q}</p>
      {questions[step].a.map((option, i) =>
        <button key={i} onClick={() => {
          setAnswers([...answers, option]);
          setStep(step + 1);
        }}>{option}</button>
      )}
    </div>
  );
}