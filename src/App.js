import React from "react";
// import axiosRequester from "./Utils/API";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Pages/Home/Home";

function App() {
  // useEffect(async () => {
  //   const employeesData = await axiosRequester.get(`/employees`);
  //   console.log("employees :::: ", employeesData.data);
  // }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
