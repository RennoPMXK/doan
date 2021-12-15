var temp = 0 ;
function showColNavBar() {
    ++temp ;
    if (temp%2==1) {
        
        document.getElementById('col-nav-bar2-id').style.visibility = "visible";
        document.getElementById('col-nav-bar-id').style.marginLeft = '-25rem' ;
        // document.getElementById('col-nav-bar-id').style.display = 'none' ;
        document.getElementById('cont-view-id').style.marginLeft = '1.9rem';
        document.getElementById('footer-id').style.marginLeft = '1.9rem';
    } else {
        
        document.getElementById('col-nav-bar2-id').style.visibility = "hidden";
        document.getElementById('col-nav-bar-id').style.marginLeft = '-0.5rem' ;
        // document.getElementById('col-nav-bar-id').style.display = 'flex' ;        
        document.getElementById('cont-view-id').style.marginLeft = '18.9rem';
        document.getElementById('footer-id').style.marginLeft = '18.9rem';
        
    }
};

function displayUserPanel() {
    init();
    showOrHideOrFlex('undo-but', 'none');
}

function displayDashboard() {
    showOrHideOrFlex('user-dashboard', 'none');
    showOrHideOrFlex('product-dashboard', 'none');
    showOrHideOrFlex('statistic-id', 'none');
    showOrHideOrFlex('quan-ly-don-hang-id', 'block');
}
function showUndoBut() {document.getElementById('undo-but').style.display = 'block';}
function hideUndoBut() {document.getElementById('undo-but').style.display = 'none' ;}
function showAddNickBut () {document.getElementById('add-nick-but').style.display = 'block';}
function hideAddNickBut () {document.getElementById('add-nick-but').style.display = 'none';}
function showAddProductBut () {document.getElementById('add-product-but').style.display = 'block';}
function hideAddProductBut () {document.getElementById('add-product-but').style.display = 'none';}

function showOrHideOrFlex (id, stat) {
    document.getElementById(id).style.display = stat; 
}

function displayProduct() {
    createProduct();
    changeLabelToProduct();
    displayProductDict();
    // show, align form input
    document.getElementById('add-nick-field-id').style.display = 'flex';
    document.getElementById('userBox').style.width = '10rem';
    document.getElementById('userBox').style.marginRight = '1rem';
    document.getElementById('passBox').style.width = '10rem';
    document.getElementById('passBox').style.marginRight = '1rem';
    document.getElementById('nameBox').style.width = '9rem';
    document.getElementById('nameBox').style.marginRight = '1rem';
    document.getElementById('newDealBox').style.width = '9rem';
    document.getElementById('newDealBox').style.marginRight = '1rem';
    showOrHideOrFlex('undo-but', 'none');
    showOrHideOrFlex('product-dashboard', 'block')
    showOrHideOrFlex('modify-img', 'none')

}
function changeLabelToProduct () {
    document.getElementById('user-box-1').innerHTML = 'ID:';
    document.getElementById('pass-box-1').innerHTML = 'Name:';
    document.getElementById('name-box-1').innerHTML = 'Old deal:';
    document.getElementById('something-new').innerHTML = `
    <div class="enter-price">
        <div id="name-box-2">New deal:</div>
        <input type="text" value="" id="newDealBox">
    </div>`;
    showOrHideOrFlex('add-nick-but', 'none');
    showOrHideOrFlex('add-product-but', 'block');
}

function callBackUsernameUI () {
    showOrHideOrFlex('add-nick-field-id', 'flex');
    document.getElementById('user-box-1').innerHTML = 'Username:';
    document.getElementById('pass-box-1').innerHTML = 'Password:';
    document.getElementById('name-box-1').innerHTML = 'Email:';
    document.getElementById('something-new').innerHTML = `
    <div style="display: none" class="enter-price">
        <div id="name-box-2">New deal:</div>
        <form id='name-box2-form'>
            <input type="text" value="" id="newDealBox">
        </form>
    </div>`;
}


var usernameToEdit = "" ;
var UserDict = [] ;
var counter = 2 ;
var UserDict = [
];
// admin: administrator
// customer: customer
// spectator: blocked user due to spam or scam
function init () {
    if (localStorage.getItem('user') === null)
        localStorage.setItem('user', JSON.stringify(UserDict));
    displayUserDict();
}

