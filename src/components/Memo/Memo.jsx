import { useState } from 'react';
import MemoItem from './MemoItem';

function Memo() {
  const [memos, setMemos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // 메모 추가
  const handleAddMemo = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    const newMemo = {
      id: Date.now(),
      text: inputValue,
      createdAt: new Date()
    };

    setMemos([newMemo, ...memos]);
    setInputValue('');
  };

  // 메모 삭제
  const handleDeleteMemo = (id) => {
    setMemos(memos.filter(memo => memo.id !== id));
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-xl font-bold mb-4 text-gray-800">📝 메모</h2>

      {/* 메모 입력 폼 */}
      <form onSubmit={handleAddMemo} className="mb-4">
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="메모를 입력하세요..."
          className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="3"
        />
        <button
          type="submit"
          className="w-full mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
        >
          메모 추가
        </button>
      </form>

      {/* 메모 목록 */}
      <div className="space-y-2 max-h-[500px] overflow-y-auto">
        {memos.length === 0 ? (
          <p className="text-center text-gray-400 py-8">
            메모가 없습니다
          </p>
        ) : (
          memos.map(memo => (
            <MemoItem
              key={memo.id}
              memo={memo}
              onDelete={handleDeleteMemo}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Memo;