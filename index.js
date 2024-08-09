        //RegExp - Form Validation 



        document.getElementById("register").onsubmit = function() {
            let phoneInput = document.getElementById ("phone").value;
            let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/;
            let ValidationResult = phoneRe.test(phoneInput);
            // console.log (ValidationResult);
            // return false;
               
                if (ValidationResult === false){
                   return false;
                };
                return true;
            };
             
            