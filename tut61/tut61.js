console.log("Parent child sibling childnode children.");
const root = document.getRootNode();
console.log(root);

// (root)
//    |
// <html>
const childOfRoot = root.childNodes;
console.log(childOfRoot[0]);

const childNodeOfHtml = childOfRoot[0].childNodes;
console.log(childNodeOfHtml);//NodeList(3) [head, text, body]

console.log(childNodeOfHtml[0]);
console.log(childNodeOfHtml[1]);
console.log(childNodeOfHtml[2]);

// in head section.
console.log("===================");
// console.log(childNodeOfHtml[0]);
let head = childNodeOfHtml[0];
console.log(head.childNodes);//null
console.log(head.children);//null

// children gives only nodse of type element.
// childNodes give all type of nodes.

Array.from(head.children).forEach((item)=>{
    console.log(item,item.innerText);//
});

// -----------------------------.

// select h2 and go to its parent and apply color.

const h2 = document.querySelector("h2");
console.log(h2.parentNode);
let div = h2.parentNode;
div.style.color = "red";
div.style.backgroundColor = "yellow";


// next sinbling of h2.
console.log(h2.nextSibling.nextSibling);

const head1 = document.head;
console.log(head);
