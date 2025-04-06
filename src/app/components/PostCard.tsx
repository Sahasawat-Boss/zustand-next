'use client';

import usePostStore from "../store/postTS";

export default function PostCard() {
    const post = usePostStore((state) => state.post);
    console.log(post); // ✅ You'll see correct data

    return (
        <div style={{ border: '1px solid black', padding: '1rem' }}>
            <p>Title: {post.title || 'No title found'}</p>
            <p>Content: {post.content || 'No content found'}</p>
        </div>
    );
}
