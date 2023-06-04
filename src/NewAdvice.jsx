import patientDataJson from "./patient-data.json";
import { useState } from "react";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
//import { writeFile } from "fs";
export default function NewAdvice({ year }) {
  const [isFemale, setIsFemale] = useState(false);
  const [isMinor, setIsMinor] = useState(false);
  const [isPensioner, setIsPensioner] = useState(false);
  const [addingNewAdvice, setAddingNewAdvice] = useState(false);
  const toggleNewAdviceContainer = () => {
    setAddingNewAdvice(!addingNewAdvice);
  };
  let currentData = patientDataJson[year];
  //const allPatients = currentData.all;
  const updateForm = (evt) => {
    if (evt.target.name === "female") {
      console.log(evt.target.checked);
      setIsFemale(evt.target.checked);
    }
    if (evt.target.name === "minor") {
      console.log(evt.target.checked);
      setIsMinor(evt.target.checked);
    }
    if (evt.target.name === "pensioner") {
      console.log(evt.target.checked);
      setIsPensioner(evt.target.checked);
    }
  };
  const saveNewAdvice = () => {
    console.log("Saving new advice");
    const patientDataFileName = "./patient-data.json";
    currentData.all += 1;
    if (isFemale) {
      currentData.female += 1;
    }
    if (isMinor) {
      currentData.minor += 1;
    }
    if (isPensioner) {
      currentData.pensioner += 1;
    }
    //Saving the changes into the JSON file
    // writeFile(
    //   patientDataFileName,
    //   JSON.stringify(patientDataJson, null, 2),
    //   function writeJSON(err) {
    //     if (err) return console.log(err);
    //   }
    // );
    alert("New advice successfully added!");
  };
  return (
    <div>
      <Button
        id="add-new-advice"
        onClick={toggleNewAdviceContainer}
        variant="contained"
        className="Button"
        sx={{ m: 2 }}
      >
        Add New Advice
      </Button>

      {addingNewAdvice && (
        <div id="add-new-advice-container">
          <FormGroup className="Checkboxes">
            <FormControlLabel
              control={<Checkbox />}
              label="Female"
              name="female"
              id="female"
              onChange={updateForm}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Minor"
              name="minor"
              id="minor"
              onChange={updateForm}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Pensioner"
              name="pensioner"
              id="pensioner"
              onChange={updateForm}
            />
          </FormGroup>
          <Button id="save-advice" onClick={saveNewAdvice} variant="outlined">
            Save New Advice
          </Button>
        </div>
      )}
    </div>
  );
}
