import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import "./components/style.css";

const App = () => {
  const name = "Dhani";
  const isSingle = true;

  const renderStatus = (status) => {
    if (status) {
      return <p>Saya sudah menikah</p>;
    } else {
      return <p>Saya belum menikah</p>;
    }
  };

  return (
    <div>
      <Navbar />
      <Banner />
      <Footer />
      {/* <h1>Hello , my name is {name} </h1>
      {isSingle ? <p>Saya Belum menikah</p> : <p>Saya Sudah menikah</p>}
      {renderStatus(status)} */}
    </div>
  );
};

export default App;
