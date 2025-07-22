// src/pages/CalculatorPage.tsx

import type { ChangeEvent } from "react";
import Header from "../components/Header";
import Nav    from "../components/Nav";
import Footer from "../components/Footer";
import Main   from "../components/Main";
import useCalculator from "../hooks/useCalculator";
import "./ProjectPage.css";

export default function CalculatorPage() {
  const {
    numOne, setNumOne,
    numTwo, setNumTwo,
    result,
    compute,
    clear,
  } = useCalculator();

  return (
    <>
      <Header />
      <div id="container">
        <Nav />
        <Main className="calculator">
          <h2>Calculator Project</h2>

          <div className="calc-inputs">
            <label>
              First Number
              <input
                type="number"
                value={numOne}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setNumOne(e.target.value === "" ? "" : Number(e.target.value))
                }
              />
            </label>
            <label>
              Second Number
              <input
                type="number"
                value={numTwo}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setNumTwo(e.target.value === "" ? "" : Number(e.target.value))
                }
              />
            </label>
          </div>

          <div className="calc-buttons">
            <button onClick={() => compute("add")}>+</button>
            <button onClick={() => compute("sub")}>−</button>
            <button onClick={() => compute("mult")}>×</button>
            <button onClick={() => compute("div")}>÷</button>
            <button onClick={() => compute("pow")}>^</button>
            <button onClick={clear}>Clear</button>
          </div>

          <div
            id="output"
            className="calc-output"
            style={{ color: typeof result === "number" && result < 0 ? "red" : "black" }}
          >
            {result !== "" ? result : "Result will appear here"}
          </div>
        </Main>
      </div>
      <Footer />
    </>
  );
}
