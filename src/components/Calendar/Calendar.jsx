import { useState } from 'react';
import WeekView from './WeekView';

function Calendar() {
  // 현재 주의 날짜들을 상태로 관리
  const [currentWeek, setCurrentWeek] = useState(getWeekDates(new Date()));

  // 이전 주로 이동
  const goToPreviousWeek = () => {
    const firstDay = currentWeek[0];
    const previousWeek = new Date(firstDay);
    previousWeek.setDate(previousWeek.getDate() - 7);
    setCurrentWeek(getWeekDates(previousWeek));
  };

  // 다음 주로 이동
  const goToNextWeek = () => {
    const firstDay = currentWeek[0];
    const nextWeek = new Date(firstDay);
    nextWeek.setDate(nextWeek.getDate() + 7);
    setCurrentWeek(getWeekDates(nextWeek));
  };

  // 오늘로 돌아가기
  const goToToday = () => {
    setCurrentWeek(getWeekDates(new Date()));
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      {/* 주간 네비게이션 */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={goToPreviousWeek}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
        >
          ← 이전 주
        </button>
        
        <button
          onClick={goToToday}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
        >
          오늘
        </button>
        
        <button
          onClick={goToNextWeek}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
        >
          다음 주 →
        </button>
      </div>

      {/* 주간 달력 뷰 */}
      <WeekView weekDates={currentWeek} />
    </div>
  );
}

// 주어진 날짜가 속한 주의 모든 날짜를 반환 (월요일 시작)
function getWeekDates(date) {
  const current = new Date(date);
  const day = current.getDay(); // 0(일) ~ 6(토)
  const diff = current.getDate() - day + (day === 0 ? -6 : 1); // 월요일로 조정
  
  const monday = new Date(current.setDate(diff));
  const week = [];
  
  for (let i = 0; i < 7; i++) {
    const date = new Date(monday);
    date.setDate(monday.getDate() + i);
    week.push(date);
  }
  
  return week;
}

export default Calendar;