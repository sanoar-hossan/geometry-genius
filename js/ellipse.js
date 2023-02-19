document.getElementById('ellipse-btn').addEventListener('click',function () {
    

    const ellipseWidth=getInputValue('ellipse-width');
    const ellipseHeight=getInputValue('ellipse-height');
//validation for input
if (isNaN(ellipseWidth)|| ellipseWidth<=0 || isNaN(ellipseHeight) || ellipseHeight<=0) {
    alert("Please enter valid values for Base and Height");
    return;
  }



  
    const ellipseArea=(0.5*ellipseWidth*ellipseHeight).toFixed(2);
    setInnerText('ellipse-multi',ellipseArea)



    //table create
    const tableContainer=document.getElementById("table-container");

    const tr=document.createElement("tr");
    tr.innerHTML=`
    <tr>
    <td>6.ellipse</td>
    
    <td>${ellipseArea}</td>
    <td><button class="text-white bg-primary border rounded" id="delete-btn">Convert to m<sup>2</sup></button></td>
  </tr>
        
    `;
    tableContainer.appendChild(tr);

})

