/*function MenuItem(name,kcal,gluten,lactose,image) {
    this.image = function(){
	return image}
    this.name = function(){
	return "name"}
    this.name = function(){
	return name};
    this.kcal = function(){
	return kcal};
    this.gluten = function(){
	return gluten};
    this.lactose = function() {
	return lactose;}}
*/


/*function valueReader() {
    var theArray = []
    var inputs = document.querySelectorAll("form");
    var length_input = document.getElementById("form").elements.length

    for (var i=0;i<length_input;i++){
	var svar = document.getElementById("form").elements[i];
	if (svar.type!=="radio") {
	    theArray.push(x.value)
	}
    }
    theArray.push(document.querySelector('input[type="radio"]:checked').val());
    

    return theArray
}
    */
	
/*function valueReader(event) {
	var name= document.getElementById('firstlastname').value
	var email=document.getElementById('email').value
	var payment=document.getElementById('payment').value
	var sex =document.querySelector('input[name="gender"]:checked').value

	var theArray= [name,email,payment,sex];
	console.log(theArray)

	return theArray;*/

function valueReader () {
    var detailArray = [];
    var inputs = document.querySelectorAll("form");
    var length_input = document.getElementById("form").elements.length;

    for (var i=0;i<length_input;i++){
	var svar = document.getElementById("form").elements[i];
	if (svar.type!=="radio") {
	    detailArray.push(svar.value);
	}
    }
	detailArray.push(document.querySelector('input[type="radio"]:checked').value);
    return detailArray;
}
    

/*function tester() {
    console.log('yoyoyoyoyo');
    return array;
}*/
	




