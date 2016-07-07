function getProductList() {
    return [{
        picture: "../assets/images/products/product-1.jpg",
        name: 'Limited Price',
        price: 299,
        onSale: true
    }, {
        picture: "../assets/images/products/product-2.jpg",
        name: 'Amazing product',
        price: 299,
        onSale: false
    }, {
        picture: "../assets/images/products/product-3.jpg",
        name: 'New product',
        price: 299,
        onSale: false
    }];
}

document.addEventListener('DOMContentLoaded',function (){
   var list = getProductList();
   var produs=`<div class="product">
             <a href="#" class="add-to-card">Add to card</a>
             <a href ="product.html">
                 <img src="picture">
             </a>

             <div class="thumb-info">
                 <a href="#">
                     <h4> name</h4>

                     <h3>price</h3>
                 </a>
             </div>
         </div>
     </div>`;
  var location = document.querySelector('#product-list .row');
   for(var i=0;i<list.length;i++)
   {
     var element = document.createElement('div');
     element.className = 'col-xs-12 col-sm-6 col-md-3 product-box';
     var produsHTML = produs.replace('picture',list[i].picture).replace('name',list[i].name).replace('price',list[i].price);
     element.innerHTML = produsHTML;

     location.appendChild(element);
   }
 }
)
