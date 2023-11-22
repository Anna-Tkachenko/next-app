import Link from "next/link";

export default function Hello() {
  return (
    <>
      <h1>
        Content from Hello page
      </h1>

      <p>
        <Link href='/'>Go to the home page</Link>
      </p>
    </>
  )
}