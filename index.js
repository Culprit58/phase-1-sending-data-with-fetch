// Add your code here
function submitData(name, email) {
  // The element where we will display results
  const resultsContainer =
    document.getElementById("results") || createResultsContainer();

  // Return the fetch chain
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ name: name, email: email }),
  })
    .then((response) => response.json()) // Parse JSON from response
    .then((data) => {
      // Display the new id in the DOM
      const idPara = document.createElement("p");
      idPara.textContent = `New User ID: ${data.id}`;
      resultsContainer.appendChild(idPara);
    })
    .catch((error) => {
      // Display error message in the DOM
      const errPara = document.createElement("p");
      errPara.textContent = `Error: ${error.message}`;
      resultsContainer.appendChild(errPara);
    });
}

// Helper function to create a results container if it doesn't exist
function createResultsContainer() {
  const div = document.createElement("div");
  div.id = "results";
  document.body.appendChild(div);
  return div;
}
