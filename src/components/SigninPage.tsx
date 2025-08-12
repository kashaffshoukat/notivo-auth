import React, { useId, useState } from "react";
import { Link } from "react-router-dom";

function RightPromo() {
  return (
    <aside className="hidden md:block relative h-full w-full">
      <div className="relative h-full w-full bg-[#8DE87F] rounded-[24px] overflow-hidden">
        {/* Ellipse Background - positioned at bottom left */}
        <div className="absolute bottom-[4%] left-0 
                        w-[150px] h-[150px] 
                        md:w-[170px] md:h-[170px] 
                        lg:w-[193px] lg:h-[193px] 
                        xl:w-[210px] xl:h-[210px]">
          <img
            src="/Ellipse-404.png"
            alt=""
            className="w-full h-full object-contain opacity-40"
            draggable={false}
          />
        </div>

        {/* Content - positioned at top left */}
        <div className="absolute top-8 left-8 lg:top-12 lg:left-12 max-w-[85%] z-10">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Lead Smarter with Better Team Insights
          </h2>
          <p className="text-sm lg:text-base text-gray-700 leading-relaxed max-w-[400px]">
            Capture feedback, track growth, and simplify performance conversations — 
            all in one private, intuitive workspace.
          </p>
        </div>

                {/* Product Preview Image - positioned at bottom right */}
        <div className="absolute top-[50%] right-[-8%] -translate-y-1/2 
                        h-[400px] w-full
                        md:h-[450px] md:right-[-10%] md:top-[52%]
                        lg:h-[525px] lg:right-[-9%] lg:top-[55%]
                        xl:h-[580px] xl:right-[-8%] xl:top-[55%]">
          <img
            src="/right-pannel.avif"
            alt="Product preview"
            loading="lazy"
            draggable={false}
            className="h-full max-w-none rounded-xl shadow-2xl select-none transform origin-center rotate-[-8deg]"
          />
        </div>
      </div>
    </aside>
  );
}

function GoogleIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#EA4335" d="M12 10.2v3.9h5.4c-.2 1.2-1.6 3.6-5.4 3.6-3.3 0-6-2.7-6-6s2.7-6 6-6c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.8 3.1 14.6 2 12 2 6.5 2 2 6.5 2 12s4.5 10 10 10c5.8 0 9.6-4.1 9.6-9.9 0-.7-.1-1.2-.2-1.7H12z"/>
      <path fill="#FBBC05" d="M12 22c2.6 0 4.8-.9 6.4-2.4l-3-2.5c-.8.5-1.9.9-3.4.9-2.7 0-5-1.8-5.8-4.3l-3.3 2.5C4.6 19.7 8 22 12 22z"/>
      <path fill="#4285F4" d="M21.6 12.1c0-.7-.1-1.2-.2-1.7H12v3.9h5.4c-.2 1.2-1.6 3.6-5.4 3.6-2.7 0-5-1.8-5.8-4.3l-3.3 2.5C4.6 19.7 8 22 12 22c5.8 0 9.6-4.1 9.6-9.9z"/>
    </svg>
  );
}
function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#1877F2" d="M24 12a12 12 0 10-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.6-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 1-2 2V12h3.4l-.5 3.5H14v8.4C19.6 23.1 24 18.1 24 12z"/>
    </svg>
  );
}
function MailIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}
function LockIcon({ className = "" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c-1.105 0-2 .895-2 2v4a2 2 0 002 2h0a2 2 0 002-2v-4c0-1.105-.895-2-2-2zM6 11V9a6 6 0 1112 0v2"/>
    </svg>
  );
}
function SocialButton({ provider, children }: { provider: "google" | "facebook"; children: React.ReactNode }) {
  const Icon = provider === "google" ? GoogleIcon : FacebookIcon;
  return (
    <button
      type="button"
      className="w-full h-10 inline-flex items-center justify-center gap-2 rounded-md ring-1 ring-gray-200 px-3 text-sm font-medium hover:ring-gray-300"
    >
      <Icon className="w-[18px] h-[18px]" />
      <span>{children}</span>
    </button>
  );
}
function DividerWithText({ text = "or" }: { text?: string }) {
  return (
    <div className="flex items-center gap-3 my-4">
      <div className="h-px bg-gray-200 flex-1" />
      <span className="text-xs tracking-wide text-gray-400">{text}</span>
      <div className="h-px bg-gray-200 flex-1" />
    </div>
  );
}
function PrimaryButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className = "", children, ...rest } = props;
  return (
    <button
      className={`w-full h-10 inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-4 text-sm font-semibold hover:bg-gray-800 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
function InputWithIcon({
  id,
  label,
  Icon,
  type = "text",
  withVisibilityToggle = false,
  ...inputProps
}: {
  id?: string;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
  type?: string;
  withVisibilityToggle?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  const reactId = useId();
  const inputId = id ?? `field-${reactId}`;
  const [show, setShow] = useState(false);
  const isPwd = type === "password";
  const effectiveType = isPwd && withVisibilityToggle ? (show ? "text" : "password") : type;

  return (
    <div>
      <label htmlFor={inputId} className="block text-[13px] font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1 relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          id={inputId}
          type={effectiveType}
          className="w-full h-10 rounded-md ring-1 ring-gray-200 focus:ring-2 focus:ring-emerald-500/60 pl-9 pr-10 text-[13px] placeholder:text-[12px] placeholder:text-gray-400"
          {...inputProps}
        />
        {isPwd && withVisibilityToggle && (
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs hover:text-gray-600"
            aria-label={show ? "Hide password" : "Show password"}
          >
            {show ? "Hide" : "Show"}
          </button>
        )}
      </div>
    </div>
  );
}

export default function SigninPage() {
  return (
    <div className="min-h-screen flex flex-col md:grid md:grid-cols-2 md:gap-6 lg:gap-8 p-4 md:p-6 lg:p-8">
      <section className="bg-white px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 flex flex-col min-h-screen md:min-h-full rounded-[24px]">
        <div className="flex justify-center md:justify-start mb-8 md:mb-12">
          <img src="/logo.avif" alt="notivo" className="block h-6 w-auto select-none" draggable={false} />
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-[400px] text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">Sign in</h1>
            <p className="text-sm text-gray-500 mb-6">Enter your details to login.</p>

            <div className="space-y-3 mb-6">
              <SocialButton provider="google">Sign in with Google</SocialButton>
              <SocialButton provider="facebook">Sign in with Facebook</SocialButton>
            </div>

            <DividerWithText text="OR" />

            <form className="space-y-4">
              <InputWithIcon 
                label="Email" 
                type="email" 
                placeholder="richardjoe33@gmail.com" 
                Icon={MailIcon} 
                name="email" 
                autoComplete="email" 
              />
              <InputWithIcon 
                label="Password" 
                type="password" 
                placeholder="••••••••••" 
                Icon={LockIcon} 
                name="password" 
                autoComplete="current-password" 
                withVisibilityToggle 
              />

              <div className="flex items-center justify-between py-2">
                <label className="inline-flex items-center gap-2 text-sm text-gray-600 select-none">
                  <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-800" />
                  Keep me logged in
                </label>
                <a href="#" className="text-sm text-gray-600 underline hover:text-gray-800">Forgot password?</a>
              </div>

              <div className="pt-2">
                <PrimaryButton type="submit">Login</PrimaryButton>
              </div>
            </form>

            <p className="text-sm text-gray-500 mt-6 text-center md:text-left">
              Don't have an account?{" "}
              <Link to="/signup" className="text-gray-900 font-medium hover:underline">Sign up</Link>
            </p>
          </div>
        </div>
      </section>

      <RightPromo />
    </div>
  );
}
