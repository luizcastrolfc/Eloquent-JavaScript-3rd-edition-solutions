// 02.3 Chess Board

let str = "",
    i,j;
for(i = 0; i < 8; i++) {
	for(j = 0; j < 8; j++) {
    	if(((j+i)%2) == 0)
          str += " ";
      	else
          str += "#";
    }
  str += "\n";
}
console.log(str);
