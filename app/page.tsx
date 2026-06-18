import { SettingsHeader, UserRole } from '@/components/settings';
import UserRoleTable from '@/components/settings/userRoleTable';

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-8">
      <SettingsHeader />
      <UserRole />
      <UserRoleTable />
    </div>
  );
}
