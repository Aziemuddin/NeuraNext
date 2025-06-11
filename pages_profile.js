import Navbar from '../components/Navbar';

export default function Profile() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: "2rem" }}>
        <h2>🧑 Your Profile</h2>
        <div style={{ background: "#F6F6F6", padding: "1rem", borderRadius: "10px", width: "300px", margin: "auto" }}>
          <div style={{ marginBottom: "1rem" }}>
            <img src="/images/avatar1.png" alt="avatar" style={{ width: "80px", borderRadius: "50%" }} />
            <button>Edit Avatar</button>
          </div>
          <p>Nickname: <b>Dreamer123</b></p>
          <p>Badges: <span>Kind Helper</span>, <span>Quiz Master</span></p>
          <a href="/privacy">View/Edit Privacy Settings</a>
        </div>
      </main>
    </div>
  );
}