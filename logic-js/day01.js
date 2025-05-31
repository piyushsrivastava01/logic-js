// let Num = Number(prompt('Enter a number'));
// if(Num % 2 == 0 ) console.alert('Even');
// else console.alert('odd');


// let marks = Number(prompt('Enter a number'));
// if (marks>=90 && marks<=100)alert(' Grade: A');
// else if (marks>=80 && marks<90)alert(' Grade: B');
// else if (marks>=70 && marks<80)alert(' Grade: C');
// else if (marks>=60  && marks<70)alert(' Grade: D');
// else if (marks>=1  && marks<60)alert(' Grade: F');
// else alert('Enter Marks under 100');


// let n = Number(prompt('Enter number between 1 to 12 '));

//     switch (n) {
//         case 1:
//             console.log("January");
//             break;
//         case 2:
//             console.log("February");
//             break;
//         case 3:
//             console.log("march");
//             break;
//         case 4:
//             console.log("April");
//             break;
//         case 5:
//             console.log("May");
//             break;
//         case 6:
//             console.log("june");
//             break;
//         case 7:
//             console.log("July");
//             break;
//         case 8:
//             console.log("August");
//             break;
//         case 9:
//             console.log("September");
//             break;
//         case 10:
//             console.log("October");
//             break;
//         case 11:
//             console.log("November");
//             break;
//         case 12:
//             console.log("December");
//             break;
    
//         default:
//             console.log(" Enter number beyween 1 to 12 only");
//             break;
//     }




// let Num1 = Number(prompt('Enter First Number'));
// let Num2 = Number(prompt('Enter Second Number'));
// let Num3 = Number(prompt('Enter Third Number'));
// if(Num1 > Num2 && Num1>Num3)alert(Num1, " is Greatest value")
// if(Num2 > Num1 && Num2>Num3)alert(Num2, " is Greatest value")
// else alert(Num3, " is Greatest value");



let person = Number(prompt(
    "please Enter you identity\n" + 
    "press 1. if Civilian\n"+
    "press 2. if student"
));
let age = Number(prompt('Enter your age'))
let dis = 20;
switch (person) {
    case 1:
        if(age>=60){
           let  price = 120;
            alert('Ticket price is:'+ price)
        }
        else if (age>=13 && age<60){
           let  price = 250;
            alert('Ticket price is:'+ price)
        }
        else if (age>5 && age<=12){
           let  price = 100;
            alert('Ticket price is:'+ price)
        }
        else
            alert('You got free ticket: ')
            break;

    case 2:
        if(age>=60){
            let price = 120
            let amount = price - (price * dis/100)
            alert('Congratulation you have to pay '+ amount);
        }
        else if (age>=13 && age<60){
           let price = 250;
            let amount = price - (price *(dis/100))
            alert('Congratulation you have to pay '+ amount);
        }
        else if (age>5 && age<=12){
            let price = 100
            let amount = price - (price *(dis/100))
            alert('Congratulation you have to pay '+ amount);
        }
        else
            alert('You got free Ticket')
            break;

            
    default:
        alert('enter a valid input\n press 1 for Civilian\n press 2 for student \n And give positive age value:')
        break;
}