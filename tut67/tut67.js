// console.log("hello world");

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// capturing events
// 👀👀👀👀👀👀👀
// in event capturing jab ham child me click karte h to pahle(firstly) parent ka event chalega fir child ka event chalega.
// mens upper se neeche jata h.

// child.addEventListener(
//   "click",() => {
//     console.log("capture !!!! child");
// },true);

// parent.addEventListener(
//   "click",() => {
//     console.log("capture !!!! parent");
// },true);

// grandparent.addEventListener(
//   "click",() => {
//     console.log("capture !!!! grandparent");
//   },true);

// document.body.addEventListener(
//   "click",() => {
//     console.log("capture !!!! document.body");
// },true);



///// not capture

// bubbling events child se parent par jata h ya hota h .
// in my opinion jab child and parent me same evnet to child me click karne se parent ka callback autometic run ho jata h , 👉👉 to ye event bubbling h .
// to first child chalega , fir parent,fir grandparent,fir document.body
// means neeche se upper jata h. 


// 👀👀👀👀👀👀👀👀👀👀

// child.addEventListener("click", () => {
//   console.log("bubble child");
// });
// parent.addEventListener("click", () => {
//   console.log("bubble parent");
// });
// grandparent.addEventListener("click", () => {
//   console.log("bubble grandparent");
// });
// document.body.addEventListener("click", () => {
//   console.log("bubble document.body");
// });

// event delegation
// in event delegation , yaha ham parent me event apply karege but ham jese hi child me clik kare to to hamko uski current value (target mil ) jayega.

// only grandparent me hi event laga h but acess sare child hoge.
grandparent.addEventListener("click", (e) => {
  console.log(e.target);
});