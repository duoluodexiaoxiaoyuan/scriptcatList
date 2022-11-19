var mergeTwoLists = function(list1, list2) {
  let list = []
  if(list1 == undefined || list1 == null) {
    list1 = ''
  }
  if(list2 == undefined || list2 == null) {
    list2 = ''
  }

  list.push(...list1)
  list.push(...list2)
  return list.sort()
};
console.log(mergeTwoLists([1,2,4],[1,3,4]));