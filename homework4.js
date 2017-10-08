//Triangle Star
const stars=function(st) {
	if (a===0) {
		return "";
	};
	return "*" + stars(a-1);
};

const Forspace=function(sta){
	if (b===0){
		return "";
	};

	return space(b-1) + " ";
}

const Trianglestars=function(n) {
	 const looper=function(c){
		if (c===0) {
			return "";
		};
		console.log(space(n-c) + stars((2*c)-1))
		return looper(c-1) 
};
 return looper(n);
};
console.log(TriangleStars(4));




//Exponential
const Exp=function(base,n){
	if(n===1) {
		return base;
	};
	return base*Exp(base,n-1); 
};
console.log(Exp(3,3));


//Reverse

const Reverse = function (str){
	const length = str.length;
const Rev = function (str , num){
	if (num <= 0) {return ""}

	return str[num -1] + Rev(str ,num - 1);
}
return Rev(str, length);
}

console.log(Reverse("abcde"));

//Checkboard

const  Check= function(v) {
	const y = function(v, w) {
	      if(v === 0) {
                 return "";
        }
	      if(w === 0) {
		 return " *" + y(v - 1, w);
        }	
	return "* "+y(v-1, w);	
};
        const f = function(v, line) {	
	      if(line>v ) {
		 return "";
        }
	return y(v, line%2) + "\n" + f(v, line + 1);
};
              if(v<=0) {
                 return ""; 
}
	return f(v,1);
};

Check(5);