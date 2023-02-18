let user = {
    name: "John",
    age: 35,
    isAdmin: true,
    cityOfResidence: "Russia"
}

delete user.cityOfResidence;

let info = prompt('Какую информацию хотите узнать о пользователе?')
info = alert(`${user}`)