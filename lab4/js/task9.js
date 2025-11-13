let waitingForClick = false;

const buttonTask9 = document.getElementById("task-9");
buttonTask9.addEventListener("click", () => {
    waitingForClick = true;
});
document.addEventListener("click", (e) => {
    if (e.target.tagName === "P" && waitingForClick) {
        waitingForClick = false;

        const tooltipText = prompt("Введіть текст підказки:");
        if (tooltipText) {
            const wrapper = document.createElement("span");
            wrapper.classList.add("tooltip-wrapper");
            wrapper.setAttribute("data-tooltip", tooltipText);

            const icon = document.createElement("img");
            icon.classList.add("tooltip-icon");
            icon.src = "../../img/tip.svg";
            icon.alt = "Tooltip Icon";

            wrapper.appendChild(icon);
            e.target.appendChild(wrapper);
        }
    }    
});
