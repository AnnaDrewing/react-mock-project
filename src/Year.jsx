import { useState } from "react";
import TextField from "@mui/material/TextField";

export default function Year({ updateYear }) {
  const [year, setYear] = useState("2023");
  const handleChange = (evt) => {
    updateYear(evt.target.value);
    setYear(evt.target.value);
  };
  //   return (
  //     <input
  //       type="number"
  //       id="year"
  //       name="year"
  //       value={year}
  //       min="2023"
  //       max="2050"
  //       onChange={handleChange}
  //     />
  //   );
  return (
    <TextField
      className="Year"
      id="year"
      label="Year"
      type="number"
      value={year}
      onChange={handleChange}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
}
