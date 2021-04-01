let helloWorld = "Hello World!";
console.log(helloWorld);

const obj = { width: 10, height: 15};
const area = obj.width * obj.height;
console.log(area);

interface User {
    name: string;
    id: number;
}

const user: User = {
    name: "Hayes",
    id: 0,
}

const otherUser: User = {
    name: "Lionel",
    id: 1,
}

let completed: boolean = false;
let decimal: number = 6;
// let big: bigint = 100n
let color: string = "blue";