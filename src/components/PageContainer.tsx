export default function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full grow shrink-0 justify-start items-center">
      <div className="flex flex-col shrink-0 w-full h-24 md:h-28 lg:h-36" />
      <div className="flex flex-col grow w-full px-6 md:px-8 lg:px-16 mb-12 max-w-6xl">
        {children}
      </div>
    </div>
  );
}
