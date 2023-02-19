document.getElementById('triangle-btn').addEventListener('click',function () {
    

    const triangleBase=getInputValue('tbi');
    const triangleHeight=getInputValue('thi');
//validation for input
if (isNaN(triangleBase)|| triangleBase<=0 || isNaN(triangleHeight) || triangleHeight<=0) {
    alert("Please enter valid values for Base and Height");
    return;
  }



  
    const triangleArea=(0.5*triangleBase*triangleHeight).toFixed(2);
    setInnerText('tm',triangleArea)



    //table create
    const tableContainer=document.getElementById("table-container");

    const tr=document.createElement("tr");
    tr.innerHTML=`
    <tr>
    <td>1.triangle</td>
    
    <td>${triangleArea}</td>
    <td><button class="text-white bg-primary border rounded" id="delete-btn">Convert to m<sup>2</sup></button></td>
  </tr>
        
    `;
    tableContainer.appendChild(tr);

})

