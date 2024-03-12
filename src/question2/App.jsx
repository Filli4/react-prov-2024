// 2. API-Anrop och Rendering (3p)
// Använd fetch för att hämta posts från https://jsonplaceholder.typicode.com/posts.
// Visa endast titlarna för de första 5 inläggen.
// Varje titel ska vara en klickbar länk som, när man klickar på den,
// loggar postens ID till konsolen. Använd <button> för den klickbara länken.
import { useState, useEffect } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/"
      );
      const data = await response.json();
      setPosts(data.slice(0, 5));
    }

    getPosts();
  }, []);

  return (
    <main>
      {posts.map((post) => {
        return (
          <div>
            <button onClick={(e) => {  console.log(post.id); } }>{post.title}</button>
          </div>
        );
      })}
    </main>
  );
}