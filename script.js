const list1 = [];
const list2 = [];
const mergedList = [];
const list1Input = document.querySelector(".list1-input");
const list1El = document.querySelector(".list1");
const list2Input = document.querySelector(".list2-input");
const list2El = document.querySelector(".list2");
const combine = document.querySelector(".combine");

function addList1Item(event) {
  event.preventDefault();
  const newList1Item = document.createElement("li");
  list1.push(list1Input.value);
  newList1Item.innerText = list1Input.value;
  list1El.appendChild(newList1Item);
  if(list1Input.value === "") {
    return null;
  }
}

function addList2Item(event) {
  event.preventDefault();
  const newList2Item = document.createElement("li");
  list2.push(list2Input.value);
  newList2Item.innerText = list2Input.value;
  list2El.appendChild(newList2Item);
  if(list2Input.value === "") {
    return null;
  }
}

function listMerge() {
  let lowerlist1 = list1.map(item => item.toLowerCase());
  let lowerlist2 = list2.map(item => item.toLowerCase());
  
  lowerlist1.concat(lowerlist2).forEach(item => {
    if (mergedList.indexOf(item) == -1)
      mergedList.push(item);
  });
  return(mergedList);  
}
console.log(listMerge(list1, list2));


list1Input.addEventListener("keydown", function(e) {
  if (e.keyCode === 13) {
    addList1Item(e);
    e.currentTarget.value = "";
  }
});

list2Input.addEventListener("keydown", function(e) {
  if (e.keyCode === 13) {
    addList2Item(e);
    e.currentTarget.value = "";
  }
});

combine.addEventListener("click", listMerge);

