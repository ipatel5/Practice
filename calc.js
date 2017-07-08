

function Calc(){
	if(arguments.length==1){
		this.n=arguments[0];
	}
	else{
		this.n=0;
	}
}



Calc.prototype.plus = function(x){
	this.n= parseInt(`${this.n}`)+ x ;
}

Calc.prototype.minus = function(x){
	this.n= parseInt(`${this.n}`)- x ;
}

Calc.prototype.multiply = function(x){
	this.n= parseInt(`${this.n}`)* x ;
}

Calc.prototype.divide = function(x){
	this.n= parseInt(`${this.n}`)/ x ;
}

Calc.prototype.print = function(){
	console.log(this.n)
}

Calc.prototype.clear = function(){
	this.n= 0;
}

const c = new Calc(2);
c.multiply(3);
c.plus(10);
c.divide(2);
c.minus(4);
c.print(); 
c.clear();
c.print();

const c2 = new Calc();
c2.multiply(3);
c2.plus(10);
c2.divide(2);
c2.minus(4);
c2.print(); 
c2.clear();
c2.print();