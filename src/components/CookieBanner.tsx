import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    if (!hasAcceptedCookies) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-darker-gray border-t border-gray-700 p-5 shadow-2xl z-50">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4">
        <p className="text-gray-200 text-sm text-center sm:text-left">
          We use cookies to enhance your experience and analyze our website traffic. By continuing to use our site, you consent to our use of cookies.
        </p>
        <div className="flex gap-3">
          <button 
            onClick={handleAccept}
            className="bg-gold text-black px-4 py-2 rounded text-sm font-medium hover:bg-yellow-400 transition-colors"
          >
            Accept All
          </button>
          <button 
            onClick={handleDecline}
            className="border border-gray-600 text-gray-200 px-4 py-2 rounded text-sm hover:bg-gray-700 transition-colors"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
