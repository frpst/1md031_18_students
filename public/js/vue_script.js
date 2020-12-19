/*var vm = new Vue({
    el: '#meny',
    data: {food}

});


/*var vm2 = new Vue({
    el: '#order',
    methods:{ valueReader: function(event){
	 var theArray = []
    var inputs = document.querySelectorAll("form");
    var length_input = document.getElementById("form").elements.length

    for (var i=0;i<length_input;i++){
	var svar = document.getElementById("form").elements[i];
	if (svar.type!=="radio") {
	    theArray.push(svar.value)
	}
    }
	theArray.push(document.querySelector('input[type="radio"]:checked').value);
	console.log(theArray);
	return theArray;
    }},
    
    })*/

var vm = new Vue({
    el: '#themenu',
    data: { customerDetails: [],
            food},
    methods: {
        addOrder: function (event) {
            this.customerDetails = valueReader();
            console.log(customerDetails);
        }
    }
            
        
        
    
});


    
