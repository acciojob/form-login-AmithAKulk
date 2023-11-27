document.getElementById("myForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the default form submission behavior

      // Get form data
      const formData = new FormData(this);
      let result = "";

      // Construct the result string
      for (let [key, value] of formData.entries()) {
        result += key + ": " + value + "\n";
      }

      // Display the result using alert with the specified format
      alert(result);
    });