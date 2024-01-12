import Link from "next/link";

const links: { id: string; link: string; label: string }[] = [
  {
    id: "addEntry",
    label: "Add Habit Entry",
    link: "/habits/AddHabitEntryForm",
  },
  //   { id: "delete", label: "Delete Habit", link: "/habits/DeleteHabitForm" },
  { id: "addHabit", label: "Add Habit", link: "/habits/AddHabitForm" },
  {
    id: "addHabitDatabase",
    label: "Add Database",
    link: "/habits/AddHabitDatabaseForm",
  },
];
export function Page() {
  return (
    <div className="flex flex-col gap-8">
      <div className="p-8 gap-2">
        <h1 className="font-bold">Forms</h1>
        <ul className="rounded-md border-2 border-gray-500 bg-slate-800 w-fit p-2">
          {links.map((link) => (
            <li key={link.id} className="hover:underline font-extralight p-2">
              <Link href={link.link}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Page;
