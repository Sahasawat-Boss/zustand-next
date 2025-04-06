'use client';

import usePostStore from "./store/post";

export default function Dashboard() {
  const post = usePostStore((state) => state.post);
  console.log(post); // ✅ Debug

  return (
    <div style={{ border: '1px solid black', padding: '1rem' }}>
      <p>Title: {post.title || 'No title found'}</p>
      <p>Content: {post.content || 'No content found'}</p>
    </div>

  );
}