function displayUserDict() {
    showOrHideOrFlex('user-dashboard' , 'block')
    showOrHideOrFlex('statistic-id', 'none');
    showOrHideOrFlex('add-nick-but', 'block');
    showOrHideOrFlex('userlist', 'block');
    showOrHideOrFlex('productlist', 'none');
    showOrHideOrFlex('add-product-but', 'none');
    showOrHideOrFlex('quan-ly-don-hang-id', 'none');

	var UserDict = JSON.parse(localStorage.getItem('user'));
	var cache=
    `<div class="table-control">
	    <div style="margin-left: 0rem"><b>No.</b></div>
	    <div style="margin-left: 2.5rem"><b>Email</b></div>
	    <div style="margin-left: 20rem"><b>Username</b></div>
	    <div style="margin-left: 33rem"><b>Password</b></div>
	    <div style="margin-left: 41rem"><b>Delete</b></div>
        <div style="margin-left: 46rem"><b>Edit</b></div>
        <div style="margin-left: 50rem"><b>Date created</b></div>
        <div style="margin-left: 60rem"><b>User Type</b></div>
    </div>`;
    document.getElementById('userlist').style.height = UserDict.length*9+1 + 'rem';
	for(var i = 0 ; i < UserDict.length; i++)
		cache += `<div class='table-control'>
            <div style="margin-left: 0rem"> ${String(i+1)} </div>
            <div style="margin-left: 2.5rem">${UserDict[i].email} </div>
            <div style="margin-left: 21rem">${UserDict[i].username}</div>
            <div style="margin-left: 33rem">${UserDict[i].password}</div>
            <button style="margin-left: 41rem" id="deletebut${i}" class="delete" onClick="deleteUser('${UserDict[i].username}')"><i class="far fa-trash-alt"></i></button>
            <button style="margin-left: 46rem" id="editbut" class="edit" onClick="editUser('${UserDict[i].username}')"><i class="fas fa-user-edit"></i></button>
            <div style="margin-left: 52rem">${UserDict[i].datesignup}</div>
            <button  style="margin-left: 60rem" class='user-type-but-${UserDict[i].userType}' id='user-type-but-id-${i}' onclick="switchUserType(${i})">${UserDict[i].userType}</button>
        </div>`
    
	document.getElementById('userlist').innerHTML = cache;
}
function switchUserType(pos) {
    var UserDict = JSON.parse(localStorage.getItem('user'));
    if (UserDict[pos].userType == "Admin") UserDict[pos].userType = "Customer";
    else if (UserDict[pos].userType == "Customer")  UserDict[pos].userType = "Spectator" ;
    else if (UserDict[pos].userType == "Spectator")  UserDict[pos].userType = "Admin";
    document.getElementById('user-type-but-id-'+pos.toString()).innerHTML = UserDict[pos].userType;
    localStorage.setItem('user', JSON.stringify(UserDict));
    displayUserDict();
}

var editFlag = false ;
function editUser(username) {
    editFlag = true;
    var position = 0 ;
    var userDict = JSON.parse(localStorage.getItem('user'));
    for (let i = 0; i < userDict.length; i++)
        if (userDict[i].username == username) {
            position = i ;
            break ;
        }
    document.getElementById('add-nick-but').innerHTML = 'Add' ;
    document.getElementById('user-box-1').innerHTML = 'New username:' ;
    document.getElementById('pass-box-1').innerHTML = 'New password:' ;
    document.getElementById('name-box-1').innerHTML = 'New email:' ;
    document.getElementById('undo-but').style.display = 'block' ;
    document.getElementById('add-nick-but').addEventListener("click", () => {
        var userDict = JSON.parse(localStorage.getItem('user'));
        var username = document.getElementById('userBox').value;
        var password = document.getElementById('passBox').value;
        var email = document.getElementById('nameBox').value;
        for (var j = 0; j < userDict.length; j++) 
            if (userDict[j].username == username) {
                alert('This username is already existed.')
                return;
            }
        if (username != '') 
            userDict[position].username = username ;
            
        if (password!='') {
            if (password.length < 8) {
                alert("More than 8 characters please.");
                return;
            };
            if (password.length > 16) {
                alert("Less than 16 characters please.");
                return;
            };
            userDict[position].password = password ;
        }
        if (email!='')
            userDict[position].email = email ;
        localStorage.setItem('user', JSON.stringify(userDict));
        displayUserDict();
        resetAllForms1();
        document.getElementById('add-nick-but').innerHTML = 'Add' ;
        document.getElementById('user-box-1').innerHTML = 'Username:' ;
        document.getElementById('pass-box-1').innerHTML = 'Password:' ;
        document.getElementById('name-box-1').innerHTML = 'Fullname:' ;
        document.getElementById('undo-but').style.display = 'none' ;
        editFlag = false;
    });
}

