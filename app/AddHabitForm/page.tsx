import { AddHabitForm } from "@/components/habits/AddHabitForm";
import { Button } from "@/components/ui/button";

import { useRouter } from "next/router";

export default function AddHabitFormPage() {
  // const router = useRouter();

  return (
    <div className="flex relative">
      {/* <Button variant={"link"} onClick={() => router.back()}>
        Back
      </Button> */}
      <AddHabitForm />
    </div>
  );
}
