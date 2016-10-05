var list = [7,4,5,12,7,9,6];

function bubbleSort (Tab){
  
 var len = Tab.length;
  
  for(var i = 0; i < len; i++){
    for(var j = 0 ; j<len-1 - i ; j++){
      if(Tab[j]>Tab[j+1]){
        let temp = Tab[j+1];
        Tab[j+1] = Tab[j];
        Tab[j] = temp;
      }
    }
  }
  
  return Tab;
}

console.log(bubbleSort(list));

