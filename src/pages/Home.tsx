import React from 'react';

function HomePage() {
  const examDate = new Date('2025-08-15');
  const now = new Date();
  const timeLeft = examDate.getTime() - now.getTime();
  const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

  const tasks = [
    { id: 1, title: 'Complete History Module', status: 'pending', time: '10:00 AM' },
    { id: 2, title: 'Practice Math Questions', status: 'in_progress', time: '2:00 PM' },
    { id: 3, title: 'Review Geography Notes', status: 'completed', time: '4:00 PM' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>

      {/* Countdown Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-3">Exam Countdown</h2>
        <div className="text-3xl font-bold text-blue-600">{daysLeft} Days Left</div>
        <p className="text-sm text-gray-600 mt-2">Until August 15, 2025</p>
        <p className="text-sm text-gray-700 mt-2">
          "Stay focused and consistent in your preparation!"
        </p>
      </div>

      {/* Progress Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-3">Syllabus Progress</h2>
        <div className="relative pt-1">
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
            <div
              style={{ width: '50%' }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
            ></div>
          </div>
          <div className="text-right">
            <span className="text-sm font-semibold inline-block text-blue-600">
              50% Complete
            </span>
          </div>
        </div>
      </div>

      {/* Today's Tasks */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-3">Today's Tasks</h2>
        <div className="space-y-4">
          {tasks.map(task => (
            <div
              key={task.id}
              className="flex items-center justify-between border-b pb-2 last:border-0"
            >
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={task.status === 'completed'}
                  className="h-4 w-4 text-blue-600"
                  onChange={() => {}}
                />
                <span
                  className={`${
                    task.status === 'completed' ? 'line-through text-gray-400' : ''
                  }`}
                >
                  {task.title}
                </span>
              </div>
              <span className="text-sm text-gray-500">{task.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;