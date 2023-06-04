import { useState } from "react";
import patientDataJson from "./patient-data.json";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

export default function ShowStats(props) {
  const [showingStats, setShowingStats] = useState(false);
  const toggleStatistics = () => {
    setShowingStats(!showingStats);
  };
  const year = props.year;
  const isDataFound = patientDataJson[year] ? true : false;
  return (
    <div id="statistics">
      <Button
        onClick={toggleStatistics}
        variant="contained"
        className="Button"
        sx={{ m: 2 }}
      >
        Wyświetl statystykę
      </Button>
      {showingStats && isDataFound && (
        <div>
          <p id="info-all">Wszystkie porady: {patientDataJson[year].all}</p>
          <p id="info-female">
            Porady udzielone kobietom: {patientDataJson[year].female}
          </p>
          <p id="info-minor">
            Porady udzielone osobom poniżej 18 r.ż.:{" "}
            {patientDataJson[year].minor}
          </p>
          <p id="info-pensioner">
            Porady udzielone osobom powyżej 65 r.ż.:{" "}
            {patientDataJson[year].pensioner}
          </p>
        </div>
      )}
      {!isDataFound && (
        <Alert severity="info">Brak danych na wybrany rok</Alert>
      )}
    </div>
  );
}
