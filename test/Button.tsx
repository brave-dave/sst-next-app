"use client";

import { useState } from "react";
import { revalidate } from "./actions";

export default function TestButton() {
  const [message, setMessage] = useState("")
  const clickHandler = async () => {
    await revalidate()
    setMessage("Ok, refresh the page now!")
  }
  return <><button onClick={clickHandler}>Revalidate Home Page</button><div>{message}</div></> ;
}
