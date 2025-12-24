import { DashboardHome } from "./DashboardHome";
import { DashboardLayout } from "./DashboardLayout";
import { GetCoinsPage } from "./GetCoinsPage";


function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardHome />
      <GetCoinsPage />
      
      {/* When you add more pages later, just swap DashboardHome with the new component */}
    </DashboardLayout>
  );
}

export default Dashboard;
