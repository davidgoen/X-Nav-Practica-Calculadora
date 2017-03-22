var int1;
var int2;
var total;
var ejec;
var segundoval=false;
var primero=true;

function suma(p1,p2){
	return (parseFloat(p1) + parseFloat(p2)).toFixed(2);
}

function resta(p1,p2){
	return (parseFloat(p1) - parseFloat(p2)).toFixed(2);
}

function multi(p1,p2){
	return (parseFloat(p1) * parseFloat(p2)).toFixed(2);
}

function divis(p1,p2){
	return (parseFloat(p1) / parseFloat(p2)).toFixed(2);
}

function raiz(valor){
	return Math.sqrt(valor).toFixed(2);
}

function cuadrado(valor){
	return Math.pow(valor, 2).toFixed(2);
}

function porcentaje(valor){
	return (valor*0.01);
}


function transformarevent(p1){
	if(p1.type=="keypress"){
		return p1.key;
	}else{
		return p1.toString();
	}
}

function esEspecial(event){
	if((event=='+' || event=='-' || event=='*' || event=='/') || (transformarevent(event)=='+' || transformarevent(event)=='-'
				|| transformarevent(event)=='*' || transformarevent(event)=='/')){
		funcionMat = transformarevent(event);
		return true;
	}else{
		return false;
	}
}

function resolver(){
	if(ejec=='+'){
		int1=suma(int1,int2);
	}else if(ejec=='-'){
		int1=resta(int1,int2);
	}else if(ejec=='/'){
		int1=divis(int1,int2);
	}else if(ejec=='*'){
		int1=multi(int1,int2);
	}
}

function invertirPrimero(){
	if(primero){
		primero=false;
	}
}


function tecla(event){
	if(event=="C"){
		int1=undefined;
		int2=undefined;
		total=undefined;
		ejec=undefined;
		segundoval=false;
		primero=true;
		$("#pantallahijo span").text("");
	}else if(transformarevent(event)=='sqrt'){
		int1=raiz(int1);
		$("#pantallahijo span").text(int1);
	}else if(transformarevent(event)=='cuadrado'){
		int1=cuadrado(int1);
		$("#pantallahijo span").text(int1);
	}else if(transformarevent(event)=='%'){
		int1=porcentaje(int1);
		$("#pantallahijo span").text(int1);
	}else if(transformarevent(event)=='=' || transformarevent(event)=="Enter"){
		resolver();
		$("#pantallahijo span").text(int1);
		int2=undefined;
	}else if(esEspecial(event)){
			if(primero){
			int1=transformarevent(event);
			invertirPrimero();
		}else{
			ejec=transformarevent(event);
			segundoval=true;
		}
		$("#pantallahijo span").append(transformarevent(event));
	}else{
		if(!segundoval){
			if(int1==undefined){
				int1=transformarevent(event);
			}else{
				int1=int1+transformarevent(event);
			}
			$("#pantallahijo span").text(int1);
			invertirPrimero();
		}else{
			if(int2==undefined){
				int2=transformarevent(event);
			}else{
				int2=int2+transformarevent(event);
			}
			$("#pantallahijo span").append(transformarevent(event));
		}
	}
}