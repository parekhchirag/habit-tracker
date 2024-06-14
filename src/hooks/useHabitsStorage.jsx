import React, { useState, useEffect } from "react";
const KEY = "habits";
const INITIAL_VALUE = [];

/**
 * habits format
 * [{ id: 1, habitText: 'Drink 8 glass of water'}, {...}, ...]
 */

const useHabitsStorage = () => {
  // saves habits in state
  const [habits, setHabits] = useState(() => {
    const value = localStorage.getItem(KEY);
    if (value) {
      return JSON.parse(value);
    }
    return INITIAL_VALUE;
  });

  const addHabits = (newHabit) => {
    const newHabitId = habits.length ? habits[habits.length - 1].id + 1 : 1;
    localStorage.setItem(
      KEY,
      JSON.stringify([...habits, { id: newHabitId, habitText: newHabit }])
    );
    window.dispatchEvent(new Event("storage"));
  };

  const isHabitPresent = (habitName) => {
    return habits.find((h) => h.habitText === habitName);
  };

  // to hook the listeners for storage change
  useEffect(() => {
    const storageChangeListener = () => {
      const value = localStorage.getItem(KEY);
      if (value) {
        setHabits(JSON.parse(value));
      } else {
        localStorage.setItem(KEY, JSON.stringify(INITIAL_VALUE));
      }
    };
    window.addEventListener("storage", storageChangeListener);
    window.dispatchEvent(new Event("storage"));
    return () => window.removeEventListener("storage", storageChangeListener);
  }, []);

  return [habits, addHabits, isHabitPresent];
};

export default useHabitsStorage;
