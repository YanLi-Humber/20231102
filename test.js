function myFun(){

    document.getElementById("demo").innerHTML = "Hello JavaScript!";
    // document.getElementById("demo").style.display = "block";
    document.getElementById("demo").style.color = "red";
    //  document.getElementById("demo").src = "images/nature.jpg";
    
    }


//   var num3 = 45;
//   let num4 = 10;


  function calc2(num3, num4) {

    return num3 - num4;
  }


  let car = ["Toyota", "Fiat", "Volvo", "Jeep"];

const person = {

        firstName: "John",
        height: 175,
        age: function(){

          return 2023 - this.yearOfBirth;
        }
}
  function validateForm(){

        let fname = document.forms["frm1"]["fname"].value;
         if (fname ==""){
          alert("The first Name should not be empty!");
          return false;
         }
  }


  // document.getElementById("test").onclick = function(){

  //   document.getElementsByName("p")[0].innerHTML = "Hello JavaScript!";

  // }

  // const elem = document.getElementsByClassName("intro");

  // document.getElementById("test1").innerHTML = elem[0].innerHTML;

  // const elem1 = document.getElementsByName("p");
  // elem1[1].style.color = "red";


 