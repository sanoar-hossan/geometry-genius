document.getElementById('rectangle-btn').addEventListener('click',function () {
    

    const rectangleWidth=getInputValue('rectangle-width');
    const rectangleHeight=getInputValue('rectangle-height');
//validation for input
if (isNaN(rectangleWidth)|| rectangleWidth<=0 || isNaN(rectangleHeight) || rectangleHeight<=0) {
    alert("Please enter valid values for width and Height");
    return;
  }

    const rectangleArea=(rectangleWidth*rectangleHeight).toFixed(2);
    setInnerText('rectangle-multi',rectangleArea);
    
   
    

    //table create
    const tableContainer=document.getElementById("table-container");

    const tr=document.createElement("tr");
    tr.innerHTML=`
    <tr>
    <td>2.rectangle</td>
    
    <td>${rectangleArea}</td>
    <td><button class="text-white bg-primary border rounded" id="delete-btn">Convert to m<sup>2</sup></button></td>
  </tr>
        
    `;
    tableContainer.appendChild(tr);

    
})