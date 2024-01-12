import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type {} from "@redux-devtools/extension"; // required for devtools typing
import { Client } from "@notionhq/client";

export interface Habit<T> {
  label: string;
  data: { date: Date; value: T }[];
}
export interface FormState {
  habits: Habit<any>[];
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
  addDatabase: (databaseName: string) => void;
  addDatabaseId: (databaseId: string) => void;
  setDatabases: (databases: string[]) => void;
  setErrors: (errors: string[] | string) => void;
  setBasePages: () => void;
}
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const useZustandFormStore = create<FormState>()(
  devtools(
    persist(
      (set) => ({
        habits: [],
        errors: [],
        databases: [],
        basePages: [],
        setBasePages: () => {
          const workspace = notion.search({
            filter: { property: "object", value: "page" },
          });
          return set((state) => ({ ...state, basePages: workspace }));
        },
        addDatabaseId: (databaseId: string) =>
          set((state) => ({ databases: [...state.databases, databaseId] })),
        addDatabase: (databaseName: string) => {
          const workspace = notion.search({
            filter: { property: "object", value: "page" },
          });
          console.log(JSON.stringify(workspace, null, 2));
          // const response = notion.databases.create({ parent: workspace });
          // const databaseId = response.data.id;
          // console.log(databaseId);
          // return set((state) => ({
          //   databases: [...state.databases, databaseId],
          // }));
        },
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
            habits: [...state.habits, { label: habit, data: entries }],
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
