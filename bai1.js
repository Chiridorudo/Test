function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function sumOfPrimes() {
    const a = parseInt(document.getElementById("a").value);
    const b = parseInt(document.getElementById("b").value);
    let sum = 0;
    for (let i = a; i <= b; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    document.getElementById("result").innerHTML = `The sum of primes between ${a} and ${b} is ${sum}`;
}
