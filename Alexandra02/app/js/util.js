/**
 * onchangeElem - ON change action helper
 *
 * @param  {String} inputId element id to check
 */
function onchangeElem(inputId) {
    isEmptyInput(inputId) ? showError(inputId) : hideError(inputId);
}

/**
 * showError - Show an error for inputId
 *
 * @param  {String} inputId The id of the input we want show the error
 */
function showError(inputId) {

    var parentNode = findParent(document.querySelector(inputId), 'form-group');
    parentNode.className += ' has-error';
    parentNode.querySelector('.help-block').className = parentNode.querySelector('.help-block').className.replace('hidden', '');

}

/**
 * showError - Hide the error for the input
 *
 * @param  {String} inputId The id of the input we show the error
 */
function hideError(inputId) {

    var parentNode = findParent(document.querySelector(inputId), 'form-group');
    parentNode.className = parentNode.className.replace('has-error', '');
    parentNode.querySelector('.help-block').className = parentNode.querySelector('.help-block').className.replace('hidden', '');
    parentNode.querySelector('.help-block').className += ' hidden';
}


/**
 * isEmptyInput - Helper to determine if an input is empty
 *
 * @param  {String} inputId The id of the input to determine if empty
 * @return {boolean}
 */
function isEmptyInput(inputId) {
    return !document.querySelector(inputId).value
}

function formValidationFunction(id, inputs) {
    document.addEventListener('DOMContentLoaded', function() {
        var validationForm = document.querySelector(id);
        for (var i = 0; i < inputs.length; i++) {
            document.querySelector(inputs[i]).addEventListener("keyup", function() {
                onchangeElem('#' + this.id);
            });
        }
        validationForm.addEventListener('submit', function(event) {
            var hasError = false;
            for (var i = 0; i < inputs.length; i++) {
                if (isEmptyInput(inputs[i])) {
                    hasError = true;
                    showError(inputs[i]);
                } else {
                    hideError(inputs[i]);
                }
            }
            if (hasError) {
                event.preventDefault();
            }
        });
    });

}

function findParent(node, searchClass) {
    if (node == null) {
        return null;
    }
    if (node.parentNode.className.indexOf(searchClass) != -1) {
        return node.parentNode;

    } else {

        return findParent(node.parentNode, searchClass);
    }
}

function getProductList() {
    return [{
        picture: '../assets/images/products/product-1.jpg',
        name: 'Limited Price',
        price: 299,
        onSale: true,
        description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sagittis, massa fringilla consequat blandit, mauris ligula porta nisi, non tristique enim sapien vel nisl. Suspendisse vestibulum lobortis dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent nec tempus nibh. Donec mollis commodo metus et fringilla. Etiam venenatis, diam id adipiscing convallis, nisi eros lobortis tellus, feugiat adipiscing ante ante sit amet dolor. Vestibulum vehicula scelerisque facilisis. Sed faucibus placerat bibendum. Maecenas sollicitudin commodo justo, quis hendrerit leo consequat ac. Proin sit amet risus sapien, eget interdum dui. Proin justo sapien, varius sit amet hendrerit id, egestas quis mauris.',
        specifications: [{
            label: 'prop 1',
            value: 'value 1',
        }, {
            label: 'prop 2',
            value: 'value 2',
        }, {
            label: 'prop 3',
            value: 'value 3',
        }],
        reviews: [{
            name: 'OLI 1',
            text: 'Great product 6/7 with rice'
        }, {
            name: 'OLI 2',
            text: 'Great product over 9000 out 10'
        }],
        pictures: [
            '../assets/images/products/product-1.jpg',
            '../assets/images/products/product-2.jpg',
            '../assets/images/products/product-3.jpg'
        ]
    }, {
        picture: '../assets/images/products/product-2.jpg',
        name: 'Amazing Product',
        price: 299,
        onSale: false,
        description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sagittis, massa fringilla consequat blandit, mauris ligula porta nisi, non tristique enim sapien vel nisl. Suspendisse vestibulum lobortis dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent nec tempus nibh. Donec mollis commodo metus et fringilla. Etiam venenatis, diam id adipiscing convallis, nisi eros lobortis tellus, feugiat adipiscing ante ante sit amet dolor. Vestibulum vehicula scelerisque facilisis. Sed faucibus placerat bibendum. Maecenas sollicitudin commodo justo, quis hendrerit leo consequat ac. Proin sit amet risus sapien, eget interdum dui. Proin justo sapien, varius sit amet hendrerit id, egestas quis mauris.',
        specifications: [{
            label: 'prop 1 1',
            value: 'value 1 1',
        }, {
            label: 'prop 1 2',
            value: 'value 1 2',
        }, {
            label: 'prop 1 3',
            value: 'value 1 3',
        }],
        reviews: [{
            name: 'OLI 1',
            text: 'Great product 6/7 with rice'
        }, {
            name: 'OLI 2',
            text: 'Great product over 9000 out 10'
        }],
        pictures: [
            '../assets/images/products/product-1.jpg',
            '../assets/images/products/product-2.jpg',
            '../assets/images/products/product-3.jpg'
        ]
    }, {
        picture: '../assets/images/products/product-3.jpg',
        name: 'New product',
        price: 299,
        onSale: false,
        description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sagittis, massa fringilla consequat blandit, mauris ligula porta nisi, non tristique enim sapien vel nisl. Suspendisse vestibulum lobortis dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent nec tempus nibh. Donec mollis commodo metus et fringilla. Etiam venenatis, diam id adipiscing convallis, nisi eros lobortis tellus, feugiat adipiscing ante ante sit amet dolor. Vestibulum vehicula scelerisque facilisis. Sed faucibus placerat bibendum. Maecenas sollicitudin commodo justo, quis hendrerit leo consequat ac. Proin sit amet risus sapien, eget interdum dui. Proin justo sapien, varius sit amet hendrerit id, egestas quis mauris.',
    }]
}

function getParameterByName(name) {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
