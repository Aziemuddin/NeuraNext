import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: "2rem", textAlign: "center" }}>
        <h1>👋 Welcome to Youth Safe Space!</h1>
        <p>
          A fun, safe community for youth and young adults.<br />
          Chat, play, learn, and express yourself—always safe and always supported!
        </p>
        <div style={{ margin: "2rem 0" }}>
          <a href="/chat" className="button">Start Chatting</a>
          <a href="/quiz" className="button">Take a Quiz</a>
        </div>
        <footer>
          <a href="/privacy">Privacy</a> | <a href="/help">Help</a>
        </footer>
      </main>
    </div>
  );
}