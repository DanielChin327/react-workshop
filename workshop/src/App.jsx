// Backend API endpoint: https://matcha-and-keyboard-f549965e60e7.herokuapp.com/api/v1/cafes
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from ".components/Sidebar/Sidebar.jsx";
import Cafelist from ".components/Cafelist/Cafelist";
import React from "react";

export default function App() {
  const cafes = [];
  const url = "https://matcha-and-keyboard-f549965e60e7.herokuapp.com/api/v1/cafes";
  fetch(url)
    .then(response => response.json())
    .then(data => {
      data.forEach( (cafeData) => {
        cafes.push(cafeData);
      })
    })
return (
    <div>
      <Navbar />
    <div className="app-body">
        <Sidebar />
        <Cafelist />
      </div>
      </div>
  );
}
