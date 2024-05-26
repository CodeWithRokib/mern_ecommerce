const Footer = () => {
    return (
      <footer className="bg-blue-500 p-4 mt-8">
        <div className="container mx-auto text-center text-white">
          &copy; {new Date().getFullYear()} MyApp. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;