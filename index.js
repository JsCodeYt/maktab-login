window.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.querySelector(".login-btn")
    const loginInp = document.querySelectorAll(".input")
    const loginTwo = document.querySelector(".login-btnl")
    const loginInputButton = document.querySelector(".login-in")
    const login = document.querySelector(".login")
    loginButton.addEventListener("click", (event) => {
        login.style.top = "150px"
        login.style.marginLeft = "500px"
    })
    loginInputButton.addEventListener('click', (event) => {
        login.style.top = "-100%"
    })

    loginTwo.addEventListener("click", () => {
        login.style.top = "150px"
        login.style.marginLeft = "500px"
    })
    loginInp.forEach((item, id) => {
        item.addEventListener("change", (e) => {
            const userData = e.target.value
            console.log(`User data ${userData}`)
        })
    })
})