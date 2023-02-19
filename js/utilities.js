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

//blog page shift
const blogButton = document.getElementById('blog-btn');

blogButton.addEventListener('click', () => {
  window.open('blog.html', '_blank');
});



//random color create in cards
const cards = document.querySelectorAll('.random');

for (const card of cards) {
  // Store the original background color in a variable
  const originalColor = card.style.backgroundColor;

  card.addEventListener('mouseover', function() {
    // Generate a new random color and set it as the background color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    card.style.backgroundColor = randomColor;
  });

  card.addEventListener('mouseout', function() {
    // Restore the original background color
    card.style.backgroundColor = originalColor;
  });
}
