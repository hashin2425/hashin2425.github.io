const linkClasses = "hover:text-gray-300 transition duration-300"; // 現状より複雑になりそうなら、CSSファイルを書く

export default function Header() {
  return (
    <header className="bg-gray-700 text-white py-1">
      <nav className="container mx-auto px-4">
        <ul className="flex justify-between items-center">
          <li>
            <a href="/" className={linkClasses}>
              hashin.net
            </a>
          </li>
          <div className="flex space-x-6">
            <li>
              <a href="/works" className={linkClasses}>
                My Works
              </a>
            </li>
            <li>
              <a href="/for-me" className={linkClasses}>
                For Me
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
