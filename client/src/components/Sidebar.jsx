
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="d-flex flex-column p-3 bg-dark text-white vh-100">
      <h2>Admin Dashboard</h2>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/" className="nav-link text-white">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link to="/user" className="nav-link text-white">Users</Link>
        </li>
        <li className="nav-item">
          <Link to="/setting" className="nav-link text-white">Settings</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
