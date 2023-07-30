"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message);
      return;
    }

    router.push("/movies");
    router.refresh();
  };

  return (
    <div className="flex-1 flex flex-col h-screen w-full items-center px-8 sm:max-w-md justify-center gap-2">
      <form
        className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
        onSubmit={handleSignIn}
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
          onFocus={() => setErrorMsg("")}
        />
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
          onFocus={() => setErrorMsg("")}
        />
        <button
          type="submit"
          className="bg-green-700 rounded px-4 py-2 text-white mb-6"
        >
          Sign In
        </button>
        <p className="text-sm text-center">
          Don&apos;t have an account?
          <Link href="/signup" className="ml-1 underline">
            Sign Up Now
          </Link>
        </p>
      </form>
    </div>
  );
}
