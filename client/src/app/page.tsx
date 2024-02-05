import Link from "next/link";
import Hero from "./components/hero";
import homeImg from "@/../public/images/homeImg.jpg"

export default function Home() {

  return (
    <>
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-8 h-[15vh]">
        <Link href="/" className="font-bold text-3xl">Logo</Link>
        <div className="space-x-8 text-xl">
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </div>
      </nav>

      <Hero
        imgData={homeImg}
        imgAlt="Teacher organizing their notes in a planner board"
        title="Improve you class management using our wonderfull App"
      />
    </>
  )

}