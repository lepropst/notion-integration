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

export const databaseSchema = z.object({ name: z.string().min(2).max(10000) });
export const databaseUniqueSchema = uniqueArray(
  (obj) => obj.name,
  z.array(databaseSchema)
);

export const AddHabitDatabase = ({
  habits,
  addDatabase,
}: {
  habits: Habit<any>[];
  addDatabase: (label: string) => void;
}) => {
  const [errors, setErrors] = useState<any[]>([]);
  const form = useForm<z.infer<typeof databaseSchema>>({
    resolver: zodResolver(databaseSchema),
    defaultValues: {
      name: "",
    },
  });

  function onSubmit(data: z.infer<typeof databaseSchema>) {
    const validatedData = databaseUniqueSchema.safeParse([...habits, data]);
    if (validatedData.success) {
      addDatabase(data.name);
      form.reset();
      setErrors([]);
    } else {
      console.log(JSON.stringify({ validatedData, habits, data }, null, 2));
      setErrors([{ label: "name", error: validatedData.error }]);
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-2 border border-gray-600 p-2 rounded-md w-full"
      >
        <FormLabel>
          <h1 className="font-bold text-lg underline">Add Database</h1>
        </FormLabel>
        <FormField
          name="name"
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
export default AddHabitDatabase;
