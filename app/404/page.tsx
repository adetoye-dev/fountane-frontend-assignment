import Link from "next/link";
export default function PageNotFound() {
  return (
    <div className="flex mx-auto flex-col h-screen w-full items-center px-8 sm:max-w-md justify-center gap-2">
      <p className="text-center text-foreground">
        Sorry the page you&apos;re trying to reach could not be found!
        <Link href="/" className="font-bold underline block mt-4">
          Back to Home
        </Link>
      </p>
    </div>
  );
}
