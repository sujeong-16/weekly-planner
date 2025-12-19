function DayColumn({ date, weekday }) {
  const isToday = isDateToday(date);
  const dayNumber = date.getDate();

  return (
    <div className={`
      border rounded-lg min-h-[200px] 
      ${isToday ? 'bg-blue-50 border-blue-500' : 'bg-white border-gray-200'}
    `}>
      {/* 날짜 헤더 */}
      <div className="">
        <span className="text-sm text-gray-600 mr-2">{weekday}</span>
        <span className={`
          text-lg font-bold
          ${isToday ? 'text-blue-600' : 'text-gray-800'}
        `}>
          {dayNumber}
        </span>
      </div>

      {/* 일정 영역 (나중에 추가) */}
      <div className="space-y-1">
        {/* 여기에 일정 항목들이 들어갈 예정 */}
      </div>
    </div>
  );
}

// 오늘 날짜인지 확인
function isDateToday(date) {
  const today = new Date();
  return date.toDateString() === today.toDateString();
}

export default DayColumn;