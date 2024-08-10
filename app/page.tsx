import TestButton from "@/test/Button";
import { format } from "date-fns";


async function getCurrentTime() {
  return format(new Date(), "HH:mm:ss");
}

export default async function Page() {
  const value = await getCurrentTime();

  return (
    <>
      {value}
      <TestButton />
    </>
  );
}