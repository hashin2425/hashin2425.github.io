export default function Footer() {
  const now = new Date();
  const dateStr = `${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日`;
  return (
    <footer className="p-4 bg-gray-700 text-white">
      <p className="py-2 text-center">更新日時： {dateStr}</p>
    </footer>
  );
}