function addNick() {
    if (editFlag == false) {
        counter++;
        var userDict = JSON.parse(localStorage.getItem('user'));
        var username  = document.getElementById('userBox').value;
        var password = document.getElementById('passBox').value;
        var fullname = document.getElementById('nameBox').value;
            for (var i = 0; i < userDict.length; i++) {
                if (userDict[i].username == username) {
                    alert('This username is already existed.')
                    return;
                }
            }
        if (username == '') {
            alert("Missing username.");
            return;
        };
        if (password =='') {
            alert("Missing password.");
            return;
        };
        if (password.length < 8) {
            alert("More than 8 characters please.");
            return;
        };
        if (password.length > 16) {
            alert("Less than 16 characters please.");
            return;
        };
        var today = new Date();
        var datesignup = String(today.getDate())+"/"+String(today.getMonth())+"/"+String(today.getFullYear());
        var userType = "Customer" ;
        var temp = {username, password, fullname, datesignup, userType};
        userDict.push(temp);
        localStorage.setItem('user', JSON.stringify(userDict));
        displayUserDict();
    }
}

function deleteUser(usernameDelete){
    var userDict = JSON.parse(localStorage.getItem('user'));
    for (var i=0; i < userDict.length; i++)
        if (userDict[i].username == usernameDelete)
            if (confirm('Are you sure?'))
                userDict.splice(i, 1);
    localStorage.setItem('user', JSON.stringify(userDict));
    displayUserDict();
}

function undo() {
    document.getElementById('add-nick-but').innerHTML = 'Add' ;
    document.getElementById('user-box-1').innerHTML = 'Username:' ;
    document.getElementById('pass-box-1').innerHTML = 'Password:' ;
    document.getElementById('name-box-1').innerHTML = 'Fullname:' ;
}

function logOut (usernameToLogOut) {
    // :D ???
}
function logOutThisUser() {
    if(confirm('Bạn có chắc muốn thoát không !')){
        location.href = '../index.html'
    }
   
    // chua xong 
}

function createProduct() {
    if (localStorage.getItem('product') === null) 
        localStorage.setItem('product',JSON.stringify(product_arr));
}
var product_arr = [
       
       
       
    
];

// user box 1 : id
// pass box 1 : name 
// name box 1 : old deal 
// something new : new deal
function displayProductDict() {
    showOrHideOrFlex('statistic-id', 'none');
    showOrHideOrFlex('quan-ly-don-hang-id', 'none');
	var productDict = JSON.parse(localStorage.getItem('product'));
	var cache=
    `<div class="table-control">
	    <div style="margin-left: 0rem"><b>ID</b></div>
	    <div style="margin-left: 2.5rem"><b>Name</b></div>
	    <div style="margin-left: 19rem"><b>Old deal</b></div>
	    <div style="margin-left: 27rem"><b>New deal</b></div>
	    <div style="margin-left: 34.5rem"><b>Delete</b></div>
        <div style="margin-left: 39rem"><b>Edit</b></div>
        <div style="margin-left: 43rem"><b>Edit Img</b></div>
    </div>`;
    document.getElementById('productlist').style.height = productDict.length*6.5 + 'rem';
    document.getElementById('main-content-id').style.height = (productDict.length)*7 + 'rem';
// huynhkhaphi _ 1906_10112021
	for (var i = 0 ; i < productDict.length; i++)
		cache += `<div class='table-control'>
            <div style="margin-left: 0rem;"> ${productDict[i].id} </div>
            <div style="margin-left: 2.5rem">${productDict[i].ten} </div>
            <div class="thumbnail"><img src="${productDict[i].anh}" alt="hehe"></div>
            <div style="margin-left: 19rem">${productDict[i].giacu}</div>
            <div style="margin-left: 27rem">${productDict[i].giamoi}</div>
            <button style="margin-left: 34.5rem" id="deletebut${i}" class="delete" onClick="deleteProduct('${productDict[i].id}')"><box-icon name='x'></box-icon></button>
            <button style="margin-left: 39rem" id="editbut" class="edit" onClick="editProduct('${i}')"><box-icon type='solid' name='edit'></box-icon></button>
            <button style="margin-left: 42rem; margin-bottom: 2rem;" id="editImg-id" class="editImg" onClick="editImgStep1('${i}')"><i class="fas fa-plus"></i></button>
            <button style="margin-left: 1rem; margin-bottom: 2rem;" id="editImg1-id" class="editImg" onClick="editImg1Step1('${i}')"><i class="fas fa-plus"></i></button>
            <button style="margin-left: 1rem; margin-bottom: 2rem;" id="editImg2-id" class="editImg" onClick="editImg2Step1('${i}')"><i class="fas fa-plus"></i></button>
            <button style="margin-left: 1rem; margin-bottom: 2rem;" id="editImg3-id" class="editImg" onClick="editImg3Step1('${i}')"><i class="fas fa-plus"></i></button>
        </div>`
        document.getElementById("userlist").style.display = "none";

        document.getElementById("productlist").style.display = "block";
        document.getElementById('productlist').innerHTML = cache;
        productCounter = productDict.length;
}

