import define from "preact-custom-element";
import { useState } from "preact/hooks";

function MyCounter() {
    const [state, setState] = useState(0);

    const styles = `.my-counter * {
          font-size: 200%;
        }

        .my-counter span {
          width: 4rem;
          display: inline-block;
          text-align: center;
        }

        .my-counter button {
          width: 4rem;
          height: 4rem;
          border: none;
          border-radius: 10px;
          background-color: seagreen;
          color: white;
        }`;

    return (
        <div className="my-counter">
            <style>{styles}</style>
            <button onClick={() => setState(state - 1)}>-</button>
            <span>{state}</span>
            <button onClick={() => setState(state + 1)}>+</button>
        </div>
    );
}

define(MyCounter, "my-counter", [], { shadow: true });
