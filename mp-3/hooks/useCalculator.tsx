import { useState } from "react";

export default function useCalculator() {
  const [numOne, setNumOne] = useState<number | "">("");
  const [numTwo, setNumTwo] = useState<number | "">("");
  const [result, setResult] = useState<number | "">("");

  const clear = () => {
    setNumOne("");
    setNumTwo("");
    setResult("");
  };

  const compute = (op: "add"|"sub"|"mult"|"div"|"pow") => {
    const a = Number(numOne);
    const b = Number(numTwo);
    let res: number;

    switch (op) {
      case "add":  res = a + b; break;
      case "sub":  res = a - b; break;
      case "mult": res = a * b; break;
      case "div":  res = a / b; break;
      case "pow":
        res = 1;
        for (let i = 0; i < b; i++) res *= a;
        break;
    }
    setResult(res);
  };

  return {
    numOne, setNumOne,
    numTwo, setNumTwo,
    result,
    compute,
    clear,
  };
}
