var tab = [2,3,3,7,8,10];
var target = 16;

var subsetTab = new Array(tab.length);

for(var i =0; i<=tab.length;i++)
{
    subsetTab[i]=new Array(target+1);
    subsetTab[i][0]=true;
}



//first line:

for(var i=1;i<=target;i++)
  {
   subsetTab[0][i]=  i==tab[0];
  }


for(var j = 1;j<=tab.length;j++)
  {
    for(var i=1;i<=target;i++)
      {
        subsetTab[j][i] = (tab[j]==i) || subsetTab[j-1][i-tab[j]] || subsetTab[j-1][i];
        if (subsetTab[j][i]==undefined) subsetTab[j][i]=false;
      }
  }

if(subsetTab[tab.length-1][target]) console.log('it works');
else console.log('it does not work');

var result=[0],x=tab.length-1,y=target;
if(subsetTab[tab.length-1][target]){
  
  while(x!==0 && y!==0){
  
    if(subsetTab[x-1][y])x--;
    else {result.push(tab[x]);y=y-tab[x];}
  
  }
  
  console.log(result);
}