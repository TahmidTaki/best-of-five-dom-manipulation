

function getInnerText(elementId) {
    const textElement = document.getElementById(elementId);
    const innerText = textElement.innerText;
    return innerText;
}


function getInputValue(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldString = inputField.value;
    if (isNaN(inputFieldString)) {
        alert('Please Enter Number');
        inputField.value = '';
        return;
    }
    const inputFieldValue = parseInt(inputFieldString);
    return inputFieldValue;

}

function setTextElementValue(elementId, newValue) {
    const textElement = getElementById(elementId);
    textElement.innerText = newValue;
}