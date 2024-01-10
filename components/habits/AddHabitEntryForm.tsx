import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Input } from "../ui/input";
import { Calendar } from "../ui/calendar";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "@radix-ui/react-icons";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { format } from "date-fns";
import { Button } from "../ui/button";
import { useZustandFormStore } from "@/state/form";
import { List } from "./List";

export const addHabitEntryFormSchema = z.object({
  value: z.string().min(2).max(50),
  date: z.date(),
});
export function AddHabitEntryForm() {
  const { habits } = useZustandFormStore();
  const form = useForm<z.infer<typeof addHabitEntryFormSchema>>({
    resolver: zodResolver(addHabitEntryFormSchema),
    defaultValues: {
      value: "",
      date: new Date(),
    },
  });

  function onSubmit(values: z.infer<typeof addHabitEntryFormSchema>) {
    console.log(values);
  }

  return (
    <div className="flex flex-col gap-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} {...form}>
          <FormField
            control={form.control}
            name="value"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Label</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel htmlFor="date">Date</FormLabel>
                <FormControl>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormControl>
              </FormItem>
            )}
          />
          <button
            type="submit"
            className="border rounded-sm border-gray-600 py-.5 px-2"
          >
            Add
          </button>
        </form>
      </Form>
      <List data={habits} />
    </div>
  );
}
