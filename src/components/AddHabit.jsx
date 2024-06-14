import React, { useState, useContext } from "react";
import useHabitsStorage from "../hooks/useHabitsStorage";
import { ErrorContext } from "../contexts/ErrorContext";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const AddHabit = () => {
  const [newHabitName, setNewhabitName] = useState("");
  const [habits, addHabits, isHabitPresent] = useHabitsStorage();
  const { setError } = useContext(ErrorContext);

  const handleOnAddHabitClick = () => {
    if (habits.length === 4) {
      setError("You can add only 4 habits.");
    } else if (isHabitPresent(newHabitName)) {
      setError(`Habit ${newHabitName} already present.`);
    } else {
      addHabits(newHabitName);
      setNewhabitName("");
    }
  };
  const handleOnHabitNameChange = (e) => {
    setNewhabitName(e.target.value);
  };
  return (
    <div>
      <Box
        component="section"
        sx={{
          display: "flex",
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          value={newHabitName}
          onChange={handleOnHabitNameChange}
          label="Habit"
          variant="outlined"
        />
        <Button
          disabled={!newHabitName}
          onClick={handleOnAddHabitClick}
          variant="outlined"
        >
          Add habit
        </Button>
      </Box>
    </div>
  );
};

export default AddHabit;
