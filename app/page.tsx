import React, { useState } from 'react';
import Image from "next/image";

const Home = () => {
  const [code, setCode] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code === '1234') {
      setIsValid(true);
    } else {
      alert('Fel kod! Försök igen.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Välkommen till FastFind</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Ange kod"
          className="border p-2 mb-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Skicka
        </button>
      </form>
      {isValid && <p className="mt-4">Koden är korrekt! Du kommer nu till AI-sidan.</p>}
    </div>
  );
};

export default Home;
