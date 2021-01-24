var list1 = ["apples", "Bananas", "rice", "crackers", "milk"];
var list2 = ["kiwi", "milk", "Bread", "bananas", "Rice"];
var mergedList = [];

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
