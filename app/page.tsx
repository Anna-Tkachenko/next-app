import Image from 'next/image'
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello from the main page

      <p>
        <Link href='/hello'>Go to the hello page</Link>
      </p>
    </main>
  )
}
