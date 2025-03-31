function getFormvalue(event) {
   event.preventDefault(); 
            
            const firstName = document.getElementById("fname").value.trim();
            const lastName = document.getElementById("lname").value.trim();
            
            if (!firstName && !lastName) {
                alert("Please enter your name.");
                return;
            }
            
            alert(`${firstName} ${lastName}`.trim());
        }
        
        document.getElementById("nameForm").addEventListener("submit", getFormvalue);
