import DayColumn from './DayColumn';

function WeekView({ weekDates }) {
  const mondayStartWeek = ['월', '화', '수', '목', '금', '토', '일'];
  const sundayStartWeek = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <div className="grid grid-cols-7 p-4">
      {weekDates.map((date, index) => (
        <DayColumn
          key={date.toISOString()}
          date={date}
          weekday={mondayStartWeek[index]}
        />
      ))}
    </div>
  );
}

export default WeekView;