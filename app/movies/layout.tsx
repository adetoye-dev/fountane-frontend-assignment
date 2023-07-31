import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";

export const dynamic = "force-dynamic";

export default async function MoviesDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    // This route can only be accessed by authenticated users.
    // Unauthenticated users will be redirected to the `/login` route.
    redirect("/login");
  }

  //movie enpoints: now playing, popular, top rated, upcoming

  return (
    <>
      <NavBar />
      <main className="flex w-full h-full">
        <SideBar />
        <div className="px-4 md:px-8 py-10 w-full">{children}</div>
      </main>
    </>
  );
}
