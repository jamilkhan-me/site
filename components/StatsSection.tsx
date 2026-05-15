import React from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type StatCardProps = {
  label: string;
  value: string;
  icon: React.ReactNode;
  trend?: string;
  trendUp?: boolean;
};

// ─── Individual stat card ─────────────────────────────────────────────────────

const StatCard = ({ label, value, icon, trend, trendUp }: StatCardProps) => (
  <div className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] hover:bg-orange-50 dark:hover:bg-white/[0.04] hover:border-orange-300 dark:hover:border-orange-500/20 transition-all duration-200">
    {/* Icon bubble */}
    <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
      {icon}
    </div>

    {/* Content */}
    <div className="min-w-0">
      <p className="text-sm text-gray-500 leading-none mb-1">{label}</p>
      <p className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white leading-none">{value}</p>
      {trend && (
        <p className={`text-[12px] mt-1 ${trendUp ? "text-green-600 dark:text-green-400" : "text-red-500 dark:text-red-400"}`}>
          {trendUp ? "↑" : "↓"} {trend}
        </p>
      )}
    </div>
  </div>
);

// ─── Icons ────────────────────────────────────────────────────────────────────

const EyeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const BookOpenIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const CodeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const CloudIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
  </svg>
);

// ─── Export ───────────────────────────────────────────────────────────────────

const StatsSection = () => {
  const stats: StatCardProps[] = [
    {
      label: "Profile Views",
      value: "2.4k",
      icon: <EyeIcon />,
      trend: "12% this month",
      trendUp: true,
    },
    {
      label: "Books Read",
      value: "27",
      icon: <BookOpenIcon />,
      trend: "3 this quarter",
      trendUp: true,
    },
    {
      label: "Projects Shipped",
      value: "12",
      icon: <CodeIcon />,
      trend: "2 AWS projects",
      trendUp: true,
    },
    {
      label: "AWS Services Used",
      value: "18+",
      icon: <CloudIcon />,
      trend: "Certified Cloud Eng.",
      trendUp: true,
    },
  ];

  return (
    <section
      className="my-8 p-5 md:p-6 rounded-2xl border border-gray-200 dark:border-white/[0.06] bg-gray-50 dark:bg-[hsl(38,10%,5%)]"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-[15px] font-semibold text-gray-900 dark:text-white tracking-wide my-0 flex items-center gap-2">
          <span className="w-1 h-4 rounded-full bg-orange-500 inline-block" />
          At a Glance
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
