"use client";

import React, { useState, useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import PasswordInstructions from "@/components/PasswordInstructions";

export default function SignUp() {
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  const EMAIL_REGEX = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [view, setView] = useState<string>("sign-up");
  const supabase = createClientComponentClient();

  const [inputsFocus, setInputsFocus] = useState({
    email: false,
    password: false,
    passwordConfirm: false,
  });

  useEffect(() => {
    if (
      inputsFocus.email ||
      inputsFocus.password ||
      inputsFocus.passwordConfirm
    ) {
      setErrorMsg("");
    }
  }, [inputsFocus]);

  const handleInputFocus = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setInputsFocus((prevInputFocus) => {
      return { ...prevInputFocus, [target.name]: true };
    });
  };

  const handleInputBlur = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setInputsFocus((prevInputFocus) => {
      return { ...prevInputFocus, [target.name]: false };
    });
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const pwdCheck = PWD_REGEX.test(password);
    const emailCheck = EMAIL_REGEX.test(email);

    if (!pwdCheck || !emailCheck || password !== passwordConfirm) {
      setErrorMsg("Invalid Inputs!!");
      return;
    }
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    setView("validate");
  };

  return (
    <div className="flex-1 flex flex-col h-screen w-full items-center px-8 sm:max-w-md justify-center gap-2 mx-auto">
      {view === "validate" ? (
        <p className="text-center text-foreground">
          Check <span className="font-bold">{email}</span> to continue signing
          up
        </p>
      ) : (
        <form
          className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
          onSubmit={handleSignUp}
        >
          {errorMsg ? (
            <p className="px-4 py-2 bg-neutral-200 text-red-600 border text-center rounded-lg my-6">
              {errorMsg}
            </p>
          ) : (
            ""
          )}
          <label className="text-md" htmlFor="email">
            Email
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="you@example.com"
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          {inputsFocus.email && email && !EMAIL_REGEX.test(email) ? (
            <span className="mb-2 text-neutral-400">
              Enter a valid email address
            </span>
          ) : (
            ""
          )}
          <label className="text-md" htmlFor="password">
            Password
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="••••••••"
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          {inputsFocus.password && password && !PWD_REGEX.test(password) ? (
            <PasswordInstructions />
          ) : (
            ""
          )}
          <label className="text-md" htmlFor="password">
            Confirm Password
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            type="password"
            name="passwordConfirm"
            onChange={(e) => setPasswordConfirm(e.target.value)}
            value={passwordConfirm}
            placeholder="••••••••"
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          {inputsFocus.passwordConfirm &&
          passwordConfirm &&
          passwordConfirm !== password ? (
            <span className="mb-2 text-neutral-400">
              Passwords do not match
            </span>
          ) : (
            ""
          )}
          <button
            type="submit"
            className="bg-green-700 rounded px-4 py-2 text-white mb-6"
          >
            Sign Up
          </button>
          <p className="text-sm text-center">
            Already have an account?
            <Link href="/login" className="ml-1 underline">
              Sign In Now
            </Link>
          </p>
        </form>
      )}
    </div>
  );
}
