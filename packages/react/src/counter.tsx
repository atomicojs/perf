import React, { useState } from "react";
import ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";

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

customElements.define(
    "my-counter",
    reactToWebComponent(MyCounter, React, ReactDOM)
);
