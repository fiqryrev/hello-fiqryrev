interface SolutionHeaderProps {
  badgeText: string;
  title: string;
  subtitle: string;
}

export function SolutionHeader({ badgeText, title, subtitle }: SolutionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
        </span>
        <span className="text-xs text-white/70 font-medium">{badgeText}</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          {title}
        </span>
      </h1>
      <p className="text-lg md:text-xl text-white/80 font-light max-w-3xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
}
