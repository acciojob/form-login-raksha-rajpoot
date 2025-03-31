function getFormvalue(event) {
   event.preventDefault(); 
            
            const firstName = document.getElementById("fname").value.trim();
            const lastName = document.getElementById("lname").value.trim();
            
            if (!Firstname && !Lastname) {
                alert("Please enter your name.");
                return;
            }
            
            alert(`${Firstname} ${Lastname}`.trim());
        }
     

