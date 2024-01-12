import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import * as z from "zod";
import { useZustandFormStore } from "@/state/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
export const addHabitEntryFormSchema = z.object({
  value: z.number(),
  label: z.string().min(2).max(50),
  date: z.date(),
});

export const AddHabitEntryForm = () => {
  const { habits } = useZustandFormStore();
  const form = useForm<z.infer<typeof addHabitEntryFormSchema>>({
    resolver: zodResolver(addHabitEntryFormSchema),
    defaultValues: {
      value: 0,
      label: "",
      date: new Date(),
    },
  });

  function onSubmit(values: z.infer<typeof addHabitEntryFormSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        {...form}
        className="p-8 gap-8 flex flex-col w-80 bg-slate-800 rounded"
      >
        <FormField
          control={form.control}
          name="value"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Value</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="label"
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
                          "w-60 pl-3 text-left font-normal text-accent-foreground"
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
                      disabled={(date: Date) => date < new Date()}
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
  );
};
