"use client";

import { useEffect, useState } from "react";

function Branches() {
  const [state, setState] = useState("hero");
  useEffect(() => {
    setState("NOt a hero");
  }, []);
  return <div>{state}</div>;
}

export default Branches;
