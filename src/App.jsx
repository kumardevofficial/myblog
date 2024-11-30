import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

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
      <h1 className="bg-blue-500">Hello world</h1>
      <div>{data ? JSON.stringify(data) : "Loading..."}</div>
      {err && <div>Error: {err}</div>}
    </>
  );
}

export default App;
