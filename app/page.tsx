import { useState } from 'react';
// import Image from "next/image";

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <h1 className="text-4xl font-bold mb-4 text-blue-800">Välkommen till FastFind</h1>
      <p className="text-lg mb-6 text-gray-700">Ange din kod för att komma till AI-sidan.</p>
    </div>
  );
};

export default Home;
