function getFormvalue(event) {
   event.preventDefault(); 
            
            const firstName = document.getElementById("fname").value.trim();
            const lastName = document.getElementById("lname").value.trim();
            
            if (!First name && !Last name) {
                alert("Please enter your name.");
                return;
            }
            
            alert(`${First name} ${Last name}`.trim());
        }
     

