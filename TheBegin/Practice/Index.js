console.log('Hello World!');

function add(a, b) {
    return a + b;
}

console.log(add(5, 2));

console.log(process.argv);

var args = process.argv.slice(2);

console.log("Adding two numbers: ", add(parseInt(args[0]), parseInt(args[1])));