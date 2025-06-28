import React, { useState, useEffect } from 'react';

function ApiData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  // Fetch data with pagination
  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [page]);

  const filtered = data.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        className="border p-2 mb-4 w-full rounded"
        placeholder="Search posts..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">Error loading data.</p>}
      <ul className="grid gap-2">
        {filtered.map(item => (
          <li key={item.id} className="p-3 bg-gray-100 dark:bg-gray-700 rounded shadow">
            <span className="font-bold">{item.id}. </span>
            {item.title}
          </li>
        ))}
      </ul>
      <div className="flex justify-between mt-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
          onClick={() => setPage(p => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <span className="px-4 py-2">Page {page}</span>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => setPage(p => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ApiData;