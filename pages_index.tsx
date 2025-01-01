import React, { useState } from 'react';

const App: React.FC = () => {
  const [moment, setMoment] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Title Animation */}
      {!submitted ? (
        <h1 className="text-6xl md:text-8xl font-bold text-center mb-8 animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
          Happy New Year 2025
        </h1>
      ) : null}

      {/* Interactive Segment */}
      {!submitted ? (
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Share Your Happy Moments from 2024
          </h2>
          <textarea
            value={moment}
            onChange={(e) => setMoment(e.target.value)}
            className="w-full p-4 rounded-lg shadow-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Type your favorite moment here..."
            rows={4}
          />
          <button
            type="submit"
            className="w-full mt-4 py-3 px-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-lg shadow-lg hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300"
          >
            Submit
          </button>
        </form>
      ) : (
        /* Submission Animation */
        <div className="text-center">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 animate-fly-in-colors relative">
            Thank you for submitting! May all your wishes be blessed in 2025!
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              {Array.from({ length: 50 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full animate-falling-color"
                  style={{
                    top: `${Math.random() * -100}%`,
                    left: `${Math.random() * 100}%`,
                    backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>
          </h2>
          
        </div>
      )}

      {/* Sparkle Effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-sparkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Tailwind CSS Animations */}
      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 5s ease infinite;
          }
          @keyframes firework {
            0% { transform: scale(0); opacity: 1; }
            100% { transform: scale(1); opacity: 0; }
          }
          .animate-firework {
            animation: firework 1s ease-out forwards;
          }
          @keyframes sparkle {
            0% { opacity: 0; transform: scale(0); }
            50% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(0); }
          }
          .animate-sparkle {
            animation: sparkle 1.5s ease-in-out infinite;
          }
          @keyframes flyInColors {
            0% { transform: translateY(50px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          .animate-fly-in-colors {
            animation: flyInColors 1s ease-out forwards;
          }
          @keyframes fallingColor {
            0% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
          }
          .animate-falling-color {
            animation: fallingColor 2s linear forwards;
          }
        `}
      </style>
    </div>
  );
};

export default App;
