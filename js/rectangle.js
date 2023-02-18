document.getElementById('rectangle-btn').addEventListener('click',function () {
    

    const rectangleWidth=getInputValue('rectangle-width');
    const rectangleHeight=getInputValue('rectangle-height');
//validation for input
if (isNaN(rectangleWidth)|| rectangleWidth<=0 || isNaN(rectangleHeight) || rectangleHeight<=0) {
    alert("Please enter valid values for width and Height");
    return;
  }

    const rectangleArea=rectangleWidth*rectangleHeight;
    setInnerText('rectangle-multi',rectangleArea);
   
    
})