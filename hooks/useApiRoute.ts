import { useZustandFormStore } from "@/state/form";
import { useEffect, useState } from "react";

export const useApiRoute = (route: string, id?: string) => {
  const { setDatabases, setErrors, errors } = useZustandFormStore();

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetching the api");
      const response = await fetch(route, { body: JSON.stringify({ id: id }) });
      const data = await response.json();
      console.log("Setting databases");
      setDatabases(data);
    };
    fetchData().catch((err) => setErrors(err));
  });
};
