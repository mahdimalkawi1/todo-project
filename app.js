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
            alert ("We are pleased to have you " + userPronunce(userGender)+'.'+userName)
        } else if (weclomeMsg ==false && userPronunce(userGender) == null){ 
            alert ("We are pleased to have you "+ userName)
        }


        var q1 =prompt("Do you consider this good ? (Y/N)");
        var q2 =prompt("Did you like the welcomingMsg? (Y/N)");
        var q3 =prompt("Should we delete it ? (Y/N)");
        
        
        var myArr = [q1, q2, q3];
        
        for (let i=0; i<=myArr.length-1;i++) {
            if ( myArr[i] ==0){
                myArr[i]="invalid";
                alert ("invalid");
               
            
                  
            }
         console.log(myArr[i]);
        };