import React, { useId, useState } from "react";
import { Link } from "react-router-dom";

/* ========================= Right Panel (tilted & cropped) ========================= */
function RightPromo() {
  return (
    <aside className="hidden md:block relative h-full w-full">
      <div className="absolute inset-0 bg-[#72E37C] rounded-[18px] overflow-hidden">
        {/* Headline + subcopy */}
        <div className="px-8 pt-12 max-w-[640px]">
          <h2 className="text-[32px] leading-[38px] font-extrabold tracking-[-0.02em] text-[#1f2937]">
            Lead Smarter with Better Team Insights
          </h2>
          <p className="mt-3 text-[15px] leading-[22px] text-[#1f2937]/75 max-w-[560px]">
            Capture feedback, track growth, and simplify performance conversations    <br/> — 
            all in one private, intuitive workspace.
          </p>
        </div>

        {/* Mockup: larger than container, tilted, and cropped via overflow-hidden */}
        <div className="relative h-full">
          <img
            src="/right-pannel.avif"
            alt="Product preview"
            loading="lazy"
            draggable={false}
            className="
              absolute
              right-[-225px]
              w-[125%]
              max-w-none
              rounded-xl
              shadow-2xl
              select-none
              transform origin-center rotate-[-8deg]
            "
          />        </div>
      </div>
    </aside>
  );
}

/* ============================== Small UI helpers =============================== */
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
function UserIcon({ className = "" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A10.973 10.973 0 0112 15c2.21 0 4.265.64 5.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"/>
    </svg>
  );
}
function MailIcon({ className = "" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2zm0 0l8 5 8-5"/>
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

/* Reusable bits */
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
function DividerWithText({ text = "OR" }: { text?: string }) {
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

/* ==================================== PAGE ==================================== */
export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col md:grid md:grid-cols-2">
      {/* LEFT */}
      <section className="bg-white px-5 sm:px-7 md:px-9 pb-10 flex flex-col">
        <div className="pt-4">
          <img src="/logo.avif" alt="notivo" className="block h-6 w-auto select-none" draggable={false} />
        </div>

        <div className="flex-1 grid place-items-center mt-6 md:mt-16">
          <div className="w-full max-w-[380px] -translate-y-1 sm:-translate-y-1 lg:-translate-y-1">
            <h1 className="text-[28px] leading-[34px] font-semibold text-gray-900">Sign up</h1>
            <p className="mt-1 text-[13px] leading-[18px] text-gray-500">Enter your details to signup.</p>

            <div className="mt-4 space-y-2">
              <SocialButton provider="google">Sign up with Google</SocialButton>
              <SocialButton provider="facebook">Sign up with Facebook</SocialButton>
            </div>

            <DividerWithText text="OR" />

            <form className="space-y-3">
              <InputWithIcon label="Full name" placeholder="Richard Joseph" Icon={UserIcon} name="fullName" autoComplete="name" />
              <InputWithIcon label="Email" type="email" placeholder="olivia33@gmail.com" Icon={MailIcon} name="email" autoComplete="email" />
              <InputWithIcon label="Password" type="password" placeholder="•••••••••" Icon={LockIcon} name="password" autoComplete="new-password" withVisibilityToggle />
              <PrimaryButton type="submit">Signup</PrimaryButton>
            </form>

            <p className="text-[13px] text-gray-500 mt-4">
              If you already have an account?{" "}
              <Link to="/login" className="text-gray-900 font-medium hover:underline">Sign in</Link>
            </p>
          </div>
        </div>
      </section>

      {/* RIGHT (hidden on small) */}
      <RightPromo />
    </div>
  );
}
