import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type {} from "@redux-devtools/extension"; // required for devtools typing

export interface Habit {
  label: string;
  habit: { date: Date; value: string | number | boolean }[];
}
export interface FormState {
  habits: Habit[];
  setHabit: (
    habit: string,
    entries: { date: Date; value: string | number | boolean }[]
  ) => void;
  addHabit: (
    habit: string,
    entries: { date: Date; value: string | number | boolean }[]
  ) => void;
  removeHabit: (habit: string) => void;
}

export const useZustandFormStore = create<FormState>()(
  devtools(
    persist(
      (set) => ({
        habits: [],
        setHabit: (habit, value) =>
          set((state) => ({ habits: { ...state.habits, [habit]: value } })),
        addHabit: (habit, entries) =>
          set((state) => ({
            habits: [...state.habits, { label: habit, habit: entries }],
          })),
        removeHabit: (habit: string) =>
          set((state) => ({
            habits: state.habits.filter((item) => item.label !== habit),
          })),
      }),

      {
        name: "form-storage",
      }
    )
  )
);
