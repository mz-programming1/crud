let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let supmit = document.getElementById('supmit');

let mood = 'create';
let tmp;

function getTotal(){
    if(price.value != ''){
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML = result;
        total.style.backgroundColor = '#34974d';
        total.style.color = 'white';
    }
    else{
        total.innerHTML = '';
        total.style.backgroundColor = '#222';
        total.style.color = '#e00f0f';
    }
};

let dataPro;

if(localStorage.product != null){
    dataPro = JSON.parse(localStorage.product)
}else{
    dataPro = [];
}



supmit.onclick = function(){
    let newPro = {
        title:title.value.toLowerCase(),
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value.toLowerCase(),
    }
    if(title.value != '' && price.value != '' && category.value != '' && count.value <= 20){
            if(mood === 'create'){
        if (newPro.count>1){
        for(let i = 0; i<newPro.count; i++){
            dataPro.push(newPro);

        }
        }else{
            dataPro.push(newPro); 
        }

    }else{
        dataPro[ tmp ] = newPro;
        mood = 'create';
        count.style.display = 'block';
        let label2 = document.getElementById('label2');
        label2.style.display = 'block';
        supmit.innerHTML = `<span class="button__text">create</span>
        <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>`
        
    }
    clearData();

    }





    localStorage.setItem('product' , JSON.stringify(dataPro));
showData();
};       




function clearData(){
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    count.value = '';
    category.value = '';
    total.innerHTML = '';
}

function showData(){
    let table = '';
    for(let i = 0 ; i < dataPro.length ; i++){
        table += `<tr>
        <td>${i+1}</td>
        <td>${dataPro[i].title}</td>
        <td>${dataPro[i].price}</td>
        <td>${dataPro[i].taxes}</td>
        <td>${dataPro[i].ads}</td>
        <td>${dataPro[i].discount}</td>
        <td>${dataPro[i].total}</td>
        <td>${dataPro[i].category}</td>
        <td><button onclick="updateData(${i})" id="update">update</button></td>
        <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
    </tr>`;
    
    }
   document.getElementById('tBody').innerHTML = table;
   
   let deleteAll = document.getElementById('deleteAll');
   if(dataPro.length >0){
    deleteAll.innerHTML = `
    <button class="button3" onclick = "deleteALL()" ><span class="text">Delete All Products (${dataPro.length})</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>`
    }else{
        deleteAll.innerHTML = '';
    }
    getTotal();
};
showData();

function deleteData(i){
    dataPro.splice(i,1);
    localStorage.product = JSON.stringify(dataPro);
    showData();
}
function deleteALL(){
    localStorage.clear();
    dataPro.splice(0);
    showData();
}
function updateData(i){
    title.value = dataPro[i].title;
    price.value = dataPro[i].price;
    taxes.value = dataPro[i].taxes;
    ads.value = dataPro[i].ads;
    discount.value = dataPro[i].discount;
    getTotal();
    category.value = dataPro[i].category;
    count.style.display = 'none';
    let label2 = document.getElementById('label2');
    label2.style.display = 'none';
    supmit.innerHTML = `<span class="button__text">Update</span>
    <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>`
    mood = 'update';
    tmp = i; 
    scroll({top:0})
};


let searchMood = 'title';

function getSearchMood(id){
    let search = document.getElementById('search');
    let kk = document.getElementById('kk');


    if(id == 'search1' ){
        kk.innerHTML = `     
        <span style="transition-delay:0ms">S</span><span style="transition-delay:50ms">e</span><span style="transition-delay:100ms">a</span><span style="transition-delay:150ms">r</span><span style="transition-delay:200ms">c</span><span style="transition-delay:250ms">h</span><span style="transition-delay:300ms"> </span><span style="transition-delay:350ms">b</span><span style="transition-delay:400ms">y</span><span style="transition-delay:450ms"> </span><span style="transition-delay:500ms">t</span><span style="transition-delay:500ms">i</span><span style="transition-delay:500ms">t</span><span style="transition-delay:500ms">l</span><span style="transition-delay:500ms">e</span>`
        searchMood = 'title';


    }else{

        kk.innerHTML = `
        <span style="transition-delay:0ms">S</span><span style="transition-delay:50ms">e</span><span style="transition-delay:100ms">a</span><span style="transition-delay:150ms">r</span><span style="transition-delay:200ms">c</span><span style="transition-delay:250ms">h</span><span style="transition-delay:300ms"> </span><span style="transition-delay:350ms">b</span><span style="transition-delay:400ms">y</span><span style="transition-delay:450ms"> </span><span style="transition-delay:500ms">c</span><span style="transition-delay:500ms">a</span><span style="transition-delay:500ms">t</span><span style="transition-delay:500ms">e</span><span style="transition-delay:500ms">g</span><span style="transition-delay:500ms">o</span><span style="transition-delay:500ms">r</span><span style="transition-delay:500ms">y</span>
 
    `  
        searchMood = 'category';

    }
    search.value= '';
    showData();
    search.focus()
}
function searchData(value){
    let table ='';
   if(searchMood == 'title'){
    for(let i = 0 ; i < dataPro.length ; i++){
        if(dataPro[i].title.includes(value.toLowerCase())){
            table += `<tr>
        <td>${i}</td>
        <td>${dataPro[i].title}</td>
        <td>${dataPro[i].price}</td>
        <td>${dataPro[i].taxes}</td>
        <td>${dataPro[i].ads}</td>
        <td>${dataPro[i].discount}</td>
        <td>${dataPro[i].total}</td>
        <td>${dataPro[i].category}</td>
        <td><button onclick="updateData(${i})" id="update">update</button></td>
        <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
    </tr>`;
        }
    }
   }
   else{
    for(let i = 0 ; i < dataPro.length ; i++){
        if(dataPro[i].category.includes(value.toLowerCase())){
            table += `<tr>
        <td>${i}</td>
        <td>${dataPro[i].title}</td>
        <td>${dataPro[i].price}</td>
        <td>${dataPro[i].taxes}</td>
        <td>${dataPro[i].ads}</td>
        <td>${dataPro[i].discount}</td>
        <td>${dataPro[i].total}</td>
        <td>${dataPro[i].category}</td>
        <td><button onclick="updateData(${i})" id="update">update</button></td>
        <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
    </tr>`;
        }
    }
   }
   document.getElementById('tBody').innerHTML = table;

}