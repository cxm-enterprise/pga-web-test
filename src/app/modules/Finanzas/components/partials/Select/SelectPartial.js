import React from "react";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default function SelectPartial({
  tittle,
  select,
  classes,
  inputLabel,
  handleChange,
  labelWidth,
  value1,
  value2,
  value3,
}) {
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel ref={inputLabel} htmlFor="select" className="h5">
        {tittle}
      </InputLabel>
      <Select
        value={select}
        onChange={handleChange}
        input={
          <OutlinedInput labelWidth={labelWidth} name="select" id="select" />
        }
      >
        <MenuItem value={10}>{value1}</MenuItem>
        <MenuItem value={20}>{value2}</MenuItem>
        <MenuItem value={30}>{value3}</MenuItem>
      </Select>
    </FormControl>
  );
}
