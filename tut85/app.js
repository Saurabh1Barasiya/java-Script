console.log("Import export statement");
// if hame import ya export karna h to hamko
// current js file ko link karte time html file me type = "module" set karna hota h.

import { firstName} from "./utils/firstname.js";
import {secondName} from "./utils/secoundname.js";



// default ke case me dono way se import kar sakte h.
// import {myData} from './utils/person.js';
import myData from './utils/person.js';


console.log("current page");
console.log(firstName);
console.log(secondName);

const obj = new myData("Saurabh", 25);
obj.show();
