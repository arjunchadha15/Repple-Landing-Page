'use client';

import { useState } from 'react';
import SuccessModal from './SuccessModal';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [isPurdueUser, setIsPurdueUser] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccessMessage(data.message || 'Successfully joined the waitlist!');
        setIsPurdueUser(data.isPurdueUser || false);
        setShowSuccess(true);
        setEmail('');
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Failed to connect. Please check your internet and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
        <div className="bg-repple-card-bg/50 backdrop-blur-sm border border-repple-purple/20 rounded-3xl p-2 shadow-purple-glow">
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-repple-purple focus:ring-2 focus:ring-repple-purple/50 transition-all"
              required
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-4 bg-gradient-to-r from-repple-purple to-repple-violet text-white font-semibold rounded-2xl hover:shadow-purple-glow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 whitespace-nowrap"
            >
              {isLoading ? 'Joining...' : 'Join Waitlist'}
            </button>
          </div>
        </div>
        
        {error && (
          <div className="mt-4 text-red-400 text-sm text-center animate-slide-up">
            {error}
          </div>
        )}
      </form>

      {showSuccess && (
        <SuccessModal
          message={successMessage}
          isPurdueUser={isPurdueUser}
          onClose={() => setShowSuccess(false)}
        />
      )}
    </>
  );
}
