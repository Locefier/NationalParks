 function validate()
 {
    var name = document.getElementById('name').value;
    var lname = document.getElementById('lnamev').value;
     var email = document.getElementById('email').value;
     

   var vname = /^[A-Za-z]{3,20}$/;
   var lname = /^[A-Za-z]{3,20}$/;
   var vemail = /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.][a-z]{3,6}$/;


    if(vname.test(name))
    {
         document.getElementById('namev').innerHTML = "";
     }
 
 
     
     else
      {
         document.getElementById('namev').innerHTML = "Please Fill the Correct Name";
 
     }
 
 
     if(lname.test(lname))
     {
          document.getElementById('lnamev').innerHTML = "";
      }
      else
       {
          document.getElementById('lnamev').innerHTML = "Please Fill the Correct Name";
      
      }
  
 
     if(vemail.test(email))
     {         document.getElementById('emailv').innerHTML = "";
        
 }
 else
     {
         document.getElementById('emailv').innerHTML = "Please Fill the Corret Name";
      
     }


if(name!="" && lname!="" && emailv!=""){
    alert('succeccfully');
}

 }

// ADD TO CART
    function addtocart() {
        $('#thankyouModal').modal('show');
    };
    function email(){
        alert('welcome')
    }