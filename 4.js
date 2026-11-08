async function getUserDataAsync() {
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

async function main() {
    console.log("Запит даних користувача...");

    const data = await getUserDataAsync();

    console.log("Отримані дані:");
    console.log(data);

    console.log("Виконання завершено.");
}

main();