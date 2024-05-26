
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">MyApp</Link>
        <div>
          <Link to="/" className="text-white mx-2">Home</Link>
          <Link to="/about" className="text-white mx-2">About</Link>
          <Link to="/contact" className="text-white mx-2">Contact</Link>
          <Link to="/user" className="text-white mx-2">User</Link>
          <Link to="/login" className="text-white mx-2">Login</Link>
          <Link to="/register" className="text-white mx-2">Registration</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