var previousDir = '' ;
// function editImg (idFromTable) {
//     // find the product img dir
//     var productDict = JSON.parse(localStorage.getItem('product'));
//     for (let i = 0 ; i < productDict.length; i++) {
//         if (productDict[i].id == idFromTable)
//             editImgStep1(i);
//     }
// }

// 
var storedPosition ;
function editImgStep1(position) {
    storedPosition = position;
    showOrHideOrFlex('add-nick-field-id', 'none');
    showOrHideOrFlex('productlist', 'none');
    showOrHideOrFlex('modify-img', 'block');
    document.getElementById('modify-img').innerHTML = `
        <input type='file' id='image_input' >
        <div id='display_image'></div>
        <button type='submit' id='saveImageButton' onclick='saveImageAndTurnBack();'>Save</button>
        <button type='submit' id='cancelButton' onclick='cancelAndTurnBack(${position}) '>Cancel</button>
        <button type='submit' id='discardButton' onclick='discardAnh(${position}) '>Discard</button>
    `;
    const image_input = document.querySelector('#image_input');
    var uploaded_image = '';
    image_input.addEventListener('change', function () {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            var productDict = JSON.parse(localStorage.getItem('product'));
            previousDir = productDict[position].anh;
            let temp = image_input.value;
            temp = temp.replace(`C:\\fakepath\\`, `./`)
            productDict[position].anh = temp;
            localStorage.setItem('product', JSON.stringify(productDict));
            uploaded_image = reader.result;
            document.querySelector('#display_image').style.backgroundImage = `url(${uploaded_image})`;
        });
        // console.log(this.files[1]);
        reader.readAsDataURL(this.files[0]);
    })
}

