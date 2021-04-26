import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
});
GreenCheckbox((props) => <Checkbox color="default" {...props} />);

export default function Page() {
  const [state, setState] = useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
  });

  const handleChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { checkedA, checkedB, checkedC } = state;
  return (
    <div className="p-2">
      <h5 className="ml-3"> Categoria de Filtro 1 </h5>{" "}
      <div className="ml-5 d-flex d-md-block">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={checkedA}
                onChange={handleChange("checkedA")}
                value="checkedA"
                color="primary"
              />
            }
            label="CheckBox"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checkedB}
                onChange={handleChange("checkedB")}
                value="checkedB"
                color="primary"
              />
            }
            label="CheckBox"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checkedC}
                onChange={handleChange("checkedC")}
                value="checkedC"
                color="primary"
              />
            }
            label="CheckBox"
          />
        </FormGroup>{" "}
      </div>{" "}
    </div>
  );
}
