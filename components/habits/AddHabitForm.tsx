import { Habit, useZustandFormStore } from "@/state/form";
import { List } from "./List";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import * as z from "zod";
import { addHabitEntryFormSchema } from "./AddHabitEntryForm";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { Separator } from "../ui/separator";
import { useMemo } from "react";
import { useForm } from "react-hook-form";

export const addHabitFormSchema = z.object({
  label: z
    .string()
    .min(2, { message: "must be 2 chars" })
    .max(100, { message: "must be less than 100 chars" }),
  entries: z.array(addHabitEntryFormSchema),
});

export function AddHabitForm() {
  const form = useForm<z.infer<typeof addHabitFormSchema>>({
    resolver: zodResolver(addHabitFormSchema),
    defaultValues: {
      label: "",
      entries: [],
    },
  });
  const { addHabit, habits } = useZustandFormStore();
  const memoedHabits = useMemo(() => habits, [habits]);
  function onSubmit(data: z.infer<typeof addHabitFormSchema>) {
    addHabit(data.label, data.entries);
  }

  return (
    <div className="relative flex flex-col gap-2 p-8 text-white w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-2 border border-gray-600 p-2 rounded-md w-full"
        >
          <FormLabel>
            <h1 className="font-bold text-lg underline">Add Habit</h1>
          </FormLabel>
          <FormField
            name="label"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>{field.name}</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            className="text-black"
            type="submit"
            variant="outline"
            onClick={() =>
              toast("Event has been created", {
                description: "Sunday, December 03, 2023 at 9:00 AM",
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo"),
                },
              })
            }
          >
            Show Toast
          </Button>
        </form>
      </Form>
      <List
        data={memoedHabits}
        render={(item: Habit) => (
          <li key={item.label}>
            <span className="flex">
              <h4 className="font-bold">{item.label}</h4>&emsp;length:{" "}
              {item.habit.length}
            </span>
            <Separator />
          </li>
        )}
      />
    </div>
  );
}
