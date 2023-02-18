function getInputValue(inputId) {
    const inputElement=document.getElementById(inputId);
    const inputElementString=inputElement.value;
    const inputValue=parseFloat(inputElementString);
    inputElement.value='';
    return inputValue;
}
function getInnerText(inputId) {
    const innerElement=document.getElementById(inputId);
    const innerElementString=innerElement.innerText;
    const innerValue=parseFloat(innerElementString);
    innerElement.innerText='';
    return innerValue;
}
function setInnerText(inputId,value) {
    const getId=document.getElementById(inputId);
    getId.innerText=value;
    
   
}
