// 3 parameters controlling the different levels of elements
var gest = 0;
var dist = 0;
var shad = 1;
function setActor1(){ // set the position and gesture of actor 1
	var act1 = document.getElementById('actor1');
	if(gest==0){
		act1.setAttribute('t', 'translate(94,19) rotate(-2)');
		act1.setAttribute('pose', '-11,9|-9,120|-11,99|-11,89|-11,79|-11,59|-16,34|-21,9|-6,34|-1,9|-18,79|-18,59|5,86|22,81');
	}
	else if(gest==1){
		act1.setAttribute('t', 'translate(71,19) rotate(-2)');
		act1.setAttribute('pose', '-11,9|1,114|-9,98|-9,88|-15,79|-11,59|-16,34|-21,9|-6,34|-1,9|-19,78|-19,58|4,82|18,110');
	}
	else{ //gest = 2
		act1.setAttribute('t', 'translate(71,19) rotate(-2)');
		act1.setAttribute('pose', '-11,9|13,90|-3,80|-5,60|-9,66|-8,46|14,29|-11,21|8,39|-16,29|-13,68|-12,52|10,64|25,80');
		//act1.setAttribute('t', 'translate(71,19) rotate(-2)');
		//act1.setAttribute('pose', '-11,9|-1,114|-11,99|-11,89|-11,79|-11,59|-16,34|-21,9|-6,34|-1,9|-18,79|-18,59|-6,79|13,83');
	}
	if(dist==0){ // set position
		if(gest==2)
			act1.setAttribute('t', 'translate(94,1) rotate(-2)');
		else
			act1.setAttribute('t', 'translate(94,19) rotate(-2)');
	}
	else if(dist==1){
		if(gest==2)
			act1.setAttribute('t', 'translate(81,1) rotate(-2)');
		else
			act1.setAttribute('t', 'translate(81,19) rotate(-2)');
	}
	else{
		if(gest==2)
			act1.setAttribute('t', 'translate(71,1) rotate(-2)');
		else
			act1.setAttribute('t', 'translate(71,19) rotate(-2)');
	}
}
function setActor2(){ // set the position and gesture of actor 2
	var act2 = document.getElementById('actor2');
	if(gest==0){
		act2.setAttribute('t', 'translate(159,15)');
		act2.setAttribute('pose', '28,1|30,109|28,91|28,81|28,74|28,54|18,34|18,4|33,29|38,4|23,71|18,51|38,71|38,51');
	}
	else if(gest==1){
		act2.setAttribute('t', 'translate(159,15)');
		act2.setAttribute('pose', '28,1|23,108|28,91|28,81|28,74|28,54|18,34|18,4|33,29|38,4|23,71|18,51|38,71|38,51');
	}
	else{
		act2.setAttribute('t', 'translate(159,15)');
		act2.setAttribute('pose', '28,1|18,107|28,91|28,81|28,74|28,54|18,34|18,4|33,29|38,4|19,73|19,53|38,71|38,51');
	}
	if(dist==0){ //set position
		act2.setAttribute('t', 'translate(129,18)');
	}
	else if(dist==1){
		act2.setAttribute('t', 'translate(146,17) rotate(-1)');
	}
	else{
		act2.setAttribute('t', 'translate(169,18) rotate(-1)');
	}
}
function render(){
	//alert("inside!!");
	var cols = document.getElementsByClassName('cmx-scene');
  		// change the shading of the comic panel based on shading score
  		for(i=0; i<cols.length; i++) {
  			if(shad==1){
  				cols[i].style.backgroundColor = '#cccccc';
  			}
  			else if(shad==2){
  				cols[i].style.backgroundColor = '#999999';
  			}
 			else{
 				cols[i].style.backgroundColor = '#ffffff';
  			}
  			//alert("inside!!");
  		}
}