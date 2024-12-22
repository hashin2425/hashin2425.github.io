import Link from "next/link";

function LiLink({ href, text }: { href: string; text: string }) {
  return (
    <li>
      <Link href={href} className={"hover:text-gray-300 transition duration-300"}>
        {text}
      </Link>
    </li>
  );
}

export default function Header() {
  return (
    <header className="relative h-8 w-full">
      <nav className="w-full bg-gray-700 text-white py-2 px-4 fixed top-0 shadow-xl z-[999]">
        <ul className="flex justify-between items-center">
          <LiLink href="/" text="hashin.net" />
          <div className="flex space-x-6">
            <LiLink href="/works" text="Works" />
            <LiLink href="/history" text="History" />
            <LiLink href="/for-me" text="Others" />
          </div>
        </ul>
      </nav>
    </header>
  );
}
