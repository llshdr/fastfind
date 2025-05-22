const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-8">Sidan kunde inte hittas.</p>
      <a href="/" className="text-blue-400 hover:underline">Gå tillbaka till startsidan</a>
    </div>
  );
};

export default NotFound; 