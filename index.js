const counter = document.querySelector(".counter")
const result = document.querySelector(".result")
let count = 1

counter.addEventListener("click", () => {
    count += 1
    result.innerHTML = count
})