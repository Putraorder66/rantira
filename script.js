document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("transactionForm");
    const resultDiv = document.getElementById("transactionResult");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = form.name.value;
        const email = form.email.value;
        const destination = form.destination.value;
        const date = form.date.value;
        const amount = form.amount.value;

        const transactionDetails = `
            <h3>Transaction Details</h3>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Destination: ${destination}</p>
            <p>Date: ${date}</p>
            <p>Amount: ${amount}</p>
        `;

        resultDiv.innerHTML = transactionDetails;
    });
});
