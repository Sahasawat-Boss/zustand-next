"use client"

import { userStore } from "@/app/store/user"

const Home = () => {

  const user = userStore((state: any) => state.user)

  return (
    <main>
      Home
      <div>
        {user.full_name}
        <br />
        {user.short_name}
      </div>
    </main>
  )
}

export default Home