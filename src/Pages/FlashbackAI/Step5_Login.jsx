import React, { useState } from "react";
import { Button } from "./Button";
import AnnouncementBar from "../../Shared/AnnouncementBar";
import { useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

export const Step5_Login = ({ onNext }) => {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  // Signup form state
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirm, setSignupConfirm] = useState("");
  const [signupError, setSignupError] = useState("");
  // Login form state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    setSignupError("");
    if (!signupEmail || !signupPassword || !signupConfirm) {
      setSignupError("Please fill all fields.");
      return;
    }
    if (signupPassword !== signupConfirm) {
      setSignupError("Passwords do not match.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Simulate account creation, then go to pricing page
      navigate("/pricing");
    }, 1200);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError("");
    if (!loginEmail || !loginPassword) {
      setLoginError("Please enter both email and password.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Simulate login, then go to dashboard
      navigate("/dashboard");
    }, 1200);
  };

  return (
    <div className="w-full mx-auto text-center animate-in fade-in zoom-in-95 duration-500">
      <AnnouncementBar />
      <header className="px-6 md:px-12 py-6 flex items-center justify-center mb-10 border-b border-gray-100 bg-white/70 backdrop-blur-md sticky top-0 z-50">
        <div className="text-2xl font-serif tracking-tight text-[#7c602e] font-bold">
          PureMotion
        </div>
      </header>
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4 leading-tight font-medium mx-auto">
        {showLogin ? (
          "Login to your account"
        ) : (
          <>
            Enter your email to start creating
            <br />
            and viewing your memories.
          </>
        )}
      </h1>

      {/* Subheading */}
      <p className="text-gray-400 text-sm mb-10 font-medium tracking-tight">
        {showLogin ? (
          "Enter your email and password to access your memories."
        ) : (
          <>
            <FaCheck className="inline mr-1 text-green-500" /> make sure its
            correct , so your moment reach safely!
          </>
        )}
      </p>

      {/* Auth Form */}
      <div className="max-w-sm mx-auto space-y-4">
        {showLogin ? (
          <form onSubmit={handleLogin} className="space-y-4">
            {loginError && (
              <div className="text-red-500 text-sm font-medium mb-2">
                {loginError}
              </div>
            )}
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#7c602e]/20 outline-none transition-all placeholder:text-gray-300"
                autoComplete="email"
                required
              />
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#7c602e]/20 outline-none transition-all placeholder:text-gray-300"
                autoComplete="current-password"
                required
              />
            </div>
            <Button
              className="w-full py-3.5 rounded-xl text-white font-semibold text-base shadow-sm"
              type="submit"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
            <div>
              Don't have an account?{" "}
              <span
                onClick={() => setShowLogin(false)}
                className="text-[#7c602e] font-semibold cursor-pointer"
              >
                Create Account
              </span>
            </div>
          </form>
        ) : (
          <form onSubmit={handleSignup} className="space-y-4">
            {signupError && (
              <div className="text-red-500 text-sm font-medium mb-2">
                {signupError}
              </div>
            )}
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#7c602e]/20 outline-none transition-all placeholder:text-gray-300"
                autoComplete="email"
                required
              />
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#7c602e]/20 outline-none transition-all placeholder:text-gray-300"
                autoComplete="new-password"
                required
              />
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder="Confirm Password"
                value={signupConfirm}
                onChange={(e) => setSignupConfirm(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#7c602e]/20 outline-none transition-all placeholder:text-gray-300"
                autoComplete="new-password"
                required
              />
            </div>
            <Button
              className="w-full py-3.5 rounded-xl text-white font-semibold text-base shadow-sm"
              type="submit"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Continue"}
            </Button>
            <div>
              Do you have an account?{" "}
              <span
                onClick={() => setShowLogin(true)}
                className="text-[#7c602e] font-semibold cursor-pointer"
              >
                Login
              </span>
            </div>
          </form>
        )}
      </div>
      <p className="text-[14px] text-gray-400 leading-relaxed font-medium mt-6">
        We respect your privacy. We will never sell, rent or share your email
        address. That's more than a{" "}
        <a href="" className="text-blue-600 underline">
          policy
        </a>
        , it's our personal guarantee.
      </p>
    </div>
  );
};
