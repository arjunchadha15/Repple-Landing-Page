'use client';

interface SuccessModalProps {
  message: string;
  isPurdueUser: boolean;
  onClose: () => void;
}

export default function SuccessModal({
  message,
  isPurdueUser,
  onClose,
}: SuccessModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in p-4">
      <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 max-w-md w-full shadow-2xl animate-slide-up">
        <div className="text-center">
          <div className="w-16 h-16 watery-gradient-button rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          
          <h3 className="text-2xl font-bold mb-3 watery-gradient-text">
            {isPurdueUser ? 'Welcome, Boilermaker!' : 'You\'re In!'}
          </h3>
          
          <p className="text-gray-900 mb-6">{message}</p>
          
          <button
            onClick={onClose}
            className="w-full watery-gradient-button text-white font-semibold py-3 px-6 rounded-2xl hover:shadow-purple-glow transition-all duration-300 hover:scale-105"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
}
