import type { LucideIcon } from "lucide-react";

interface MetricItem {
  icon: LucideIcon;
  value: string;
  label: string;
}

interface MetricsGridProps {
  items: MetricItem[];
}

export function MetricsGrid({ items }: MetricsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
      {items.map((item) => (
        <div
          key={item.label}
          className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-xl p-6 text-center hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300"
        >
          <item.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
          <div className="text-3xl font-bold text-purple-400 mb-1">{item.value}</div>
          <div className="text-sm text-white/60">{item.label}</div>
        </div>
      ))}
    </div>
  );
}
