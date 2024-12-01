import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import HeaderMenu from "./component/HeaderMenu/HeaderMenu";
import { Outlet } from "react-router-dom";
import Footer from "./component/Footer/Footer";

function App() {
  const [data, setData] = useState("");
  const [err, seterr] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://practice-backend-server.vercel.app/"
        );
        setData(response.data); // Set API response data
      } catch (err) {
        seterr(err.message); // Set error message
      }
    };
    getData();
  }, []);

  return (
    <>
      <HeaderMenu />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
