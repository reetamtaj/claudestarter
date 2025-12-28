import SettingsSection from "@/app/components/SettingsSection";

export default function SettingsPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-semibold mb-8 text-foreground">Settings</h1>

      <div className="space-y-6">
        <SettingsSection
          title="Profile"
          description="Manage your profile information and public details"
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Display Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-3 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-3 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-500"
              />
            </div>
          </div>
        </SettingsSection>

        <SettingsSection
          title="Preferences"
          description="Customize your dashboard experience"
        >
          <div className="space-y-3">
            {['Compact view', 'Show tooltips', 'Enable animations'].map((pref) => (
              <label key={pref} className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded" />
                <span className="text-sm text-foreground">{pref}</span>
              </label>
            ))}
          </div>
        </SettingsSection>

        <SettingsSection
          title="Notifications"
          description="Control how you receive notifications"
        >
          <div className="space-y-3">
            {['Email notifications', 'Push notifications', 'Weekly digest'].map((notif) => (
              <label key={notif} className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded" />
                <span className="text-sm text-foreground">{notif}</span>
              </label>
            ))}
          </div>
        </SettingsSection>
      </div>
    </div>
  );
}
