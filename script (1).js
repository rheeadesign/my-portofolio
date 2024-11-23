// Function to add a new recommendation
function addRecommendation() {
    showPopup(true);
    // Get the message of the new recommendation
    let recommendation = document.getElementById("new_recommendation");
  
    // If the user has left a recommendation, display a pop-up
    if (recommendation.value != null && recommendation.value.trim() != "") {
      console.log("New recommendation added");
  
      // Call showPopup to display the success message
      showPopup(true);
  
      // Create a new 'recommendation' element and set its value to the user's message
      var element = document.createElement("div");
      element.setAttribute("class", "recommendation");
      element.innerHTML = "<span>&#8220;</span>" + recommendation.value + "<span>&#8221;</span>";
  
      // Add this element to the end of the list of recommendations
      document.getElementById("all_recommendations").appendChild(element);
  
      // Reset the value of the textarea
      recommendation.value = "";
    }
  }
  
  // Function to show or hide the popup message
  function showPopup(bool) {
    if (bool) {
      document.getElementById('popup').style.visibility = 'visible';
    } else {
      document.getElementById('popup').style.visibility = 'hidden';
    }
  }
  
  // Add onClick event listener to the recommendation button
  document.getElementById("recommend_btn").onclick = addRecommendation;
  
