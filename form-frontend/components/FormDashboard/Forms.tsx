import Link from "next/link";
import { List } from "./habits/List";
import { useZustandFormStore } from "@/state/form";
import {
  NavigationMenuContent,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";

import { ListItem } from "./ui/list-item";
import { useApiRoute } from "@/hooks/useApiRoute";
import ReactFlow, { Background, Controls } from "reactflow";
import { useState } from "react";
const components = [
  {
    title: "Add Habit Entry Form",
    href: "/AddHabitEntryForm",
    description: "Add an entry to a habit",
  },
  {
    title: "Add Habit Form",
    href: "/AddHabitForm",
    description: "Add a habit to the database",
  },
];
export default function Forms() {
  const {
    habits,
    addDatabaseId: addDatabases,
    setDatabases,
    databases,
    setErrors,
  } = useZustandFormStore();
  const errors = useApiRoute("/api/databases", "fakeid");
  console.log(errors);
  return (
    <div className="flex border-2 border-red-100 h-full w-full">
      <div className="w-1/4 border border-white p-2">
        <List data={habits} />
      </div>
      <div className="w-full"></div>
    </div>
  );
}
