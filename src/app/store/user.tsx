import { create } from 'zustand'

export const userStore = create((set) => ({
    user: {
        full_name: "Sahasawat R",
        short_name: "Boss"
    }
}));

// "use client"

// import { userStore } from "@/app/store/user"

// const Home = () => {
//     const user = userStore((state: any) => state.user)

//     return (
//         <main>
//             Home
//             <div>
//                 {user.full_name}
//                 <br />
//                 {user.short_name}
//             </div>
//         </main>
//     )
// }

// export default Home