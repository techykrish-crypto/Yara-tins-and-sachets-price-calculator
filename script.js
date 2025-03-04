function calculateCost() {
    let size = document.getElementById("package-size").value;
    let cost = size * 2;  // Example formula
    document.getElementById("result-box").innerHTML = "Total Cost: AED " + cost;
}