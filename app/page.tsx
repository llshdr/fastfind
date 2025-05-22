'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Home = () => {
  const [code, setCode] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code === '1234') {
      router.push('/upload');
    } else {
      alert('Fel kod! Försök igen.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200">
      <Image src="/logo.png" alt="FastFind Logo" width={150} height={150} className="mb-6" />
      <h1 className="text-5xl font-bold mb-4 text-blue-900">Välkommen till FastFind</h1>
      <p className="text-xl mb-8 text-gray-800">Ange din kod för att komma till AI-sidan.</p>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Ange kod"
          className="border p-3 mb-3 rounded-lg shadow-md"
        />
        <button type="submit" className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 shadow-md">
          Skicka
        </button>
      </form>
    </div>
  );
};

export default Home;
