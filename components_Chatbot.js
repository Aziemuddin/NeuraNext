import { useState } from 'react';

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  // Dummy AI moderation (real logic would call an AI API)
  function moderateAndReply(message) {
    if (/(badword|hate|selfharm)/i.test(message)) {
      return "I'm here to keep things safe—let's talk about something positive. If you need help, click [Help].";
    }
    // Dummy AI response
    if (/sad|depress|stress|help/i.test(message)) {
      return "I'm sorry you're feeling this way. Remember, you're not alone. Would you like some tips or resources?";
    }
    return "That's interesting! Tell me more.";
  }

  function sendMessage() {
    if (!input.trim()) return;
    const newMessages = [...messages, { from: 'user', text: input }];
    const botReply = moderateAndReply(input);
    setMessages([...newMessages, { from: 'bot', text: botReply }]);
    setInput('');
  }

  return (
    <div style={{ background: "#F6F6F6", padding: "1rem", borderRadius: "10px", marginBottom: "1rem" }}>
      <div style={{ minHeight: "100px", marginBottom: "1rem" }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ textAlign: msg.from === 'bot' ? 'left' : 'right' }}>
            <b>{msg.from === 'bot' ? 'AI Bot' : 'You'}:</b> {msg.text}
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Say something..."
        style={{ width: "70%", marginRight: "0.5rem" }}
        onKeyDown={e => e.key === 'Enter' && sendMessage()}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}