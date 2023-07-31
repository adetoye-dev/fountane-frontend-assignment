"use client";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";

export default function NavBar() {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const signOut = async () => {
    await supabase.auth.signOut();

    router.push("/login");
    router.refresh();
  };

  return (
    <nav className="py-4 border-b border-sky-200 fixed z-40 bg-black top-0 w-full">
      <div className="container-main flex justify-between">
        <Link href="/" className="font-semibold text-lg">
          Fountane
        </Link>
        <button type="button" onClick={signOut} className="text-neutral-100">
          Logout
        </button>
      </div>
    </nav>
  );
}
