export default function DashboardFrame({
  bgClass,
  title,
}: {
  bgClass: string;
  title: string;
}) {
  return (
    <div
      className={`${bgClass} w-full mx-auto relative outline bg-neutral-300 h-48 md:h-80 rounded-lg bg-cover md:bg-cover bg-no-repeat`}
    >
      <span className="absolute bottom-4 left-4 py-2 px-4 rounded-md bg-black text-white md:font-bold md:text-2xl">
        {title}
      </span>
    </div>
  );
}
