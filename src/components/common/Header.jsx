function Header() {
  // 현재 날짜 표시
  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  });

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            📅 Weekly Planner
          </h1>
          <p className="text-gray-600">{dateString}</p>
        </div>
      </div>
    </header>
  );
}

export default Header;