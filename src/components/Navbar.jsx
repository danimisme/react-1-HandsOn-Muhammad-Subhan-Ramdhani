import "./style.css";
const Navbar = () => {
  const navList = ["Home", "About", "Contact", "Help", "Login"];

  return (
    <div className="nav-list">
      {/* {navList.map((item, index) => {
        return <p key={index}>{item}</p>;
      })} */}

      {navList.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
};

export default Navbar;
