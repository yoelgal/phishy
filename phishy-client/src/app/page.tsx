// pages/index.tsx
import React from 'react';

const HomePage: React.FC = () => {
  return (
      <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col">
        <header className="bg-gray-800 p-6">
          <h1 className="text-3xl font-semibold">Phishy: Cyber Vigilance Training</h1>
        </header>

        <main className="flex-grow p-6 flex items-center justify-center">
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-xl w-full">
            <h2 className="text-2xl font-bold text-red-500 mb-4">Oops! You clicked on a phishing link.</h2>
            <p className="mb-6">
              Phishing is a type of cyber attack where attackers try to trick you into giving them your personal information by pretending to be someone you trust.
            </p>
            <h3 className="text-xl font-semibold mb-4">How to Recognize Phishing:</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Check the email address of the sender.</li>
              <li>Look for spelling and grammar mistakes.</li>
              <li>Be wary of unsolicited attachments.</li>
              <li>Check the URL before clicking on it.</li>
            </ul>
            <div className="mt-4">
              <a href="#" className="text-blue-400 hover:underline hover:text-blue-500">Learn more about phishing</a>
            </div>
          </div>
        </main>

        <footer className="bg-gray-800 text-gray-400 p-4 mt-6">
          <p>&copy; 2023 Phishy. All rights reserved.</p>
        </footer>
      </div>
  );
}

export default HomePage;
