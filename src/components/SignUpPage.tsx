import React, { useId, useState } from "react";
import { Link } from "react-router-dom";
function RightPromo() {
  return (
    <aside className="hidden md:block relative h-full w-full p-2 lg:p-4">
      <div className="relative h-full w-full bg-[#72E37C] rounded-lg lg:rounded-2xl overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="pointer-events-none absolute
              md:-bottom-2 md:-left-2 md:w-[120px] md:border-[30px]
              lg:-bottom-4 lg:-left-4 lg:w-[180px] lg:border-[40px]
              xl:-bottom-6 xl:-left-6 xl:w-[220px] xl:border-[50px]
              aspect-square rounded-full border-white/20 z-[1]"
          />
        </div>

        <div className="px-6 md:px-8 lg:px-10 pt-8 md:pt-10 lg:pt-12 max-w-[90%] relative z-[3]">
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight text-[#1f2937] leading-tight">
            Lead Smarter with Better Team Insights
          </h2>
          <p className="mt-3 md:mt-4 text-sm md:text-base text-[#1f2937]/80 max-w-[85%] leading-relaxed">
            Capture feedback, track growth, and simplify performance conversations — 
            all in one private, intuitive workspace.
          </p>
        </div>

        <div className="absolute bottom-0 right-0 w-full h-full z-[2] overflow-hidden">
          <img
            src="/right-pannel.avif"
            alt="Product preview"
            loading="lazy"
            draggable={false}
            className="
              absolute
              bottom-4 right-4
              md:bottom-6 md:right-6 md:w-[70%]
              lg:bottom-8 lg:right-8 lg:w-[75%]
              xl:bottom-10 xl:right-10 xl:w-[80%]
              max-w-none rounded-lg md:rounded-xl shadow-2xl select-none
              transform rotate-[-8deg] origin-bottom-right
            "
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
function UserIcon({ className = "" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A10.973 10.973 0 0112 15c2.21 0 4.265.64 5.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"/>
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
export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col md:grid md:grid-cols-2">
      <section className="bg-white px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 flex flex-col min-h-screen md:min-h-full">
        <div className="flex justify-center md:justify-start mb-8 md:mb-12">
          <img src="/logo.avif" alt="notivo" className="block h-6 w-auto select-none" draggable={false} />
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-[400px] text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">Sign up</h1>
            <p className="text-sm text-gray-500 mb-6">Enter your details to signup.</p>

            <div className="space-y-3 mb-6">
              <SocialButton provider="google">Sign up with Google</SocialButton>
              <SocialButton provider="facebook">Sign up with Facebook</SocialButton>
            </div>

            <DividerWithText text="OR" />

            <form className="space-y-4">
              <InputWithIcon 
                label="Full name" 
                placeholder="John Doe" 
                Icon={UserIcon} 
                name="fullName" 
                autoComplete="name" 
              />
              <InputWithIcon 
                label="Email" 
                type="email" 
                placeholder="johndoe@example.com" 
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
                autoComplete="new-password" 
                withVisibilityToggle 
              />

              <div className="pt-2">
                <PrimaryButton type="submit">Signup</PrimaryButton>
              </div>
            </form>

            <p className="text-sm text-gray-500 mt-6 text-center md:text-left">
              Already have an account?{" "}
              <Link to="/login" className="text-gray-900 font-medium hover:underline">Sign in</Link>
            </p>
          </div>
        </div>
      </section>
      <RightPromo />
    </div>
  );
}
