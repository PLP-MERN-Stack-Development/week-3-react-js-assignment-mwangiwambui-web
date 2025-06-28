import { useState } from 'react';
import './App.css';

import Button from './components/Button';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TaskManager from './components/TaskManager';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
          <div className="flex flex-col items-center justify-center">
            {/* Counter section */}
            <div className="flex items-center gap-4 my-4">
              <Button variant="danger" onClick={() => setCount((count) => count - 1)}>-</Button>
              <span className="text-xl font-bold">{count}</span>
              <Button variant="primary" onClick={() => setCount((count) => count + 1)}>+</Button>
            </div>

            {/* Task Manager section */}
            <TaskManager />
          </div>
        </div>

        {/* API Data Section */}
        <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">API Data</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Fetch and display data from an API here
          </p>
        </div>
      </main>
    <div className="bg-blue-600 text-white text-center p-4">
  Tailwind is finally working 🎉
</div>

      {/* Footer */}
      <Footer />
    </div>

  );
}


export default App;
