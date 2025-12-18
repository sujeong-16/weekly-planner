import { useEffect } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

function App() {
  useEffect(() => {
    // Firebase 연결 테스트
    const testFirebase = async () => {
      try {
        const testCollection = collection(db, 'test');
        const snapshot = await getDocs(testCollection);
        console.log('✅ Firebase 연결 성공!');
        console.log('문서 개수:', snapshot.size);
      } catch (error) {
        console.error('❌ Firebase 연결 실패:', error);
      }
    };
    
    testFirebase();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-blue-600">
        Weekly Planner
      </h1>
      <p className="text-center mt-4 text-gray-600">
        Firebase 연결 테스트 중... 콘솔을 확인하세요!
      </p>
    </div>
  );
}

export default App;