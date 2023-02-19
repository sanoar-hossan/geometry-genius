document.getElementById('rhombus-btn').addEventListener('click',function () {
    

    const baseWidth=getInputValue('base-width');
    const baseHeight=getInputValue('base-height');
//validation for input
if (isNaN(baseWidth)|| baseWidth<=0 || isNaN(baseHeight) || baseHeight<=0) {
    alert("Please enter valid values for Base and Height");
    return;
  }



  
    const rhombusArea=(0.5*baseWidth*baseHeight).toFixed(2);
    setInnerText('rhombus-multi',rhombusArea)



    //table create
    const tableContainer=document.getElementById("table-container");

    const tr=document.createElement("tr");
    tr.innerHTML=`
    <tr>
    <td>4.Rhombus</td>
    
    <td>${rhombusArea}</td>
    <td><button class="text-white bg-primary border rounded" id="delete-btn">Convert to m<sup>2</sup></button></td>
  </tr>
        
    `;
    tableContainer.appendChild(tr);

})

