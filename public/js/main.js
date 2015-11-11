$(document).ready(function() {

  // Place JavaScript code here...

});

var items = [];
price = 0;
function colorchange(id)
{
	var num = parseInt(id);
	var item = document.getElementById('listID'+num);
	if(item.classList.contains('active')) {
	  item.className = "list-group-item";
	  delete items[num]
	  price = price - parseFloat(document.getElementById('link'+((num*2)+1)).text)
	  update();

	} else {
	  item.className = "list-group-item active";
	  items[num] = document.getElementById('link' + (num*2)).text
	  price = price + parseFloat(document.getElementById('link' + ((num*2)+1)).text)
	  update();
	}
}

function update() {
	document.getElementById('priceID').innerHTML = "Price: $" + Math.abs(price).toFixed(2);
	document.getElementById('price').value = price;
	document.getElementById('arr').value = JSON.stringify(items);
}