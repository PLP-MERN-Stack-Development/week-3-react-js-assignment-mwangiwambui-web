import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckSquare, Sun, Moon, Database } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Button from './Button';

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path || (path === '/tasks' && location.pathname === '/');
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <div className="flex items-center space-x-2 text-xl font-bold text-gray-900 dark:text-white">
            <CheckSquare className="h-8 w-8 text-blue-600" />
            <span>TaskManager</span>
          </div>
          {/* Center: Nav Links */}
          <div className="flex space-x-6">
            <Link
              to="/tasks"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/tasks')
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
                  : 'text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200'
              }`}
            >
              Tasks
            </Link>
            <Link
              to="/api-data"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-1 ${
                isActive('/api-data')
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
                  : 'text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200'
              }`}
            >
              <Database className="h-4 w-4" />
              <span>API Data</span>
            </Link>
          </div>
          {/* Right: Theme Switch */}
          <div className="flex items-center space-x-4">
            <Button
              variant="secondary"
              size="sm"
              onClick={toggleTheme}
              className="p-2"
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;