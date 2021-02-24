// var list1 = ["apples", "Bananas", "rice", "crackers", "milk"];
// var list2 = ["kiwi", "milk", "Bread", "bananas", "Rice"];
var list1 = [];
var list2 = [];
var mergedList = [];
const item1 = document.getElementById("item");
const item2 = document.getElementById("item2");

function listMerge(list1, list2) {
  var lowerlist1 = list1.map(item => item.toLowerCase());
  var lowerlist2 = list2.map(item => item.toLowerCase());
  
  lowerlist1.concat(lowerlist2).forEach(item => {
    if (mergedList.indexOf(item) == -1)
      mergedList.push(item);
  });
  return(mergedList);  
}
// console.log(listMerge(list1, list2));

function addToList(e) {
  e.preventDefault();
  
  list1.push(item);
  console.log(list1);
}

function keydownHandler(event) {
  if (event.keyCode === 13) {
  console.log("Enter key pressed");
  }
  addToList();
}

window.addEventListener("keydown", keydownHandler);

const combine = document.querySelector("#combine");
combine.addEventListener("click", listMerge);

