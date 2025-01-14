import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-24 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Links to example scenarios</h1>
        <ol className="list-inside list-decimal text-lg text-center sm:text-left font-[family-name:var(--font-geist-mono)] hover:li:cursor-pointer">
          <li>
            <Link href="/simple-suspense">Simple Suspense</Link>
          </li>
          <li>
            <Link href="/multiple-suspense">Multiple Suspense</Link>
          </li>
          <li>
            <Link href="/newsfeed">Newsfeed</Link>
          </li>
        </ol>
      </main>
    </div>
  );
}
