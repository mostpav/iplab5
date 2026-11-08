function getUserData(callback) {
    setTimeout(() => {
        const user = {
            name: "Іван",
            age: 25
        };

        callback(user);
    }, 2000);
}

console.log("Запит даних користувача...");

getUserData((data) => {
    console.log("Отримані дані:");
    console.log(data);
});

console.log("Виконуються інші операції...");