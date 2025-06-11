import Navbar from '../components/Navbar';
import Chatbot from '../components/Chatbot';

export default function ChatPage() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: "2rem" }}>
        <h2>💬 Chatbot & Community Chat</h2>
        <Chatbot />
        <hr />
        <h3>Community Chatroom (AI-moderated)</h3>
        <p>[Dummy chatroom UI here – all messages are checked for safety!]</p>
      </main>
    </div>
  );
}