function editImg1Step1(position) {
    // an giao dien input & product list
    document.getElementById('add-nick-field-id').style.display = 'none';
    document.getElementById('productlist').style.display = 'none';
    // hien giao dien upload hinh anh
    document.getElementById('modify-img').style.display = 'block';
    document.getElementById('modify-img').innerHTML = `
        <input type='file' id='image_input' >
        <div id='display_image'></div>
        <button type='submit' id='saveImageButton' onclick='saveImageAndTurnBack();'>Save</button>
        <button type='submit' id='cancelButton' onclick='cancelAndTurnBack();'>Cancel</button>
    `;
    const image_input = document.querySelector('#image_input');
    var uploaded_image = '';
    image_input.addEventListener('change', function () {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            // paste dir into local storage 
            // idk how it will worked xD 
            var productDict = JSON.parse(localStorage.getItem('product'));
            // console.log(image_input.value);
            previousDir = productDict[position].anh1;
            let temp = image_input.value;
            temp = temp.replace(`C:\\fakepath\\`, `./`)
            productDict[position].anh1 = temp;
            localStorage.setItem('product', JSON.stringify(productDict));
            // display the img
            uploaded_image = reader.result;
            document.querySelector('#display_image').style.backgroundImage = `url(${uploaded_image})`
        });
        // console.log(this.files[0]);
        reader.readAsDataURL(this.files[0]);
    })
}
function editImg2Step1(position) {
    // an giao dien input & product list
    document.getElementById('add-nick-field-id').style.display = 'none';
    document.getElementById('productlist').style.display = 'none';
    // hien giao dien upload hinh anh
    document.getElementById('modify-img').style.display = 'block';
    document.getElementById('modify-img').innerHTML = `
        <input type='file' id='image_input' >
        <div id='display_image'></div>
        <button type='submit' id='saveImageButton' onclick='saveImageAndTurnBack();'>Save</button>
        <button type='submit' id='cancelButton' onclick='cancelAndTurnBack();'>Cancel</button>
    `;
    const image_input = document.querySelector('#image_input');
    var uploaded_image = '';
    image_input.addEventListener('change', function () {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            // paste dir into local storage 
            // idk how it will worked xD 
            var productDict = JSON.parse(localStorage.getItem('product'));
            // console.log(image_input.value);
            previousDir = productDict[position].anh2;
            let temp = image_input.value;
            temp = temp.replace(`C:\\fakepath\\`, `./`)
            productDict[position].anh2 = temp;
            localStorage.setItem('product', JSON.stringify(productDict));
            // display the img
            uploaded_image = reader.result;
            document.querySelector('#display_image').style.backgroundImage = `url(${uploaded_image})`
        });
        // console.log(this.files[0]);
        reader.readAsDataURL(this.files[0]);
    })
}
function editImg3Step1(position) {
    // an giao dien input & product list
    document.getElementById('add-nick-field-id').style.display = 'none';
    document.getElementById('productlist').style.display = 'none';
    // hien giao dien upload hinh anh
    document.getElementById('modify-img').style.display = 'block';
    document.getElementById('modify-img').innerHTML = `
        <input type='file' id='image_input' >
        <div id='display_image'></div>
        <button type='submit' id='saveImageButton' onclick='saveImageAndTurnBack();'>Save</button>
        <button type='submit' id='cancelButton' onclick='cancelAndTurnBack();'>Cancel</button>
    `;
    const image_input = document.querySelector('#image_input');
    var uploaded_image = '';
    image_input.addEventListener('change', function () {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            // paste dir into local storage 
            // idk how it will worked xD 
            var productDict = JSON.parse(localStorage.getItem('product'));
            // console.log(image_input.value);
            previousDir = productDict[position].anh3;
            let temp = image_input.value;
            temp = temp.replace(`C:\\fakepath\\`, `./`)
            productDict[position].anh3 = temp;
            localStorage.setItem('product', JSON.stringify(productDict));
            // display the img
            uploaded_image = reader.result;
            document.querySelector('#display_image').style.backgroundImage = `url(${uploaded_image})`;
            // CHUA RENDER IMG VE GIAO DIEN NGUOI DUNG TAI DAY
        });
        // console.log(this.files[0]);
        reader.readAsDataURL(this.files[0]);
    })
}
function saveImageAndTurnBack () {
    showOrHideOrFlex('modify-img', 'none');
    showOrHideOrFlex('add-nick-field-id', 'flex');
    showOrHideOrFlex('productlist', 'block');
    displayProductDict();
}
function cancelAndTurnBack(position) {
    var productDict = JSON.parse(localStorage.getItem('product'));
    if (previousDir != '') productDict[position] = previousDir;
    previousDir = '' ;
    showOrHideOrFlex('modify-img', 'none');
    showOrHideOrFlex('add-nick-field-id', 'flex');
    showOrHideOrFlex('productlist', 'block');
}
function discardAnh (position) {
    var productDict = JSON.parse(localStorage.getItem('product'));
    productDict[position].anh = './assets/null.svg';
    localStorage.setItem('product', JSON.stringify(productDict));
    showOrHideOrFlex('modify-img', 'none');
    showOrHideOrFlex('add-nick-field-id', 'flex');
    showOrHideOrFlex('productlist', 'block');
}
function discardAnh1 (position) {
    var productDict = JSON.parse(localStorage.getItem('product'));
    productDict[position].anh1 = './assets/null.svg';
    localStorage.setItem('product', JSON.stringify(productDict));
    showOrHideOrFlex('modify-img', 'none');
    showOrHideOrFlex('add-nick-field-id', 'flex');
    showOrHideOrFlex('productlist', 'block');
}
function discardAnh2 (position) {
    var productDict = JSON.parse(localStorage.getItem('product'));
    productDict[position].anh2 = './assets/null.svg';
    localStorage.setItem('product', JSON.stringify(productDict));
    showOrHideOrFlex('modify-img', 'none');
    showOrHideOrFlex('add-nick-field-id', 'flex');
    showOrHideOrFlex('productlist', 'block');
}
function discardAnh3 (position) {
    var productDict = JSON.parse(localStorage.getItem('product'));
    productDict[position].anh3 = './assets/null.svg';
    localStorage.setItem('product', JSON.stringify(productDict));
    showOrHideOrFlex('modify-img', 'none');
    showOrHideOrFlex('add-nick-field-id', 'flex');
    showOrHideOrFlex('productlist', 'block');
}

