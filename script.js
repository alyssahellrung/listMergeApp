var list1 = ["apples", "Bananas", "rice", "crackers", "milk"];
var list2 = ["kiwi", "milk", "Bread", "bananas", "Rice"];
var mergedList = [];
const item = document.getElementById("item");

function listMerge(list1, list2) {
  var lowerlist1 = list1.map(item => item.toLowerCase());
  var lowerlist2 = list2.map(item => item.toLowerCase());
  
  lowerlist1.concat(lowerlist2).forEach(item => {
    if (mergedList.indexOf(item) == -1)
      mergedList.push(item);
  });
  return(mergedList);  
}
console.log(listMerge(list1, list2));

function addToList(item) {
   list.push(item);
}

function keydownHandler(event) {
  if (event.keyCode === 13) {
  console.log("Enter key pressed");
    addToList(item);
  }
}

window.addEventListener("keydown", keydownHandler, false);

const combine = document.querySelector("#combine");
combine.addEventListener("click", listMerge, false);

