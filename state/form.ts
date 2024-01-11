import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type {} from "@redux-devtools/extension"; // required for devtools typing

export interface Habit {
  label: string;
  habit: { date: Date; value: string | number | boolean }[];
}
export interface FormState {
  habits: Habit[];
  errors: string[];
  databases: string[];
  setHabit: (
    habit: string,
    entries: { date: Date; value: string | number | boolean }[]
  ) => void;
  addHabit: (
    habit: string,
    entries: { date: Date; value: string | number | boolean }[]
  ) => void;
  removeHabit: (habit: string) => void;
  addDatabases: (databaseId: string) => void;
  setDatabases: (databases: string[]) => void;
  setErrors: (errors: string[] | string) => void;
}

export const useZustandFormStore = create<FormState>()(
  devtools(
    persist(
      (set) => ({
        habits: [],
        errors: [],
        databases: [],
        addDatabases: (databaseId: string) =>
          set((state) => ({ databases: [...state.databases, databaseId] })),
        setDatabases: (databases: string[]) =>
          set((state) => ({ databases: databases })),
        setErrors: (errors: string[] | string) =>
          set((state) =>
            Array.isArray(errors)
              ? { errors: errors }
              : { errors: [...state.errors, errors] }
          ),
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
