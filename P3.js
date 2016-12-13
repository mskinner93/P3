var numLettuce = 0;
var numTomato = 0;
var numBroccoli = 0;
var numPepper = 0;
var numCarrot = 0;
var numPotato = 0;

var lettucePrice = 0;
var tomatoPrice = 0;
var broccoliPrice = 0;
var pepperPrice = 0;
var carrotPrice = 0;
var potatoPrice = 0;

var users = [];

function register()
{
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var address =document.getElementById("address").value;
  var zip = document.getElementById("zip").value;
  var email = document.getElementById("email").value;

  if (fname == "" || lname == "" || address == "" || zip == "" || email == "")
  {
     window.alert("Please fill out all of the fields")
     return false;
  }

     for(var i=0; i < users.length; i++)
     {
         if(users[i].email == email)
          {
             window.alert("The email " + email + " has already been registered")
             return false;
          }
      }
        var myuser = new person(fname, lname, address, zip, email);
        function person(ufirst, ulast, uaddress, uzip, uemail)
          {
            this.firstName = ufirst;
            this.lastName = ulast;
            this.address = uaddress;
            this.zip = uzip;
            this.email = uemail;
          }
            users.push(myuser);
            window.alert("Thank you "+ myuser.firstName + " you have been registered!")

 }

function addLettuce()
{

    numLettuce = document.getElementById("lettuce").value;
    window.alert(numLettuce + " lettuce heads have been added to your shopping cart!!");
    setCookie("lettuceCookie", numLettuce);

}

function addTomato()
{

    numTomato = document.getElementById("tomato").value;
    window.alert(numTomato + " tomatoes have been added to your shopping cart!");
    setCookie("tomatoCookie", numTomato);

}

function addBroccoli()
{

    numBroccoli = document.getElementById("broccoli").value;
    window.alert(numBroccoli + " broccoli heads have been added to your shopping cart!");
    setCookie("broccoliCookie", numBroccoli);

}

function addPepper()
{

    numPepper = document.getElementById("pepper").value;
    window.alert(numPepper + " peppers have been added to your shopping cart!");
    setCookie("pepperCookie", numPepper);

}

function addCarrot()
{

    numCarrot = document.getElementById("carrot").value;
    window.alert(numCarrot + " carrots have been added to your shopping cart!");
    setCookie("carrotCookie", numCarrot);

}

function addPotato()
{

    numPotato = document.getElementById("potato").value;
    window.alert(numPotato + " potatos have been added to your shopping cart!");
    setCookie("potatoCookie", numPotato);

}

