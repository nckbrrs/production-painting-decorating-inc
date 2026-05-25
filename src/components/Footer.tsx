export default function Footer() {
  return (
    <div className="flex flex-row w-full py-4 shrink-0 items-center justify-end bg-black dark:bg-[#111111] border-t border-slate-800">
      <p className="text-bone/70 font-light text-xs sm:text-sm pr-5">
        Copyright &copy; {new Date().getFullYear()} PPD, INC
      </p>
    </div>
  );
}
