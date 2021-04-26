import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(0, 3),
    },
    group: {
      margin: theme.spacing(1, 0),
    },
  }));

export default function Page() {

  const classes = useStyles();
  const [value, setValue] = useState('');

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div className="p-2">
      <h5 className="ml-5"> Categoria de Filtro 1 </h5>
      <div className="d-block">
        <FormControl component="fieldset" className={classes.formControl}>
            <RadioGroup
            aria-label="Gender"
            name="gender1"
            className={classes.group}
            value={value}
            onChange={handleChange}
            >
            <FormControlLabel value="rb1" control={<Radio color="primary"/>} label="Radio Booton 1" />
            <FormControlLabel value="rb2" control={<Radio color="primary"/>} label="Radio Booton 2" />
            <FormControlLabel value="rb3" control={<Radio color="primary"/>} label="Radio Booton 3" />
        </RadioGroup>
      </FormControl>
      </div>
    </div>
  );
}
