import { useEffect } from "react";
import axios from "axios";
import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState("");
  const [err, seterr] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://practice-backend-server.vercel.app/"
        );
        setData(response.data);
      } catch (err) {
        seterr(err.message);
      }
    };
    getData();
  }, []);

  return (
    <>
      <h1 className="bg-blue-500">Hello world</h1>
      <div>{data}</div>
      <div>{err}</div>
    </>
  );
}

export default App;
