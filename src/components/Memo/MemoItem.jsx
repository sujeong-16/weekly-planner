function MemoItem({ memo, onDelete }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 hover:shadow-md transition">
      <div className="flex justify-between items-start">
        <p className="text-gray-800 flex-1">{memo.text}</p>
        <button
          onClick={() => onDelete(memo.id)}
          className="text-red-500 hover:text-red-700 ml-2 flex-shrink-0"
          aria-label="메모 삭제"
        >
          ✕
        </button>
      </div>
      <p className="text-xs text-gray-400 mt-2">
        {memo.createdAt.toLocaleString('ko-KR')}
      </p>
    </div>
  );
}

export default MemoItem;