import Year from "./Year";
import NewAdvice from "./NewAdvice";
import ShowStats from "./ShowStats";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [year, setYear] = useState("2023");
  return (
    <div className="App">
      <h1>Liczba Porad Stomatologicznych</h1>
      {/* Rok */}
      <Year updateYear={setYear} />
      {/* Dodaj nową poradę */}
      <NewAdvice year={year} />
      {/* Pokaz statystykę */}
      <ShowStats year={year} />
    </div>
  );
}