// ======================================================
// delete a product from Local Storage with linear searching and confirmation
// accessed by idProductDelete
function deleteProduct(idProductDelete){
    var productDict = JSON.parse(localStorage.getItem('product'));
    for (var i = 0; i < productDict.length; i++)
        if (productDict[i].id == idProductDelete)
            if (confirm('Are you sure?'))
                productDict.splice(i, 1);
    localStorage.setItem('product', JSON.stringify(productDict));
    displayProductDict();
}
var editProductFlag = false ;
var idToEdit = '' ;
var productCounter = 0;
// editProductFlag = true -> edit a product in db
// editProductFlag = false -> add a new product
function editProduct(productOldID) {
    // update the label
    idToEdit = productOldID;
    document.getElementById('add-nick-but').innerHTML = `Submit` ;
    document.getElementById('user-box-1').innerHTML = `New ID: ` ;
    document.getElementById('pass-box-1').innerHTML = 'New name:' ;
    document.getElementById('name-box-1').innerHTML = 'Update old price:' ;
    showUndoBut();
    // document.getElementById('name-box-2').innerHTML = 'Update new price:' ;
    editProductFlag = true;
    addProduct();
}
// add product to db (parse from LocalStorage)
// id: userBox
// ten: passBox
// giacu: nameBox
// giamoi: newDealBox
function addProduct() {
    if (editProductFlag) {
        var productDict = JSON.parse(localStorage.getItem('product'));
        for (var i = 0; i < productDict.length; i++) {
            if (productDict[i].id == idToEdit) {
                var id = document.getElementById('userBox').value;
                var ten = document.getElementById('passBox').value;
                var giacu = document.getElementById('nameBox').value;
                var giamoi = document.getElementById('newDealBox').value;
                for (var j = 0; j < productDict.length; j++)
                    if (productDict[j].id == id) {
                        alert("This ID's already in the database. Try another one please.");
                        return;
                    }
                if (id != ''){
        
                    productDict[i].id = id ;
                    
                    
                }
                   
                if (ten != ''){
                    productDict[i].ten = ten ;
                    
                }

                if (giacu == "" || isNaN(giacu)){
                    alert("Old Price Valid !")
                    
                }else {
                    productDict[i].giacu = giacu ;
                }
                    
                if (giamoi != '' || isNaN(giacu)){
                    alert("New Price Valid!")
                    
                }else{
                    productDict[i].giamoi = giamoi ;
                }
                    
            }
        }
        localStorage.setItem('product', JSON.stringify(productDict));
    } else {
        var productDict = JSON.parse(localStorage.getItem('product'));
        productCounter++;
        var id = document.getElementById('userBox').value;
        var ten = document.getElementById('passBox').value;
        var giacu = document.getElementById('nameBox').value;
        var giamoi = document.getElementById('newDealBox').value;
        for (var j = 0; j < productDict.length; j++)
            if (productDict[j].id == id) {
                    alert("This ID's already in the database. Try another one please.");
                    return;
            }
        if (id =='' || isNaN(id)) {
            alert("Id Valid!");
            return;
        }
        if (ten =='') {
            alert("Enter name pls!");
            return;
        }

        if (giacu =='' || isNaN(giacu)) {
            alert("New Old Valid!");
            return;
        }
        if (giamoi =='' || isNaN(giamoi)) {
            alert("New Price Valid!");
            return;
        }
        var anh = './assets/product/null.svg' ;
        var anh1 = anh, anh2 = anh, anh3 = anh;
        var doanhSo = 0 ;
        var temp = {id, ten, giacu, giamoi, anh, anh1, anh2, anh3, doanhSo};
        productDict.push(temp);
        localStorage.setItem('product', JSON.stringify(productDict));
        alert('Add successful!');
        resetAllForms2();
    }
    displayProductDict();
}
function displayChartInterface() {
    showOrHideOrFlex('userlist', 'none');
    showOrHideOrFlex('productlist', 'none');
    showOrHideOrFlex('modify-img', 'none');
    showOrHideOrFlex('add-nick-field-id', 'none');
    showOrHideOrFlex('statistic-id', 'flex');
    showOrHideOrFlex('quan-ly-don-hang-id', 'none');
    chartFunction();
}
function chartFunction() {
    var productlist = JSON.parse(localStorage.getItem('product'));
    var myLabel = [];
    var myData = [];
    for (let i = 0; i < productlist.length; i++) {
        myLabel.push(productlist[i].ten);
        myData.push(productlist[i].doanhSo);
    }
    document.getElementById('statistic-id').style.height = productlist.length*2 + 'rem';
    drawChart(myLabel, myData, 'myChart');
}
function drawChart (myLabel, myData, idChart) {
    const ctx = document.getElementById(idChart).getContext('2d');
    const myChart1 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: myLabel,
            datasets: [{
                label: '',
                data: myData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function chartFunctionDemo () {
    document.getElementById('radio-1').querySelector('click', () => {
        showOrHideOrFlex('myChart1-wrapper', 'block');
        showOrHideOrFlex('myChart2-wrapper', 'none');
        showOrHideOrFlex('myChart4-wrapper', 'none');
        showOrHideOrFlex('myChart3-wrapper', 'none');
        chartForMen('myChart1');
    });
    document.getElementById('radio-2').addEventListener('click', () => {
        showOrHideOrFlex('myChart1-wrapper', 'none');
        showOrHideOrFlex('myChart2-wrapper', 'block');
        showOrHideOrFlex('myChart4-wrapper', 'none');
        showOrHideOrFlex('myChart3-wrapper', 'none');
        chartForWomen('myChart2');
    });
    document.getElementById('radio-4').addEventListener('click', () => {
        showOrHideOrFlex('myChart1-wrapper', 'none');
        showOrHideOrFlex('myChart2-wrapper', 'none');
        showOrHideOrFlex('myChart4-wrapper', 'block');
        showOrHideOrFlex('myChart3-wrapper', 'none');
        chartForAll('myChart4');
    });
    document.getElementById('radio-3').addEventListener('click', () => {
        showOrHideOrFlex('myChart1-wrapper', 'none');
        showOrHideOrFlex('myChart2-wrapper', 'none');
        showOrHideOrFlex('myChart4-wrapper', 'none');
        showOrHideOrFlex('myChart3-wrapper', 'block');
        chartForPhukien('myChart3');
    });
}
function chartForMen (idChart) {
    var productlist = JSON.parse(localStorage.getItem('product'));
    var myLabel = [];
    var myData = [];
    for (let i = 0; i < productlist.length; i++) 
    if (productlist[i].loai == 'nam') {
        myLabel.push(productlist[i].ten);
        myData.push(productlist[i].doanhSo);
    }
    drawChart1(myLabel, myData, idChart);
}
function chartForWomen (idChart) {
    var productlist = JSON.parse(localStorage.getItem('product'));
    var myLabel = [];
    var myData = [];
    for (let i = 0; i < productlist.length; i++) 
    if (productlist[i].loai == 'nu') {
        myLabel.push(productlist[i].ten);
        myData.push(productlist[i].doanhSo);
    }
    drawChart2(myLabel, myData, idChart);
}
function chartForPhukien (idChart) {
    var productlist = JSON.parse(localStorage.getItem('product'));
    var myLabel = [];
    var myData = [];
    for (let i = 0; i < productlist.length; i++) 
    if (productlist[i].loai == 'phukien') {
        myLabel.push(productlist[i].ten);
        myData.push(productlist[i].doanhSo);
    }
    drawChart4(myLabel, myData, idChart);
}
function chartForBoth (idChart) {
    var productlist = JSON.parse(localStorage.getItem('product'));
    var myLabel = [];
    var myData = [];
    for (let i = 0; i < productlist.length; i++) {
        myLabel.push(productlist[i].ten);
        myData.push(productlist[i].doanhSo);
    }
    drawChart3(myLabel, myData, idChart);
}
//𝐝𝐫𝐚𝐰 𝐜𝐡𝐚𝐫𝐭
function drawChart1 (myLabel, myData, idChart) {
    const ctx = document.getElementById(idChart).getContext('2d');
    const myChart1 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: myLabel,
            datasets: [{
                label: '',
                data: myData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    myChart1[0].destroy;
}
function drawChart2 (myLabel, myData, idChart) {
    const ctx = document.getElementById(idChart).getContext('2d');
    const myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: myLabel,
            datasets: [{
                label: '',
                data: myData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    myChart2[0].destroy();
}
function drawChart4 (myLabel, myData, idChart) {
    const ctx = document.getElementById(idChart).getContext('2d');
    const myChart4 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: myLabel,
            datasets: [{
                label: '',
                data: myData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    myChart4[0].destroy;
}
function drawChart3 (myLabel, myData, idChart) {
    const ctx = document.getElementById(idChart).getContext('2d');
    const myChart3 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: myLabel,
            datasets: [{
                label: '',
                data: myData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    myChart3[0].destroy;
}



function resetAllForms1 () {
    document.getElementById('user-box-form').reset();
    document.getElementById('pass-box-form').reset();
    document.getElementById('name-box1-form').reset();
}
function resetAllForms2 () {
    document.getElementById('user-box-form').reset();
    document.getElementById('pass-box-form').reset();
    document.getElementById('name-box1-form').reset();
    document.getElementById('newDealBox').value = '';
}



//------------------------------------------------------------------------------------------------------------------------------------------
//BILL

var bill_arr = [

    
];     

// ma hoa don 
// ma khach hang 
// ma nv
// ngay hoa don
// hoa don 1 khA nvA 2/12/2021 tongtien
var detailBill_arr = [


];    
   
// ma hoa don 
// ma san pham
// don gia 
//sl 
// thanh tien
// mahd1 maspA dongia : 1.500.000 sl:2 thanh tien : 
// hoadon1 spb .....




function LoadBill() {
   if(localStorage.getItem('bill')===null) {
        localStorage.setItem('bill',JSON.stringify(bill_arr));
     
    }
}

function LoaddetailBill() {
   if(localStorage.getItem('detailbill')===null) {
        localStorage.setItem('detailbill',JSON.stringify(detailBill_arr));
     
    }
}



var bill_arr = JSON.parse(localStorage.getItem('bill'))
function InnerBill(bill_arr){
    var checkout = document.getElementsByClassName('checkout')[0]
    
    var detailBill_arr = JSON.parse(localStorage.getItem('detailbill'))
    checkout.innerHTML = `
    <tr  class="checkout-item"> 
    <th width="150px" height="40px" >Mã đơn hàng</th>
    <th width="150px" height="40px" >Mã khách hàng</th>
    <th width= "300px">Chi tiết</th>
    <th width= "170px">Ngày mua</th>
    <th width= "260px">Phương thức thanh toán</th>
    <th width= "170px">Thành tiền</th>
    <th width= "170px">Trạng thái</th>
    <th width= "170px">Xử lý</th>
    </tr>
    `
    for(let i = 0; i < bill_arr.length; i++){
         var content = document.createElement('tr')
         content.classList.add('checkout-item')
                   var detail = ''
                   for(let j = 0; j < detailBill_arr.length; j++){
                       
                        if(detailBill_arr[j].mahd == bill_arr[i].mahd){
                             
                             detail += `
                             ${detailBill_arr[j].tensp} x ${detailBill_arr[j].sl} 
                         `
                        }
                        
                   }    

                  
                       
                      if(bill_arr[i].xuly == 1) {
                        content.innerHTML = `
                        <th id="bill-num" >
                          ${bill_arr[i].mahd}
                        </th>

                        <th>
                             ${bill_arr[i].makh}
                        </th>
                       
                        <th id="bill-des" >
                          ${ detail}
                        </th>
                       
              
                        <th id="bill-date" >
                            ${bill_arr[i].ngayhd}
                        </th>
              
                        <th id ="bill-trans">
                           <p>Thanh toán khi nhận hàng</p>
                        </th>
              
                        <th id="bill-total" >
                                ${bill_arr[i].tongtien} vnđ
                        </th>
 
                        <th >
                            <p>Đã xử lý</p>
                        </th>
 

                        <th>
                           <input onclick= "Uncheck('${bill_arr[i].mahd}')" type="checkbox" checked >
                        </th>
                        
                        `
                        ;
                      }else {
                        content.innerHTML = `
                        <th id="bill-num" >
                          ${bill_arr[i].mahd}
                        </th>

                        
                        <th>
                             ${bill_arr[i].makh}
                        </th>
                       
                        <th id="bill-des" >
                          ${ detail}
                        </th>
                       
              
                        <th id="bill-date" >
                            ${bill_arr[i].ngayhd}
                        </th>
              
                        <th id ="bill-trans">
                           <p>Thanh toán khi nhận hàng</p>
                        </th>
              
                        <th id="bill-total" >
                                ${bill_arr[i].tongtien} vnđ
                        </th>


                        <th >
                                <p>Chưa xử lý</p>
                        </th>
 
                        
                        <th>
                           <input onclick="Billcheck('${bill_arr[i].mahd}')" type="checkbox" >
                        </th>
                        
                        `
                      }
                       
                      
   
                        
               
             
    
              
         
                
            checkout.appendChild(content); 
           
         }

           
}

function LoadUser() {
    if(localStorage.getItem('user')===null) {
         localStorage.setItem('user',JSON.stringify(userArray));
      
     }
}

userArray = {

}


  function Billcheck(name){
     
    alert('Hóa đơn đã được xác nhận!')
  var bill_arr = JSON.parse(localStorage.getItem('bill'))
  var detailBill_arr = JSON.parse(localStorage.getItem('detailbill'))
  console.log(name)
  for(var i=0; i<bill_arr.length; i++){
      if(bill_arr[i].mahd == name){
            bill_arr[i].xuly = 1
            localStorage.setItem('bill',JSON.stringify(bill_arr));
          break
            
      }
  }


InnerBill(bill_arr)

}

function Uncheck(name) {
alert('Đã hủy xác nhận!')
var bill_arr = JSON.parse(localStorage.getItem('bill'))
console.log(name)
for(var i=0; i<bill_arr.length; i++){
  if(bill_arr[i].mahd == name){
        bill_arr[i].xuly = 0
        localStorage.setItem('bill',JSON.stringify(bill_arr));
      break
        
  }
}

InnerBill(bill_arr)

}

function searchBill(){
    var bill_arr = JSON.parse(localStorage.getItem('bill'))
	var date = document.getElementById('date').value;
    var date_tmp = []
    for(var i=0; i<bill_arr.length; i++){
        if(bill_arr[i].ngayhd == date ){
            date_tmp.push(bill_arr[i])
        }
    }

    console.log(date_tmp)
    InnerBill(date_tmp)
}

