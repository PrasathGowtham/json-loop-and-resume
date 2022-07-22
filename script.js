var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
for(i=0;i<result.length;i++){
console.log(result[i].name+" = "+result[i].capital);}

for(let i in result){
var name1=result[i].name+" = "+result[i].population;
console.log(name1);}


for(let m of result){
    var name2="";
     name2 = m.name+"="+m.area;
     console.log(name2);
   }
  }