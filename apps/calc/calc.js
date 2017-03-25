define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
		this.resultNormal = 0;
		this.operatorString = "";
		this.currentOperator = "";
		this.prevResult = 0;
		this.waitNumber = false;
		this.opcode = -1;
		this.showOperator = true;
		
	};


	Model.prototype.contentsActiveChange = function(event){

	};


	Model.prototype.dengyuClick = function(event){
	//debugger;
		if(this.opcode === 1){
			this.prevResult += this.currentOperator;
		}
		else if(this.opcode === 2){
			this.prevResult -= this.currentOperator;
		}
		else if(this.opcode === 3){
			this.prevResult *= this.currentOperator;
		}
		else if(this.opcode === 4){
			if(this.currentOperator !== 0)
				this.prevResult /= this.currentOperator;
		}
		this.operatorString = "";
		this.showOperator = false;
		this.refreshNormalResult();
	};
	
	Model.prototype.refreshNormalResult = function(event){
		this.getElementByXid("normalBds").innerHTML = this.operatorString;
		if(this.showOperator)
			this.getElementByXid("calcResultNormal").innerHTML = this.currentOperator;
		else
			this.getElementByXid("calcResultNormal").innerHTML = this.prevResult;
		
		//alert(this.currentOperator);
	};

	Model.prototype.xiaoshudianClick = function(event){
		if(this.currentOperator.length >0 && this.currentOperator.indexOf(".") < 0 ){
			this.currentOperator += ".";
			this.refreshNormalResult();
		}
	};
	
	Model.prototype.addCurrentOperator = function(op){
		if(this.currentOperator === "0"){
			this.currentOperator = op;
		}
		else{
			this.currentOperator += op.toString();
		}
		this.waitNumber = false;
		this.showOperator = true;
		
		this.refreshNormalResult();
		
	};

	Model.prototype.num0Click = function(event){
		this.addCurrentOperator(0);
	};

	Model.prototype.zhengfuhaoClick = function(event){
		if(this.currentOperator.length >0 ){
			if( this.currentOperator.indexOf("-") === 0  )
				this.currentOperator = this.currentOperator.substring(1);
			else
				this.currentOperator = "-" + this.currentOperator;
			this.refreshNormalResult();
		}
	};
	
	Model.prototype.operatorClicks = function(op,opcode){
		var init = false;
		if(this.opcode == -1 ){
				this.prevResult = this.currentOperator;
				init = true;
		}
		if( !this.waitNumber ){
			this.operatorString += this.currentOperator + op;
			
			this.waitNumber = true;
			//if( this.opcode != opcode ){
				if(!init)
				{
					if(opcode === 1){
						this.prevResult += this.currentOperator;
					}
					else if(opcode === 2){
						this.prevResult -= this.currentOperator;
					}
					else if(opcode === 3){
						this.prevResult *= this.currentOperator;
					}
					else if(opcode === 4){
						if(this.currentOperator !== 0)
							this.prevResult /= this.currentOperator;
					}
					this.showOperator = false;
				}
				this.opcode = opcode;
			//}
			this.currentOperator = "0";
			this.refreshNormalResult();
		}
	};

	Model.prototype.jiafaClick = function(event){
		this.operatorClicks("+",1);	
	};

	Model.prototype.num3Click = function(event){
		this.addCurrentOperator(3);
	};

	Model.prototype.num2Click = function(event){
		this.addCurrentOperator(2);
	};

	Model.prototype.num1Click = function(event){
		this.addCurrentOperator(1);
	};

	Model.prototype.jianfaClick = function(event){
		this.operatorClicks("-",2);
	};

	Model.prototype.num6Click = function(event){
		this.addCurrentOperator(6);
	};

	Model.prototype.num5Click = function(event){
		this.addCurrentOperator(5);
	};

	Model.prototype.num4Click = function(event){
		this.addCurrentOperator(4);
	};

	Model.prototype.chengfaClick = function(event){
		this.operatorClicks("*",3);
	};

	Model.prototype.num9Click = function(event){
		this.addCurrentOperator(9);
	};

	Model.prototype.num8Click = function(event){
		this.addCurrentOperator(8);
	};

	Model.prototype.num7Click = function(event){
		this.addCurrentOperator(7);
	};

	Model.prototype.chufaClick = function(event){
		this.operatorClicks("/",4);
	};

	Model.prototype.deleteallClick = function(event){

	};

	Model.prototype.clearzeroClick = function(event){

	};

	Model.prototype.clearClick = function(event){
		this.currentOperator = "0";
		this.waitNumber = false;
		this.opcode == -1 ;
		this.prevResult = 0;
		this.operatorString = "";
		this.refreshNormalResult();
	};

	Model.prototype.daoshuClick = function(event){
		this.currentOperator = 1 / this.currentOperator;
	};

	Model.prototype.pingfangClick = function(event){
		this.currentOperator =  this.currentOperator * this.currentOperator;
	};

	Model.prototype.kaifangClick = function(event){
		this.currentOperator =  Math.sqrt( this.currentOperator );
	};

	Model.prototype.zhenchuClick = function(event){

	};

	return Model;
});