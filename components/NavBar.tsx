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
    <nav className="py-4 border-b">
      <div className="container-main flex justify-between">
        <Link href="/">Logo</Link>
        <button type="button" onClick={signOut} className="text-neutral-100">
          Logout
        </button>
      </div>
    </nav>
  );
}
