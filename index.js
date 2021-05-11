


function calculateScore() {
  var output="";
  var radioLength = 0;
  var EISum = 0;
  var SNSum = 0;
  var TFSum = 0;
  var JPSum = 0;
  var radios = document.getElementsByTagName("input");
  var value;
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].type === "radio" && radios[i].checked) {
      radioLength++;
      key = radios[i].getAttribute("key");
      value = radios[i].value;
      question = radios[i].name;
      if (key === "EI") {
        EISum = EISum + +value;
      } else if (key === "SN") {
        SNSum = SNSum + +value;
      } else if (key === "TF") {
        TFSum = TFSum + +value;
      } else {
        JPSum = JPSum + +value;
      }
    }
  }
 
  if (EISum >= 12) {
    output += "E";
  } else {
    output += "I";
  }
  if (SNSum >= 12) {
    output += "N";
  } else {
    output += "S";
  }
  if (TFSum >= 12) {
    output += "F";
  } else {
    output += "T";
  }
  if (JPSum >= 12) {
    output += "P";
  } else {
    output += "J";
  }
  console.log(EISum);
  console.log(SNSum);
  console.log(TFSum);
  console.log(JPSum);

  console.log(output);
  console.log(radioLength);

  
  if(radioLength===16){
    window.location.href = output+".html"
    }
    else{
      alert("Please respond to all statements.")
    }
    return output;
}

var app = angular.module("FYP", []);
app.controller("QuizController", ['$scope',function($scope){

}])