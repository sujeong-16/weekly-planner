import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Calendar from './components/Calendar/Calendar';
import Memo from './components/Memo/Memo';

function App() {
  return (
    <div className="min-h-screen w-[900px] flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-6 flex-1">
        <div className="gap-6">
          {/* 주간 달력 (왼쪽, 넓게) */}
          <div className="">
            <Calendar />
            <Memo />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;