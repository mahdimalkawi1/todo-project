var userName = prompt("please enter your name");
var userGender = prompt("pealse enter your gender");
var userAge = prompt("please enter your Age");

function userPronunce (userGender) {
    var pronounce;
    if (userGender == "male"){
        pronounce ="Mr";
    } else if( userGender == "female"){
        pronounce ="Mrs";

    } else {
        pronounce = null;
    }
        
    return pronounce;
    };
    while(userAge <=0 ) {
        if (userAge <= 0){
            alert("please enter a valid age!");
            userAge = prompt("Please Enter Your Age");
        }
    };
    var welcomeMsg = confirm ("Do You Want to Skip The Welcoming Page ?");

        if (welcomeMsg ==false && userPronunce(userGender) !== null) {
            console.log("first one")
            alert ("We are pleased to have you " + userPronunce(userGender)+'.'+userName) 

        } else if (welcomeMsg==false && userPronunce(userGender) == null){ 
            console.log("second one")
            alert ("We are pleased to have you "+ userName)
            
        }



        // var q1 =prompt("Do you consider this good ? (Y/N)");
        // var q2 =prompt("Did you like the welcomingMsg? (Y/N)");
        // var q3 =prompt("Should we delete it ? (Y/N)");
        
        
        // var myArr = [q1, q2, q3];
        
        // for (let i=0; i<=myArr.length-1;i++) {
        //     if ( myArr[i] ==0){
        //         myArr[i]="invalid";
        //         alert ("invalid");
               
            
                  
        //     }
        //  console.log(myArr[i]);
        // };
        'use strict';

        const userAnswers =[];
        function askQuestion(question){
            return prompt(question);
        }
        function answersSaver(arr){
          let questionOne =askQuestion("Do you consider this good ? (Y/N)");
          let questionTwo =askQuestion("Did you like the welcomingMsg? (Y/N)");
          let questionThree =askQuestion("Should we delete it ? (Y/N)");
          userAnswers.push(questionOne,questionTwo,questionThree)
        }
        function answerValidater(arr){
         for (let i=0 ; i<arr.length ; i++ ){
            if (arr[i] == ""){
                arr[i]="invalid";
            }
         }
        }
function answersPrinter(arr){
    for (let i=0 ; i<arr.length ; i++ ){
        console.log(arr[i])
    }

}


answersSaver(userAnswers);
answerValidater(userAnswers);
answersPrinter(userAnswers);