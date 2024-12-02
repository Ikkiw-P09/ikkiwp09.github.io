document.getElementById("myBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    document.getElementById("promptpaypopup").style.display = "block";
  });

  document.getElementById("closeBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    document.getElementById("promptpaypopup").style.display = "none";
  });