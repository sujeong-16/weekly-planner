import DayColumn from './DayColumn';

function WeekView({ weekDates }) {
  const weekdays = ['월', '화', '수', '목', '금', '토', '일'];

  return (
    <div className="grid grid-cols-7 gap-2">
      {weekDates.map((date, index) => (
        <DayColumn
          key={date.toISOString()}
          date={date}
          weekday={weekdays[index]}
        />
      ))}
    </div>
  );
}

export default WeekView;