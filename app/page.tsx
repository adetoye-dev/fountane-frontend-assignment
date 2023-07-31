import Sponsors from "@/components/Sponsors";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen flex-col container-main items-center justify-between p-10">
      <nav className="h-16 w-full mb-auto rounded-full border border-white border-opacity-10 flex-col justify-center items-center gap-2.5 inline-flex">
        <div className="self-stretch px-10 py-3 bg-black bg-opacity-50 rounded-full border-b backdrop-blur-md justify-between items-center gap-6 inline-flex">
          <Image
            className="w-28 h-6"
            src="/logo.svg"
            alt="logo"
            width={112}
            height={24}
          />
          <div className="justify-center items-center gap-10 flex">
            <span className="Products text-white text-base font-normal lowercase">
              Products
            </span>
            <span className="text-white text-base font-normal lowercase">
              DAO
            </span>
            <span className="text-white text-base font-normal lowercase">
              Build
            </span>
            <span className="text-white text-base font-normal lowercase">
              Docs
            </span>
          </div>

          <Link
            href="/login"
            className="px-5 py-2 bg-slate-400 rounded-full shadow-inner border border-white border-opacity-25 text-center text-black text-sm font-semibold lowercase"
          >
            Launch App
          </Link>
        </div>
      </nav>
      <div className="opacity-80 w-96 h-96 left-[292px] top-[-32px] absolute">
        <div className="w-72 h-24 left-[211px] top-[187px] absolute bg-sky-500 rounded-full blur-3xl" />
      </div>

      <div className="flex-col justify-start items-center gap-6 flex max-w-2xl">
        <div className=" flex-col justify-start items-center flex">
          <h2 className="JetProtocol text-center text-emerald-400 text-xs font-medium">
            JET PROTOCOL
          </h2>
          <h1 className="text-center text-white text-5xl font-medium leading-10">
            the next generation of{" "}
            <span className="block font-semibold">defi governance</span>
          </h1>
        </div>
        <p className="self-stretch text-center text-white text-opacity-60 text-xl font-normal">
          experience open source, transparent and efficient borrowing and
          lending on solana.
        </p>
        <div className="flex items-center justify-center gap-5 mt-5">
          <button
            type="button"
            className="px-5 py-2 bg-slate-400 rounded-full shadow-inner border border-white border-opacity-25 text-center text-black text-sm font-semibold lowercase"
          >
            Read Docs
          </button>

          <button
            type="button"
            className="px-5 py-2 bg-black bg-opacity-10 rounded-full shadow-inner border border-white border-opacity-50 backdrop-blur-md text-center text-white text-sm font-medium lowercase"
          >
            How it works
          </button>
        </div>
      </div>
      <Sponsors />
    </main>
  );
}
