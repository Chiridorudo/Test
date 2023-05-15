    // function numberOneTriangle(n) {
    //     if (n < 1 || n > 10) {
    //     console.log("Input must be an integer between 1 and 10.");
    //     return;
    //     }
    //     for (let i = 1; i <= n; i++) {
    //     console.log("1".repeat(i));
    //     }
    // }
    // numberOneTriangle(5);
    function numberOneTriangle() {
            const n = parseInt(document.getElementById("n").value);
            if (n < 1 || n > 10) {
            document.getElementById("triangle").textContent = "Input must be an integer between 1 and 10.";
            return;
            }
            let output = "";
            for (let i = 1; i <= n; i++) {
            output += "1".repeat(i) + "\n";
            }
            document.getElementById("triangle").textContent = output;
        }