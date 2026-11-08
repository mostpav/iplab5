function getUserDataPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const user = {
                name: "Іван",
                age: 25
            };

            resolve(user);
        }, 2000);
    });
}

console.log("Запит даних користувача...");

getUserDataPromise().then((data) => {
    console.log("Отримані дані:");
    console.log(data);
});

console.log("Виконуються інші операції...");