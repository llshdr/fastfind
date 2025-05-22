'use client';

import { useState } from 'react';

const Upload = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (file) {
      // Här kan du lägga till logik för att skicka filen till en server eller API
      alert('Bild uppladdad!');
    } else {
      alert('Välj en bild först.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-4">Ladda upp din orienteringskarta</h1>
      <p className="text-xl mb-8">Välj en bild för att få AI-hjälp.</p>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mb-4"
        />
        <button type="submit" className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 shadow-md">
          Ladda upp
        </button>
      </form>
    </div>
  );
};

export default Upload; 