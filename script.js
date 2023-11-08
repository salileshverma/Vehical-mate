
document.addEventListener("DOMContentLoaded", function() {
    const bookButton = document.querySelectorAll(".book-button");
    const bookServiceButton = document.getElementById("book-service");
    
    bookButton.forEach(function(button) {
        button.addEventListener("click", function() {
            const serviceName = button.getAttribute("data-service");
            document.getElementById("service").value = serviceName;
        });
    });
    
    bookServiceButton.addEventListener("click", function(event) {
        event.preventDefault();
        const selectedService = document.getElementById("service").value;
        const selectedDate = document.getElementById("date").value;
        const selectedTime = document.getElementById("time").value;
      
       
        console.log("Booking: Service - " + selectedService + ", Date - " + selectedDate + ", Time - " + selectedTime);
    });
});
