import React, { useState, useEffect } from 'react';

function APIDataPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  const filtered = data.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p className="text-center text-lg py-8 animate-pulse">Loading...</p>;
  if (error) return <p className="text-center text-red-500 py-8">Error loading data.</p>;

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white dark:bg-gray-800 rounded shadow mt-8">
      <input
        className="border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded px-3 py-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        placeholder="Search..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <ul className="space-y-2">
        {filtered.map(item => (
          <li
            key={item.id}
            className="p-3 bg-gray-100 dark:bg-gray-700 rounded shadow hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200"
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default APIDataPage;