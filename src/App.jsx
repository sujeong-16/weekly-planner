import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Calendar from './components/Calendar/Calendar';
import Memo from './components/Memo/Memo';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 주간 달력 (왼쪽, 넓게) */}
          <div className="lg:col-span-2">
            <Calendar />
          </div>
          
          {/* 메모 영역 (오른쪽) */}
          <div className="lg:col-span-1">
            <Memo />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;