/** @jsx h */
import { h } from "preact";
import Blog from "../islands/Blog.tsx";

export default function Home() {
  let avatarImg = 'https://avatars.githubusercontent.com/u/30053857?v=4'

  return (
    <div style={{ display: 'grid', justifyItems: 'center'}}>
      <div style={{ display: 'grid', justifyItems: 'center', maxWidth: '800px' }}>
        <img
          src={avatarImg}
          style={{ borderRadius: "50%", height: "100px", width: "100px" }}
          alt="Mwa"
        />
        <h1>Zachary Carlin</h1>
        <p>
          I'm always building 🏗️ new things, aiming for speed, reliability, and simplicity. Introdce&nbsp;
          <a href="">Fresh</a> a just-in-time rendering engine builit for the edge.
        </p>
        <Blog user={'About7Sharks'} repo={'Markdown'} />
      </div>
    </div>
  );
}