function checkout()
{
     var totalLettuce = getCookie("lettuceCookie");
     var lettucePrice = totalLettuce * 2.00;
     if(totalLettuce == 0)
     {
       //var close = document.createElement("li");
      // close.innerHTML = "";
       //var list = document.getElementById("shoppingList");
       //list.appendChild(close);
     }
     else if(totalLettuce == 1)
     {

       var close = document.createElement("li");
       close.innerHTML = totalLettuce + " lettuce head X $2.00 = " + "$" + lettucePrice.toFixed(2);
       var list = document.getElementById("shoppingList");
       list.appendChild(close);
        //document.getElementById("lettuceCount").innerHTML = totalLettuce + " lettuce head X $2.00 = " + "$" + lettucePrice + ".00";
     }
     else
     {
       var close = document.createElement("li");
       close.innerHTML = totalLettuce + " lettuce heads X $2.00 = " + "$" + lettucePrice.toFixed(2);
       var list = document.getElementById("shoppingList");
       list.appendChild(close);
        //document.getElementById("lettuceCount").innerHTML = totalLettuce + " lettuce heads X $2.00 = " + "$" + lettucePrice + ".00";
     }



     var totalTomato = getCookie("tomatoCookie");
     var tomatoPrice = totalTomato * 0.50;
     if(totalTomato == 0)
     {

     }
     else if(totalTomato == 1)
     {
       var close = document.createElement("li");
       close.innerHTML = totalTomato + " tomato X $0.50 = " + "$" + tomatoPrice.toFixed(2);
       var list = document.getElementById("shoppingList");
       list.appendChild(close);
        //document.getElementById("tomatoCount").innerHTML = totalTomato + " tomato X $0.50 = " + "$" + tomatoPrice.toPrecision(2);
     }
     else
     {
       var close = document.createElement("li");
       close.innerHTML =  totalTomato + " tomatoes X $0.50 = " + "$" + tomatoPrice.toFixed(2);
       var list = document.getElementById("shoppingList");
       list.appendChild(close);
        //document.getElementById("tomatoCount").innerHTML = totalTomato + " tomatoes X $0.50 = " + "$" + tomatoPrice.toPrecision(3);
     }


     var totalBroccoli = getCookie("broccoliCookie");
     var broccoliPrice = totalBroccoli * 0.75;
     if(totalBroccoli == 0)
     {

     }
     else if(totalBroccoli == 1)
     {
       var close = document.createElement("li");
       close.innerHTML =  totalBroccoli + " broccoli head X $0.75 = " + "$" + broccoliPrice.toFixed(2);
       var list = document.getElementById("shoppingList");
       list.appendChild(close);
        //document.getElementById("broccoliCount").innerHTML = totalBroccoli + " broccoli head X $0.75 = " + "$" + broccoliPrice.toPrecision(2);
     }
     else
     {
       var close = document.createElement("li");
       close.innerHTML =  totalBroccoli + " broccoli heads X $0.75 = " + "$" + broccoliPrice.toFixed(2);
       var list = document.getElementById("shoppingList");
       list.appendChild(close);
        //document.getElementById("broccoliCount").innerHTML = totalBroccoli + " broccoli heads X $0.75 = " + "$" + broccoliPrice.toPrecision(3);
     }



     var totalPepper = getCookie("pepperCookie");
     var pepperPrice = totalPepper * 0.05;
     if (totalPepper == 0)
     {

     }
     else if(totalPepper == 1)
     {
       var close = document.createElement("li");
       close.innerHTML =  totalPepper + " pepper X $0.05 = " + "$" + pepperPrice.toFixed(2);
       var list = document.getElementById("shoppingList");
       list.appendChild(close);
        //document.getElementById("pepperCount").innerHTML = totalPepper + " pepper X $0.05 = " + "$" + pepperPrice.toPrecision(1);
     }
     else
     {
       var close = document.createElement("li");
       close.innerHTML =  totalPepper + " peppers X $0.05 = " + "$" + pepperPrice.toFixed(2);
       var list = document.getElementById("shoppingList");
       list.appendChild(close);
        //document.getElementById("pepperCount").innerHTML = totalPepper + " peppers X $0.05 = " + "$" + pepperPrice.toPrecision(2);
     }


     var totalCarrot = getCookie("carrotCookie");
     var carrotPrice = totalCarrot * 0.10;
     if(totalCarrot == 0)
     {

     }
     else if(totalCarrot == 1)
     {
       var close = document.createElement("li");
       close.innerHTML = totalCarrot + " carrot X $0.10 = " + "$" + carrotPrice.toFixed(2);
       var list = document.getElementById("shoppingList");
       list.appendChild(close);
        //document.getElementById("carrotCount").innerHTML = totalCarrot + " carrot X $0.10 = " + "$" + carrotPrice.toPrecision(2);
     }
     else
     {
       var close = document.createElement("li");
       close.innerHTML = totalCarrot + " carrots X $0.10 = " + "$" + carrotPrice.toFixed(2);
       var list = document.getElementById("shoppingList");
       list.appendChild(close);
        //document.getElementById("carrotCount").innerHTML = totalCarrot + " carrots X $0.10 = " + "$" + carrotPrice.toPrecision(2);
     }


     var totalPotato = getCookie("potatoCookie");
     var potatoPrice = totalPotato * 1.25;
     if(totalPotato == 0)
     {

     }
     else if(totalPotato == 1)
     {
       var close = document.createElement("li");
       close.innerHTML = totalPotato + " potato X $1.25 = " + "$" + potatoPrice.toFixed(2);
       var list = document.getElementById("shoppingList");
       list.appendChild(close);
        //document.getElementById("potatoCount").innerHTML = totalPotato + " potato X $1.25 = " + "$" + potatoPrice.toPrecision(3);
     }
     else
     {
       var close = document.createElement("li");
       close.innerHTML = totalPotato + " potatos X $1.25 = " + "$" + potatoPrice.toFixed(2);
       var list = document.getElementById("shoppingList");
       list.appendChild(close);
        //document.getElementById("potatoCount").innerHTML = totalPotato + " potatos X $1.25 = " + "$" + potatoPrice.toPrecision(3);
     }

     var totalOfEverything = lettucePrice + tomatoPrice + broccoliPrice + pepperPrice + carrotPrice + potatoPrice;
     document.getElementById("totalPrice").innerHTML = "Total: $" + totalOfEverything.toFixed(2);
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
