
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

//switch case

const month = 3
switch (month) {
    case 1:
    console.log("JAN");
        break;
    case 2:
    console.log("FEB");
        break;
    case 3:
    console.log("MAR");
        break;
    case 4:
    console.log("APR");
        break;

    default:
    console.log("default case match");
        break; // use to break the control flow
        
}

// If there is no break statement added before the default case, default will also be executed. 