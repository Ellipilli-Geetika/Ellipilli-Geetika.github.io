//console.log(document.getElementById("title"));
//console.log(document instanceof HTMLDocument);
document.addEventListener("DOMContentLoaded",
function (event){
  document.querySelector("button")
     .addEventListener("click", function () {

       $ajaxUtils
        .sendGetRequest("data/name.json",

        function (res) {
          var message = res.firstName + " " + res.lastName;
          if (res.likesChineseFood) {
            message += " likes Chinese Food";

          }
          else {
            message += "doesn't like Chinese food";
          }
          message += " and uses ";
          message += res.numberOfDisplays;
          message += " displays for coding.";
          document.querySelector("#content")
              .innerHtml = "<h2>Hello " + message + "!</h2>";
        
        });


    });

 }
);


//document.querySelector("body").addEventListener("mousemove",
    //   function (event) {
    //     console.log("x: " + event.clientX);
      //   console.log("y: " + event.clientY);

       //}

     //);

//});
