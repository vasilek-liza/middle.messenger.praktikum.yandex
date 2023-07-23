import Block from "./Block";

export function renderDOM(block: Block, selector = "#app") {
    const root = document.querySelector(selector);
    root!.innerHTML = "";
    root!.appendChild(block.getContent() as Node);

    return root
}
