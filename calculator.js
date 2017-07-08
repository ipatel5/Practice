

function Calculator(){
	if(arguments.length==1){
		this.n=arguments[0];
	}
	else{
		this.n=0;
	}
}

Calculator.prototype.add = function(x){
	this.n= parseInt(`${this.n}`)+ x ;
}
Calculator.prototype.subtract = function(x){
	this.n= parseInt(`${this.n}`)- x ;
}
Calculator.prototype.multiply = function(x){
	this.n= parseInt(`${this.n}`)* x ;
}
Calculator.prototype.divide = function(x){
	this.n= parseInt(`${this.n}`)/ x ;
}
Calculator.prototype.print = function(){
	console.log(this.n)
}
Calculator.prototype.clear = function(){
	this.n= 0;
}
const calculator_v1  = new Calculator(2);
calculator_v1 .multiply(3)
calculator_v1 .add(10)
calculator_v1 .divide(2)
calculator_v1 .subtract(4)
calculator_v1 .print()
calculator_v1 .clear()
calculator_v1 .print()

const calculator_v2 = new Calculator();
calculator_v2.multiply(3)
calculator_v2.add(10)
calculator_v2.divide(2)
calculator_v2.subtract(4)
calculator_v2.print()
calculator_v2.clear()
calculator_v2.print()