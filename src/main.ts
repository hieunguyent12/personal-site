import { setupCounter } from "./counter.ts";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <p>Hieu's awesome site</p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
