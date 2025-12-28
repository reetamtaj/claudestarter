export default function DashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-6 text-foreground">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total Users', value: '1,234', change: '+12%' },
          { label: 'Revenue', value: '$56,789', change: '+8%' },
          { label: 'Active Sessions', value: '892', change: '+23%' },
          { label: 'Conversion Rate', value: '3.24%', change: '-2%' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 shadow-sm"
          >
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">{stat.label}</p>
            <p className="text-2xl font-semibold text-foreground">{stat.value}</p>
            <p className={`text-sm mt-2 ${stat.change.startsWith('+') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
              {stat.change}
            </p>
          </div>
        ))}
      </div>

      {/* Content Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-foreground">Recent Activity</h2>
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Placeholder activity item {i}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-foreground">Performance Chart</h2>
          <div className="h-48 flex items-center justify-center text-zinc-400">
            [Chart Placeholder]
          </div>
        </div>
      </div>
    </div>
  );
}
