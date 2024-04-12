function calculate() {

// Taking/Retrieves the Input of petrol price per liter and number of liters purchased...

    var petrolPrice = parseFloat(document.getElementById("petrolPrice").value); // For Petrol price...
    var liters = parseFloat(document.getElementById("liters").value); // For Liters

    var totalAmount = petrolPrice * liters; // Calculates the total amount...

    document.getElementById("totalAmount").textContent = totalAmount.toFixed(2); // Updates the total amount display...
}