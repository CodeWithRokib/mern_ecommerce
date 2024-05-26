
import { Route, Routes } from 'react-router-dom';

import DashboardLayout from '../components/layouts/DashboardLayout';
import DashboardHome from '../components/dashboard/DashboardHome';

const Dashboard = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />} />
      <Route path="rokib" element={<DashboardHome />} />

    </Routes>
  );
};

export default Dashboard;
