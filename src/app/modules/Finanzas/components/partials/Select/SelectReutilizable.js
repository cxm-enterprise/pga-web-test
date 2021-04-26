import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SelectPartial from './SelectPartial'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectReutilizable({tittle, value1, value2, value3}) {
  const classes = useStyles();

  const [selectValue, setSelectValue] = useState('');
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);

  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = (event) => {
    setSelectValue(event.target.value)
  };

  return (
      <div className="ml-2">
          <SelectPartial
            tittle={tittle}
            select={selectValue}
            classes={classes}
            inputLabel={inputLabel}
            labelWidth={labelWidth}
            handleChange={handleChange}
            value1={value1}
            value2={value2}
            value3={value3}
          />
      </div>
  );
}