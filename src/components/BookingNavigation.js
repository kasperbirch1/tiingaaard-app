import React, { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Select,
  MenuItem,
  makeStyles,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import MomentUtils from "@date-io/moment";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import moment from "moment";
import globalContext from "../context/Global/globalContext";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0.5),
    minWidth: "175px",
  },
  DatePicker: {
    margin: theme.spacing(0.5),
    minWidth: "175px",
    height: "200px",
    color: "red",
  },
}));

const BookingNavigation = () => {
  const classes = useStyles();
  const { setFormData, data, clearData } = useContext(globalContext);

  const initialFormState = {
    REJSETYPE: data?.REJSETYPE ? data.REJSETYPE : "",
    REJSEMÅL: data?.REJSEMÅL ? data.REJSEMÅL : "",
    HOTEL: data?.HOTEL ? data.HOTEL : "",
    TRANSPORT: data?.TRANSPORT ? data.TRANSPORT : "",
    REJSELÆNGDE: data?.REJSELÆNGDE ? data.REJSELÆNGDE : "",
    FIRSTDATE: data?.FIRSTDATE ? data.FIRSTDATE : new Date(),
  };

  const { handleSubmit, errors, control, reset } = useForm({
    defaultValues: initialFormState,
  });
  const onSubmit = (data) => {
    setFormData(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
    >
      <Controller
        name="REJSETYPE"
        control={control}
        render={({ field }) => (
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="REJSETYPE">REJSETYPE</InputLabel>
            <Select {...field} labelId="REJSETYPE" label="REJSETYPE">
              <MenuItem value="winter">Vinter</MenuItem>
              <MenuItem value="summer">Sommer</MenuItem>
            </Select>
          </FormControl>
        )}
      />
      <Controller
        name="REJSEMÅL"
        control={control}
        render={({ field }) => (
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="REJSEMÅL">REJSEMÅL</InputLabel>
            <Select {...field} labelId="REJSEMÅL" label="REJSEMÅL">
              <MenuItem value="all">Alle hoteller</MenuItem>
              <MenuItem value="ita">Italien</MenuItem>
            </Select>
          </FormControl>
        )}
      />
      <Controller
        name="HOTEL"
        control={control}
        render={({ field }) => (
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="REJSEMÅL">HOTEL</InputLabel>
            <Select {...field} labelId="HOTEL" label="HOTEL">
              <MenuItem value="hotel1">Hotel Hotel 1</MenuItem>
              <MenuItem value="hotel2">Hotel 2</MenuItem>
              <MenuItem value="hotel3">Hotel 3</MenuItem>
              <MenuItem value="hotel4">Hotel 4</MenuItem>
            </Select>
          </FormControl>
        )}
      />

      <Controller
        name="TRANSPORT"
        control={control}
        render={({ field }) => (
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="TRANSPORT">TRANSPORT</InputLabel>
            <Select {...field} labelId="TRANSPORT" label="TRANSPORT">
              <MenuItem value="TRANSPORT1">TRANSPORT 1</MenuItem>
              <MenuItem value="TRANSPORT2">TRANSPORT 2</MenuItem>
              <MenuItem value="TRANSPORT3">TRANSPORT 3</MenuItem>
              <MenuItem value="TRANSPORT4">TRANSPORT 4</MenuItem>
            </Select>
          </FormControl>
        )}
      />
      <Controller
        name="REJSELÆNGDE"
        control={control}
        render={({ field }) => (
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="REJSELÆNGDE">REJSELÆNGDE</InputLabel>
            <Select {...field} labelId="REJSELÆNGDE" label="REJSELÆNGDE">
              <MenuItem value="REJSELÆNGDE1">REJSELÆNGDE 1</MenuItem>
              <MenuItem value="REJSELÆNGDE2">REJSELÆNGDE 2</MenuItem>
              <MenuItem value="REJSELÆNGDE3">REJSELÆNGDE 3</MenuItem>
              <MenuItem value="REJSELÆNGDE4">REJSELÆNGDE 4</MenuItem>
            </Select>
          </FormControl>
        )}
      />

      <Controller
        name="FIRSTDATE"
        control={control}
        render={({ field }) => (
          <MuiPickersUtilsProvider
            utils={MomentUtils}
            libInstance={moment}
            locale={"da"}
          >
            <DatePicker
              {...field}
              inputVariant="outlined"
              // variant="inline"
              hideTabs={false}
              cancelLabel={"Cancel"}
              okLabel={"Ok"}
              label="FIRSTDATE"
              clearable
              // placeholder="DD/MM/YYYY"
            />
          </MuiPickersUtilsProvider>
        )}
      />

      <div style={{ width: "100%" }}>
        <button type="submit" style={{}}>
          Submit
        </button>
        <button
          type="button"
          onClick={() => {
            clearData();
            reset({
              REJSETYPE: "",
              REJSEMÅL: "",
              HOTEL: "",
              TRANSPORT: "",
              REJSELÆNGDE: "",
              FIRSTDATE: new Date(),
            });
          }}
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default BookingNavigation;
