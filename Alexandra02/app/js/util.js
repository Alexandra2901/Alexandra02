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
