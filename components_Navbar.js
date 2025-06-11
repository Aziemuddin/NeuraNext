import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#56CCF2", display: "flex", justifyContent: "space-between" }}>
      <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Youth Safe Space</span>
      <div>
        <Link href="/">Home</Link> |{" "}
        <Link href="/chat">Chat</Link> |{" "}
        <Link href="/quiz">Quizzes</Link> |{" "}
        <Link href="/profile">Profile</Link> |{" "}
        <Link href="/help">Help</Link>
      </div>
    </nav>
  );
}