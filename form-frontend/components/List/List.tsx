import { Habit } from "@/state/form";

export function List({
  data,
  render,
}: {
  data: Habit[];
  render?: (item: Habit) => JSX.Element;
}) {
  return (
    <ul>
      {data.map((habitEntry) =>
        render ? (
          render(habitEntry)
        ) : (
          <li key={habitEntry.label}>
            {habitEntry.label} {habitEntry.habit.length}
          </li>
        )
      )}
    </ul>
  );
}
