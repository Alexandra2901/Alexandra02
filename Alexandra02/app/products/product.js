document.addEventListener('DOMContentLoaded', function() {
    var products = getProductList();

    var productTemplate = `<div class="row">
            <div class="col-sm-6">
                <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                    <!-- Indicators -->
                    <ol class="carousel-indicators">
                        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                    </ol>

                    <!-- Wrapper for slides -->
                    <div class="carousel-inner" role="listbox">
                        <div class="item active">
                            <img src="sliderPicture0" alt="product1">

                            <div class="carousel-caption">
                                Slide 1
                            </div>
                        </div>
                        <div class="item">
                            <img src="sliderPicture1" alt="product2">

                            <div class="carousel-caption">
                                Slide 2
                            </div>
                        </div>
                        <div class="item">
                            <img src="sliderPicture2" alt="product2">

                            <div class="carousel-caption">
                                Slide 3
                            </div>
                        </div>
                    </div>

                    <!-- Controls -->
                    <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="product-summary">
                    <h2>name</h2>

                    <div class="review-number">
                        <span class="review-count">reviewsNb</span> review
                    </div>
                    <p class="price">priceTop </p>

                    <p class="description">
                        description0
                    </p>

                    <form method="post" class="add-to-cart">
                        <div class="row">
                            <div class="quantity clearfix col-xs-6 col-sm-6 col-md-4">
                                <input type="button" class="minus" value="-" >
                                <input type="number" class="input-text qty text" title="Qty" value="1" name="quantity">
                                <input type="button" class="plus" value="+" >
                            </div>
                            <div class="col-xs-6 col-sm-6 col-md-3">
                                <button type="button" class="btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="tabs">
            <!-- Nav tabs -->
            <ul class="nav nav-tabs"  role="tablist">
                <li role="presentation" class="active"><a href="#description" aria-controls="description" role="tab" data-toggle="tab">Description</a></li>
                <li role="presentation"><a href="#specifications" aria-controls="specifications" role="tab" data-toggle="tab">Specifications</a></li>
                <li role="presentation"><a href="#reviews" aria-controls="reviews" role="tab" data-toggle="tab">Reviews</a></li>
            </ul>

            <!-- Tab panes -->
            <div class="tab-content">
                <div role="tabpanel" class="tab-pane active" id="description">
                    description1
                </div>
                <div role="tabpanel" class="tab-pane" id="specifications">
                    <div class="table-responsive table-bordered">
                        <table class="table">
                            <tbody>
                            <tr>
                                <th>label</th>
                                <td>valueS</td>
                            </tr>
                            <tr>
                                <th> label</th>
                                <td>valueS</td>
                            </tr>
                            <tr>
                                <th> label</th>
                                <td>valueS</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div role="tabpanel" class="tab-pane" id="reviews">
                <div class="table-responsive table-bordered">
                    <table class="table">
                        <tbody>
                        <tr>
                            <th>reviewName</th>
                            <td>reviewText</td>
                        </tr>
                        <tr>
                            <th> reviewName</th>
                            <td>reviewText</td>
                        </tr>

                        </tbody>
                    </table>
                </div>
                </div>
            </div>

        </div>`;
    //get a reference to our product list container
    var productListNode = document.querySelector('#product-section');

    var productId = getParameterByName('id');
    var div = document.createElement('div');
    div.className = 'container';
    var productHTML;
    productHTML = productTemplate.replace('sliderPicture0', products[productId].pictures[0]);
    for (var j = 1; j < products[productId].pictures.length; j++) {
        productHTML = productHTML.replace('sliderPicture' + j, products[productId].pictures[j]);
    }
    productHTML = productHTML.replace('name', products[productId].name)
        .replace('reviewsNb', products[productId].reviews.length)
        .replace('priceTop', '$' + products[productId].price)
        .replace('description0', products[productId].description)
        .replace('description1', products[productId].description);

    for (var j = 0; j < products[productId].specifications.length; j++) {
        productHTML = productHTML.replace('label', products[productId].specifications[j].label)
            .replace('valueS', products[productId].specifications[j].value);
    }
    for (var j = 0; j < products[productId].reviews.length; j++) {
        productHTML = productHTML.replace('reviewName', products[productId].reviews[j].name)
            .replace('reviewText', products[productId].reviews[j].text);
    }
    div.innerHTML = productHTML;
    productListNode.appendChild(div);

})
