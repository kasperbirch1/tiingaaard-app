import React, { useContext, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MomentUtils from "@date-io/moment";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import moment from "moment";
import globalContext from "../context/Global/globalContext";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import {
  Select,
  MenuItem,
  makeStyles,
  FormControl,
  InputLabel,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: ".5rem",
    // minWidth: "12rem",
    width: "100%",
  },
}));

const BookingNavigation = () => {
  const classes = useStyles();
  const MinWidth600 = useMediaQuery("(max-width:600px)");
  const { setFormData, data, clearData } = useContext(globalContext);

  const [daysWithDot, setDaysWithDot] = useState([
    "2021/04/15",
    "2021/04/16",
    "2021/04/20",
  ]);

  const initialFormState = {
    REJSETYPE: data?.REJSETYPE ? data.REJSETYPE : "",
    REJSEMÅL: data?.REJSEMÅL ? data.REJSEMÅL : "",
    HOTEL: data?.HOTEL ? data.HOTEL : "",
    TRANSPORT: data?.TRANSPORT ? data.TRANSPORT : "",
    REJSELÆNGDE: data?.REJSELÆNGDE ? data.REJSELÆNGDE : "",
    FIRSTDATE: data?.FIRSTDATE ? data.FIRSTDATE : null,
    // SECONDDATE: data?.SECONDDATE ? data.SECONDDATE : null,
  };

  const { register, handleSubmit, errors, control, reset, setValue } = useForm({
    defaultValues: initialFormState,
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
    // setFormData(data);
  };

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [OneDate, setOneDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  const handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
    setValue("test", {
      startDate: startDate?._d.toDateString(),
      // endDate: endDate?._d.toDateString(),
    });
  };

  const renderDayInPicker = (
    date,
    selectedDate,
    dayInCurrentMonth,
    dayComponent
  ) => {
    if (daysWithDot.includes(date.format("YYYY/MM/DD"))) {
      return <div style={{ backgroundColor: "red" }}>{dayComponent}</div>;
    }

    return dayComponent;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ width: "100%", marginBottom: "50px" }}>
        {/* <DateRange
          {...register("RANGEDATES")}
          ranges={[selectionRange]}
          onChange={handleSelect}
          months={1}
          direction="vertical"
          scroll={{ enabled: true }}
          locale={rdrLocales.da}
        /> */}
      </div>
      <Grid
        container
        spacing={MinWidth600 ? 0 : 1}
        style={{ paddingRight: "15px" }}
      >
        <Grid item xs={12} sm={2}>
          <Controller
            name="REJSETYPE"
            control={control}
            render={({ field }) => (
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="REJSETYPE">REJSETYPE</InputLabel>
                <Select
                  {...field}
                  onChange={(e) => {
                    setValue("REJSETYPE", e.target.value);
                    setFormData({
                      ...data,
                      REJSETYPE: e.target.value,
                    });
                  }}
                  labelId="REJSETYPE"
                  label="REJSETYPE"
                >
                  <MenuItem value="winter">Vinter</MenuItem>
                  <MenuItem value="summer">Sommer</MenuItem>
                </Select>
              </FormControl>
            )}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Controller
            name="REJSEMÅL"
            control={control}
            render={({ field }) => (
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="REJSEMÅL">REJSEMÅL</InputLabel>
                <Select
                  {...field}
                  onChange={(e) => {
                    setValue("REJSEMÅL", e.target.value);
                    setFormData({
                      ...data,
                      REJSEMÅL: e.target.value,
                    });
                  }}
                  labelId="REJSEMÅL"
                  label="REJSEMÅL"
                >
                  <MenuItem value="all">Alle hoteller</MenuItem>
                  <MenuItem value="ita">Italien</MenuItem>
                </Select>
              </FormControl>
            )}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Controller
            name="HOTEL"
            control={control}
            render={({ field }) => (
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="HOTEL">HOTEL</InputLabel>
                <Select
                  {...field}
                  onChange={(e) => {
                    setValue("HOTEL", e.target.value);
                    setFormData({
                      ...data,
                      HOTEL: e.target.value,
                    });
                  }}
                  labelId="HOTEL"
                  label="HOTEL"
                >
                  <MenuItem value="hotel1">Hotel Hotel 1</MenuItem>
                  <MenuItem value="hotel2">Hotel 2</MenuItem>
                  <MenuItem value="hotel3">Hotel 3</MenuItem>
                  <MenuItem value="hotel4">Hotel 4</MenuItem>
                </Select>
              </FormControl>
            )}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Controller
            name="TRANSPORT"
            control={control}
            render={({ field }) => (
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="TRANSPORT">TRANSPORT</InputLabel>
                <Select
                  {...field}
                  onChange={(e) => {
                    setValue("TRANSPORT", e.target.value);
                    setFormData({
                      ...data,
                      TRANSPORT: e.target.value,
                    });
                  }}
                  labelId="TRANSPORT"
                  label="TRANSPORT"
                >
                  <MenuItem value="TRANSPORT1">TRANSPORT 1</MenuItem>
                  <MenuItem value="TRANSPORT2">TRANSPORT 2</MenuItem>
                  <MenuItem value="TRANSPORT3">TRANSPORT 3</MenuItem>
                  <MenuItem value="TRANSPORT4">TRANSPORT 4</MenuItem>
                </Select>
              </FormControl>
            )}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Controller
            name="REJSELÆNGDE"
            control={control}
            render={({ field }) => (
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="REJSELÆNGDE">REJSELÆNGDE</InputLabel>
                <Select
                  {...field}
                  onChange={(e) => {
                    setValue("REJSELÆNGDE", e.target.value);
                    setFormData({
                      ...data,
                      REJSELÆNGDE: e.target.value,
                    });
                  }}
                  labelId="REJSELÆNGDE"
                  label="REJSELÆNGDE"
                >
                  <MenuItem value="REJSELÆNGDE1">REJSELÆNGDE 1</MenuItem>
                  <MenuItem value="REJSELÆNGDE2">REJSELÆNGDE 2</MenuItem>
                  <MenuItem value="REJSELÆNGDE3">REJSELÆNGDE 3</MenuItem>
                  <MenuItem value="REJSELÆNGDE4">REJSELÆNGDE 4</MenuItem>
                </Select>
              </FormControl>
            )}
          />
        </Grid>

        <Grid item xs={12} sm={2}>
          <MuiPickersUtilsProvider
            utils={MomentUtils}
            libInstance={moment}
            locale={"da"}
          >
            <Controller
              name="FIRSTDATE"
              control={control}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  onChange={(e) => {
                    setValue("FIRSTDATE", e._d.toString());
                    setFormData({
                      ...data,
                      FIRSTDATE: e._d.toString(),
                    });
                  }}
                  className={classes.formControl}
                  inputVariant="outlined"
                  variant="dialog"
                  hideTabs={false}
                  cancelLabel={"Cancel"}
                  okLabel={"Ok"}
                  label="FIRSTDATE"
                  // clearable
                  placeholder="DD/MM/YYYY"
                  format="DD/MM/YYYY"
                  showTodayButton
                  rightArrowIcon
                  renderDay={renderDayInPicker}
                />
              )}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        {/* <Grid item xs={12} sm={2}>
          <SingleDatePicker
            {...register("SECONDDATE")}
            date={OneDate}
            focused={focusedInput}
            onFocusChange={({ focused }) => {
              setFocusedInput(focused);
            }}
            onDateChange={(e) => {
              setOneDate(e);
              setValue("SECONDDATE", e?._d ? e._d.toString() : null);
              setFormData({
                ...data,
                SECONDDATE: e?._d ? e._d.toString() : null,
              });
            }}
            showClearDate={true}
          />
        </Grid> */}
      </Grid>

      <div style={{ width: "100%" }}>
        <button type="submit">Submit</button>
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
              FIRSTDATE: null,
              // SECONDDATE: null,
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
