type Props = {
  children: React.ReactNode;
  className?: string;
};

export function SectionTitle({ children, className = "" }: Props) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-3xl font-bold tracking-tight text-[#0f3460] md:text-4xl">
        {children}
      </h2>
      <div
        className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#ff6b35]"
        aria-hidden
      />
    </div>
  );
}
