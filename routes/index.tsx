/** @jsx h */

import { h } from "preact";
import Blog from "../islands/Blog.tsx";


export const Head = () => (
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="A portfolio website using fresh and deno" />
    <title>Fresh Portfolio</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css" />
    <link rel="stylesheet" href="/index.css" />
  </head>
);


export default function Home() {
  let avatarImg = 'https://avatars.githubusercontent.com/u/30053857?v=4'
  return (
    <div>
      <Head />
      <div>
        <div class="container" style={{ display: 'grid', justifyItems: 'center', maxWidth: '800px', marginTop: '25px' }} >
          <img
            src={avatarImg}
            style={{ borderRadius: "50%", height: "100px", width: "100px" }}
            alt="Mwa"
          />
          <h1>Zachary Carlin</h1>
          <p>I'm always building 🏗️ new things, aiming for speed 🚀, reliability 🧰, and simplicity 🪑. Introdce&nbsp;
            <a href="">Fresh</a> a just-in-time rendering engine builit for the edge.
          </p><br />
          <Blog user={'About7Sharks'} repo={'Markdown'} />
        </div>
      </div>
    </div>
  );
}
