import { create } from 'zustand';

type Post = {
    postContent: string;
    postTitle: string;
};

type PostState = {
    post: Post;
    updatePost: (newPost: Post) => void;
};

const postStore = create<PostState>((set) => ({
    post: {
        postContent: 'postContent1',
        postTitle: 'My First Post'
    },
    updatePost: (newPost) =>
        set(() => ({
            post: newPost
        }))
}));

export default postStore;

// 'use client';

// import postStore from './store/post';
// import { useState } from 'react';

// export default function Home() {
//     const post = postStore((state) => state.post);
//     const updatePost = postStore((state) => state.updatePost);

//     const [newContent, setNewContent] = useState('');

//     return (
//         <div>
//             <h1>{post.postTitle}</h1>
//             <p>{post.postContent}</p>
//             <br />

//             <input
//                 className="border"
//                 type="text"
//                 placeholder="Update content"
//                 value={newContent}
//                 onChange={(e) => setNewContent(e.target.value)}
//             />
//             <br />
//             <button
//                 className="border"
//                 onClick={() =>
//                     updatePost({
//                         postContent: newContent,
//                         postTitle: post.postTitle // keep title same for now
//                     })
//                 }
//             >
//                 Update Post
//             </button>
//         </div>
//     );
// }
