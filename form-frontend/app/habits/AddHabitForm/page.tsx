"use client";
import { Habit, useZustandFormStore } from "@/state/form";

import { useMemo } from "react";
import { useForm } from "react-hook-form";
import AddHabitForm from "@/components/Forms/AddHabitForm";
import { List } from "@/components/List";
import { Separator } from "@/components/ui/separator";

export function Page() {
  const { addHabit, habits } = useZustandFormStore();
  const memoedHabits = useMemo(() => habits, [habits]);

  return (
    <div className="relative flex flex-col gap-2 p-8 text-white w-full">
      <AddHabitForm addHabit={addHabit} habits={habits} />
      <List
        data={memoedHabits}
        render={(item: Habit<any>) => (
          <li key={item.label}>
            <span className="flex">
              <h4 className="font-bold">{item.label}</h4>&emsp;length:{" "}
              {item.data.length}
            </span>
            <Separator />
          </li>
        )}
      />
    </div>
  );
}

export default Page;
