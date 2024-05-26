
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';


const DashboardLayout = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Topbar />
        <div className="container-fluid mt-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;