import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Home, BookOpen, FileQuestion } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Rajasthan Patwari Exam Preparation
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            to="/study-material"
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center space-x-4">
              <BookOpen className="w-8 h-8 text-blue-600" />
              <h2 className="text-xl font-semibold">Study Material</h2>
            </div>
          </Link>

          <Link
            to="/practice-tests"
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center space-x-4">
              <FileQuestion className="w-8 h-8 text-green-600" />
              <h2 className="text-xl font-semibold">Practice Tests</h2>
            </div>
          </Link>

          <Link
            to="/previous-papers"
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center space-x-4">
              <Home className="w-8 h-8 text-purple-600" />
              <h2 className="text-xl font-semibold">Previous Papers</h2>
            </div>
          </Link>
        </div>

        <Routes>
          <Route path="/study-material" element={<div>Study Material Content</div>} />
          <Route path="/practice-tests" element={<div>Practice Tests Content</div>} />
          <Route path="/previous-papers" element={<div>Previous Papers Content</div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;