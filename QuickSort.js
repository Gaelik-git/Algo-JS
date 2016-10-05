var list = [7,4,5,12,7,9,6]
function QuickSort(list){
  if(list.length<=1)return list;
  var pivot = list[0],left=[],right=[];
  for(var i = 1;i < list.length ; i++)
    {
      if (list[i]<pivot) left.push(list[i]);
      else right.push(list[i]);
    }
  return QuickSort(left).concat(pivot,QuickSort(right));
}
console.log(QuickSort(list));