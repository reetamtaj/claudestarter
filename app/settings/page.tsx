import SettingsSection from "@/app/components/SettingsSection";
import UserProfileSection from "@/app/components/UserProfileSection";

export default function SettingsPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-semibold mb-8 text-foreground">Settings</h1>

      <div className="space-y-6">
        {/* User Profile Section - Managed by Clerk */}
        <UserProfileSection />

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
