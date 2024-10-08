import { c, useProp, css } from "atomico";

export const Counter = c(
    () => {
        let [count, setCount] = useProp<number>("count");
        return (
            <host shadowDom>
                <button onclick={() => setCount(count - 1)}>-</button>
                <span>{count}</span>
                <button onclick={() => setCount(count + 1)}>+</button>
            </host>
        );
    },
    {
        props: { count: { type: Number, value: 0 } },
        styles: css`
            * {
                font-size: 200%;
            }

            span {
                width: 4rem;
                display: inline-block;
                text-align: center;
            }

            button {
                width: 4rem;
                height: 4rem;
                border: none;
                border-radius: 10px;
                background-color: seagreen;
                color: white;
            }
        `,
    }
);

customElements.define("my-counter", Counter);
