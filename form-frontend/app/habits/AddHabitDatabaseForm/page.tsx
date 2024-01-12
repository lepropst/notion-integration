"use client";
import AddHabitDatabase from "@/components/Forms/AddHabitDatabase";
import { AddHabitEntryForm } from "@/components/Forms/AddHabitEntryForm";
import { useZustandFormStore } from "@/state/form";

export function Page() {
  const { habits, addDatabase } = useZustandFormStore();
  return (
    <div className="flex w-full h-full items-center justify-center content-center">
      <AddHabitDatabase habits={habits} addDatabase={addDatabase} />
    </div>
  );
}

export default Page;
