let count = 0;

function increament() {
    count++;
    console.log(count);
    document.getElementById("h1Count").innerText = count;
}

function reset() {
    count = 0;
    console.log(count);
    document.getElementById("h1Count").innerText = count;
}