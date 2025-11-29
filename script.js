document.addEventListener("DOMContentLoaded", () => {
    
    const questionBlocks = document.querySelectorAll(".question-block");

    questionBlocks.forEach(block => {
        
        const question = block.querySelector(".question");
        const answer = block.querySelector(".answer");
        const arrow = document.createElement("span");

        arrow.textContent = "▼";
        arrow.style.marginLeft = "10px";
        arrow.style.transition = "transform 0.3s ease";
        question.appendChild(arrow);

        
        answer.style.maxHeight = "0";
        answer.style.overflow = "hidden";
        answer.style.transition = "max-height 0.5s ease, opacity 0.5s ease, transform 0.5s ease";
        answer.style.opacity = "0";
        answer.style.transform = "translateY(-20px)";

        
        question.addEventListener("click", () => {
            const isOpen = answer.style.maxHeight !== "0px";
            if (isOpen) {
                // Close answer
                answer.style.maxHeight = "0";
                answer.style.opacity = "0";
                answer.style.transform = "translateY(-20px)";
                arrow.style.transform = "rotate(0deg)";
            } else {
                // Open answer
                answer.style.maxHeight = answer.scrollHeight + "px";
                answer.style.opacity = "1";
                answer.style.transform = "translateY(0)";
                arrow.style.transform = "rotate(180deg)";
            }
        });
    });
});
