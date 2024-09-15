"use client";
import { useState } from "react";

export default function DashboardPage() {
  const [name, setName] = useState("");
  console.log("server side dashboard");

  return (
    <div>
      <input onChange={(e) => setName(e.target.value)} />
      <div>hello {name} !</div>
    </div>
  );
}
