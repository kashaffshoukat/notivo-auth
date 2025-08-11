import React from "react";
import { Link } from "react-router-dom";
import InputWithIcon from "./ui/InputWithIcon";

/* ---- Inline icon components ---- */
function GoogleIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#EA4335" d="M12 10.2v3.9h5.4c-.2 1.2-1.6 3.6-5.4 3.6-3.3 0-6-2.7-6-6s2.7-6 6-6c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.8 3.1 14.6 2 12 2 6.5 2 2 6.5 2 12s4.5 10 10 10c5.8 0 9.6-4.1 9.6-9.9 0-.7-.1-1.2-.2-1.7H12z" />
      <path fill="#FBBC05" d="M12 22c2.6 0 4.8-.9 6.4-2.4l-3-2.5c-.8.5-1.9.9-3.4.9-2.7 0-5-1.8-5.8-4.3l-3.3 2.5C4.6 19.7 8 22 12 22z" />
      <path fill="#4285F4" d="M21.6 12.1c0-.7-.1-1.2-.2-1.7H12v3.9h5.4c-.2 1.2-1.6 3.6-5.4 3.6-2.7 0-5-1.8-5.8-4.3l-3.3 2.5C4.6 19.7 8 22 12 22c5.8 0 9.6-4.1 9.6-9.9z" />
    </svg>
  );
}
function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#1877F2" d="M24 12a12 12 0 10-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.6-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 1-2 2V12h3.4l-.5 3.5H14v8.4C19.6 23.1 24 18.1 24 12z" />
    </svg>
  );
}
function MailIcon({ className = "" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2zm0 0l8 5 8-5" />
    </svg>
  );
}
function LockIcon({ className = "" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c-1.105 0-2 .895-2 2v4a2 2 0 002 2h0a2 2 0 002-2v-4c0-1.105-.895-2-2-2zM6 11V9a6 6 0 1112 0v2" />
    </svg>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col lg:grid lg:grid-cols-2">
      {/* LEFT (form) */}
      <section className="bg-white px-4 sm:px-6 md:px-8 pb-10 flex flex-col order-1 lg:order-none">
        {/* Logo */}
        <div className="pt-4">
          <img
            src="/logo.avif"
            alt="notivo"
            className="block h-6 w-auto max-w-full select-none filter contrast-125 brightness-95"
            draggable={false}
          />
        </div>

        {/* Content centered; slightly raised */}
        <div className="flex-1 grid place-items-center mt-6 lg:mt-0">
          <div className="w-full max-w-[380px] -translate-y-4 md:-translate-y-8 lg:-translate-y-10">
            <h1 className="text-xl sm:text-2xl md:text-[26px] font-semibold text-gray-900">
              Sign in
            </h1>
            <p className="mt-1 text-sm sm:text-[13px] text-gray-500">
              Welcome back! Please log in.
            </p>

            {/* Social buttons */}
            <div className="mt-4 space-y-2">
              <button className="w-full h-10 inline-flex items-center justify-center gap-2 rounded-md ring-1 ring-gray-200 px-3 text-sm font-medium hover:ring-gray-300">
                <GoogleIcon className="w-[18px] h-[18px]" />
                <span>Sign in with Google</span>
              </button>
              <button className="w-full h-10 inline-flex items-center justify-center gap-2 rounded-md ring-1 ring-gray-200 px-3 text-sm font-medium hover:ring-gray-300">
                <FacebookIcon className="w-[18px] h-[18px]" />
                <span>Sign in with Facebook</span>
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 my-4">
              <div className="h-px bg-gray-200 flex-1" />
              <span className="text-xs tracking-wide text-gray-400">or</span>
              <div className="h-px bg-gray-200 flex-1" />
            </div>

            {/* Form */}
            <form className="space-y-3">
              <InputWithIcon
                id="loginEmail"
                label="Email"
                placeholder="you@example.com"
                Icon={MailIcon}
                type="email"
                name="email"
                autoComplete="email"
              />
              <InputWithIcon
                id="loginPassword"
                label="Password"
                placeholder="•••••••••"
                Icon={LockIcon}
                type="password"
                name="password"
                autoComplete="current-password"
              />

              {/* Keep me logged in + forgot password */}
              <div className="flex items-center justify-between pt-1">
                <label className="inline-flex items-center gap-2 text-xs sm:text-[12px] text-gray-600 select-none">
                  <input
                    type="checkbox"
                    className="h-3.5 w-3.5 rounded border-gray-300 text-gray-900 focus:ring-gray-800"
                    aria-label="Keep me logged in"
                  />
                  Keep me logged in
                </label>
                <a href="#" className="text-xs sm:text-[12px] text-gray-600 hover:underline">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full h-10 inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-4 text-sm font-semibold hover:bg-gray-800"
              >
                Login
              </button>
            </form>

            {/* Link to signup */}
            <p className="text-sm text-gray-500 mt-4">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-gray-900 font-medium hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* RIGHT (image) */}
      <aside className="w-full h-60 sm:h-80 lg:h-full order-0 lg:order-none">
        <img
          src="/right-panel.png"
          alt=""
          loading="lazy"
          className="w-full h-full object-cover"
          draggable={false}
        />
      </aside>
    </div>
  );
}
