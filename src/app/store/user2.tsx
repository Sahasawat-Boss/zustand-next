import { create } from 'zustand'

export const userStore2 = create((set) => ({
    user: {
        name: "Boss"
    },

    updateUser: (newUser: any) => set((state: any) => ({
        user: { ...state, ...newUser }
    }))

}))


// "use client"

// import { userStore2 } from "./store/user2"

// function Home() {
//     const user = userStore2((state: any) => state.user)
//     const updateUser = userStore2((state: any) => state.updateUser)

//     return (
//         <div>
//             <div>
//                 {user.name}
//             </div>
//             <br />
//             <input type="text" onChange={(e: any) => {
//                 updateUser({
//                     name: e.target.value
//                 })
//             }}
//                 className="border" />
//         </div>
//     )
// }

// export default Home