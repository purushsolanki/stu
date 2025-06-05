import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, FileQuestion, User } from 'lucide-react';

// Components
import HomePage from './pages/Home';
import SyllabusPage from './pages/Syllabus';
import MockPage from './pages/Mock';
import AccountPage from './pages/Account';

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-100 pb-16">
      <main className="max-w-7xl mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/syllabus" element={<SyllabusPage />} />
          <Route path="/mock" element={<MockPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-around py-3">
            <Link
              to="/"
              className={`flex flex-col items-center ${
                location.pathname === '/' ? 'text-blue-600' : 'text-gray-600'
              }`}
            >
              <Home className="w-6 h-6" />
              <span className="text-xs mt-1">Home</span>
            </Link>
            <Link
              to="/syllabus"
              className={`flex flex-col items-center ${
                location.pathname === '/syllabus' ? 'text-blue-600' : 'text-gray-600'
              }`}
            >
              <BookOpen className="w-6 h-6" />
              <span className="text-xs mt-1">Syllabus</span>
            </Link>
            <Link
              to="/mock"
              className={`flex flex-col items-center ${
                location.pathname === '/mock' ? 'text-blue-600' : 'text-gray-600'
              }`}
            >
              <FileQuestion className="w-6 h-6" />
              <span className="text-xs mt-1">Mock</span>
            </Link>
            <Link
              to="/account"
              className={`flex flex-col items-center ${
                location.pathname === '/account' ? 'text-blue-600' : 'text-gray-600'
              }`}
            >
              <User className="w-6 h-6" />
              <span className="text-xs mt-1">Account</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;