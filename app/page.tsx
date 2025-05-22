'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Home = () => {
  const [code, setCode] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code === '1234') {
      window.location.href = '/upload';
    } else {
      alert('Fel kod! Försök igen.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-4">Välkommen till FastFind</h1>
      <p className="text-xl mb-8">Ange din kod för att komma till AI-sidan.</p>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Ange kod"
          className="border p-3 mb-3 rounded-lg shadow-md bg-gray-800 text-white"
        />
        <button type="submit" className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 shadow-md">
          Skicka
        </button>
      </form>
    </div>
  );
};

export default Home;
