console.log("Початок");

setTimeout(() => {
    console.log("setTimeout 1000ms");
}, 1000);

Promise.resolve().then(() => {
    console.log("Promise resolved");
});

console.log("Кінець");