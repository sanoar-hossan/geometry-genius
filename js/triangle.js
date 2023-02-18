document.getElementById('triangle-btn').addEventListener('click',function () {
    

    const triangleBase=getInputValue('tbi');
    const triangleHeight=getInputValue('thi');
//validation for input
if (isNaN(triangleBase)|| triangleBase<=0 || isNaN(triangleHeight) || triangleHeight<=0) {
    alert("Please enter valid values for Base and Height");
    return;
  }

    const triangleArea=0.5*triangleBase*triangleHeight;
    setInnerText('tm',triangleArea)
    
})