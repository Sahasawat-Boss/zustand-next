import { create } from 'zustand';

type PostState = {
    post: {
        title: string;
        content: string;
    };
};

const usePostStore = create<PostState>(() => ({
    post: {
        title: 'My First Post',
        content: 'This is the content of the post',
    },
}));

export default usePostStore;
