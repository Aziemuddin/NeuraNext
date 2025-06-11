import Navbar from '../components/Navbar';
import Quiz from '../components/Quiz';

export default function QuizPage() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: "2rem" }}>
        <h2>🧩 Fun Quizzes & Games</h2>
        <Quiz />
      </main>
    </div>
  );
}