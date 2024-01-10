import Forms from "@/components/Forms";

export default async function Home() {
  const response = await fetch("/api/databases");
  console.log(response);
  return <Forms />;
}
