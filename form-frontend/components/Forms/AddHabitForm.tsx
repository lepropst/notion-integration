import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import { Input } from "../ui/input";

import { Button } from "../ui/button";

import { toast } from "sonner";
import { Habit } from "@/state/form";
import { addHabitEntryFormSchema } from ".";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { uniqueArray } from "@/lib/unique-zod-array";
import { PlusIcon } from "@radix-ui/react-icons";
import { useState } from "react";
export const addHabitFormSchema = z.object({
  label: z
    .string()
    .min(2, { message: "must be 2 chars" })
    .max(100, { message: "must be less than 100 chars" }),
  entries: z.array(addHabitEntryFormSchema),
});
export const habitsSchema = uniqueArray(
  (obj) => obj.label,
  z.array(addHabitFormSchema.omit({ entries: true }))
);

export const AddHabitForm = ({
  habits,
  addHabit,
}: {
  habits: Habit<any>[];
  addHabit: (
    label: string,
    entries: z.infer<typeof addHabitEntryFormSchema>[]
  ) => void;
}) => {
  const [errors, setErrors] = useState<any[]>([]);
  const form = useForm<z.infer<typeof addHabitFormSchema>>({
    resolver: zodResolver(addHabitFormSchema),
    defaultValues: {
      label: "",
      entries: [],
    },
  });

  function onSubmit(data: z.infer<typeof addHabitFormSchema>) {
    const validatedData = habitsSchema.safeParse([...habits, data]);
    if (validatedData.success) {
      addHabit(data.label, data.entries);
      form.reset();
      setErrors([]);
    } else {
      console.log(JSON.stringify({ validatedData, habits, data }, null, 2));
      setErrors([{ label: "label", error: validatedData.error }]);
    }
  }
  return (
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
              <FormMessage>
                {errors !== undefined ? (
                  <>
                    {errors.map((e, i) => (
                      <li key={`${e.label}-${i}`}>
                        <span className="flex flex-wrap">
                          {JSON.stringify(e, null, 2)}
                        </span>
                      </li>
                    ))}
                  </>
                ) : null}
              </FormMessage>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button className="text-white" type="submit" variant="link">
          <PlusIcon />
        </Button>
      </form>
    </Form>
  );
};
export default AddHabitForm;
