document.getElementById('pentagon-btn').addEventListener('click',function () {
    

    const pentagonBase=getInputValue('pentagon-base');
    const pentagonHeight=getInputValue('pentagon-height');
//validation for input
if (isNaN(pentagonBase)|| pentagonBase<=0 || isNaN(pentagonHeight) || pentagonHeight<=0) {
    alert("Please enter valid values for Base and Height");
    return;
  }



  
    const pentagonArea=(0.5*pentagonBase*pentagonHeight).toFixed(2);
    setInnerText('pentagon-multi',pentagonArea)



    //table create
    const tableContainer=document.getElementById("table-container");

    const tr=document.createElement("tr");
    tr.innerHTML=`
    <tr>
    <td>5.Pentagon</td>
    
    <td>${pentagonArea}</td>
    <td><button class="text-white bg-primary border rounded" id="delete-btn">Convert to m<sup>2</sup></button></td>
  </tr>
        
    `;
    tableContainer.appendChild(tr);

})

