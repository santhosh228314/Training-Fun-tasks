let inFood = document.getElementById('input-food');
let foodItems = document.getElementById('content-items');
let foodContainer = document.getElementById('content-box');
let saveBtn = document.getElementById('save-btn');


let display = saveBtn.addEventListener('click', () => {
    if(inFood.value == ""){
        alert("Enter somthings First You Idoit");
    }
    else{
    foodContainer.innerHTML +=` <li class="content-items">${inFood.value}</li>`;
    document.getElementById('input-food').value="";}
});






