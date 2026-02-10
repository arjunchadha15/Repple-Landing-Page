'use client';

import { useState } from 'react';
import SuccessModal from './SuccessModal';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [showNameFields, setShowNameFields] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [isPurdueUser, setIsPurdueUser] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    // Show name fields when user starts typing
    if (value.length > 0 && !showNameFields) {
      setShowNameFields(true);
    }
  };

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
        body: JSON.stringify({ 
          email,
          firstName,
          lastName 
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccessMessage(data.message || 'Successfully joined the waitlist!');
        setIsPurdueUser(data.isPurdueUser || false);
        setShowSuccess(true);
        setEmail('');
        setFirstName('');
        setLastName('');
        setShowNameFields(false);
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
        <div className="bg-gray-50 border-2 border-gray-200 rounded-3xl p-2 shadow-lg">
          <div className="flex flex-col gap-2">
            {/* Name fields - shown when user starts typing email */}
            {showNameFields && (
              <div className="flex flex-col sm:flex-row gap-2 animate-slide-up">
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name"
                  className="flex-1 px-6 py-4 bg-white border border-gray-300 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-repple-purple focus:ring-2 focus:ring-repple-purple/50 transition-all"
                  required
                  disabled={isLoading}
                />
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last name"
                  className="flex-1 px-6 py-4 bg-white border border-gray-300 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-repple-purple focus:ring-2 focus:ring-repple-purple/50 transition-all"
                  required
                  disabled={isLoading}
                />
              </div>
            )}
            
            {/* Email and submit button */}
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white border border-gray-300 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-repple-purple focus:ring-2 focus:ring-repple-purple/50 transition-all"
                required
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-4 watery-gradient-button text-white font-semibold rounded-2xl hover:shadow-purple-glow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 whitespace-nowrap"
              >
                {isLoading ? 'Joining...' : 'Join Waitlist'}
              </button>
            </div>
          </div>
        </div>
        
        {error && (
          <div className="mt-4 text-red-600 text-sm text-center animate-slide-up">
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
