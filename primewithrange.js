let x = 1;
let y = 30;
let prime;
for(i=1;i<=30;i++){
        let prime = 0;
  for(j=2;j<i;j++){
    if(i%j==0){
         prime = 1;
    }
 }
 if(i>1 && prime==0){
    console.log(i)
 }
}