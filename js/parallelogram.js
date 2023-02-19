document.getElementById('parallelogram-btn').addEventListener('click',function () {
    

    const parallelogramWidth=getInputValue('parallelogram-width');
    const parallelogramHeight=getInputValue('parallelogram-height');
//validation for input
if (isNaN(parallelogramWidth)|| parallelogramWidth<=0 || isNaN(parallelogramHeight) || parallelogramHeight<=0) {
    alert("Please enter valid values for width and Height");
    return;
  }

    const parallelogramArea=(parallelogramWidth*parallelogramHeight).toFixed(2);
   setInnerText('parallelogram-multi',parallelogramArea);
    
   
    

    //table create
    const tableContainer=document.getElementById("table-container");

    const tr=document.createElement("tr");
    tr.innerHTML=`
    <tr>
    <td>3.parallelogram</td>
    
    <td>${parallelogramArea}</td>
    <td><button class="text-white bg-primary border rounded" id="delete-btn">Convert to m<sup>2</sup></button></td>
  </tr>
        
    `;
    tableContainer.appendChild(tr);

    
})