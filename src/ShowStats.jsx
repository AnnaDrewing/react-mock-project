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
        Show Statistics
      </Button>
      {showingStats && isDataFound && (
        <div>
          <p id="info-all">All advice: {patientDataJson[year].all}</p>
          <p id="info-female">
            Advice given to women: {patientDataJson[year].female}
          </p>
          <p id="info-minor">
            Advice given to minors: {patientDataJson[year].minor}
          </p>
          <p id="info-pensioner">
            Advice given to pensioners: {patientDataJson[year].pensioner}
          </p>
        </div>
      )}
      {!isDataFound && (
        <Alert severity="info">No data for the chosen year</Alert>
      )}
    </div>
  );
}
