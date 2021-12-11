var temp = 0 ;
function showColNavBar() {
    ++temp ;
    if (temp%2==1) {
        document.getElementById('col-nav-bar-id').style.marginLeft = '-20rem' ;
        // document.getElementById('col-nav-bar-id').style.display = 'none' ;
        document.getElementById('cont-view-id').style.marginLeft = '1rem';
        document.getElementById('footer-id').style.marginLeft = '1rem';
    } else {
        document.getElementById('col-nav-bar-id').style.marginLeft = '0rem' ;
        // document.getElementById('col-nav-bar-id').style.display = 'flex' ;
        document.getElementById('cont-view-id').style.marginLeft = '19rem';
        document.getElementById('footer-id').style.marginLeft = '19rem';
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
	    <div style="margin-left: 13rem"><b>Username</b></div>
	    <div style="margin-left: 21rem"><b>Password</b></div>
	    <div style="margin-left: 29rem"><b>Delete</b></div>
        <div style="margin-left: 33rem"><b>Edit</b></div>
        <div style="margin-left: 36rem"><b>Date created</b></div>
        <div style="margin-left: 44rem"><b>User Type</b></div>
    </div>`;
    document.getElementById('userlist').style.height = UserDict.length*9 + 'rem';
	for(var i = 0 ; i < UserDict.length; i++)
		cache += `<div class='table-control'>
            <div style="margin-left: 0rem"> ${String(i+1)} </div>
            <div style="margin-left: 2.5rem">${UserDict[i].email} </div>
            <div style="margin-left: 13rem">${UserDict[i].username}</div>
            <div style="margin-left: 21rem">${UserDict[i].password}</div>
            <button style="margin-left: 30rem" id="deletebut${i}" class="delete" onClick="deleteUser('${UserDict[i].username}')"><box-icon name='x'></box-icon></button>
            <button style="margin-left: 33rem" id="editbut" class="edit" onClick="editUser('${UserDict[i].username}')"><box-icon type='solid' name='edit'></box-icon></button>
            <div style="margin-left: 36rem">${UserDict[i].datesignup}</div>
            <button class='user-type-but-${UserDict[i].userType}' id='user-type-but-id-${i}' onclick="switchUserType(${i})">${UserDict[i].userType}</button>
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
                if (id == '' || isNaN(id)){
                    alert("ID Valid !")
                }else {
                    productDict[i].id = id ;
                }
                   
                if (ten != '')
                    productDict[i].ten = ten ;
                if (giacu == "" || isNaN(giacu)){
                    alert("Old Price Valid !")
                }else {
                    productDict[i].giacu = giacu ;
                }
                    
                if (giamoi == '' || isNaN(giamoi)){
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


function InnerBill(){
    var checkout = document.getElementsByClassName('checkout')[0]
    var bill_arr = JSON.parse(localStorage.getItem('bill'))
    var detailBill_arr = JSON.parse(localStorage.getItem('detailbill'))
    checkout.innerHTML = `
    <tr  class="checkout-item"> 
    <th width="170px" height="40px" >Mã đơn hàng</th>
    <th width= "170px">Chi tiết</th>
    <th width= "170px">Ngày mua</th>
    <th width= "170px">Đơn vị vận chuyển</th>
    <th width= "170px">Thành tiền</th>
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
                             ${detailBill_arr[j].masp} x ${detailBill_arr[j].sl} 
                         `
                        }
                        
                   }    

                  
                       
                      if(bill_arr[i].xuly == 1) {
                        content.innerHTML = `
                        <th id="bill-num" >
                          ${bill_arr[i].mahd}
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
 
                        
                        <th>
                           <input onclick="Billcheck('${bill_arr[i].mahd}')" type="checkbox" checked >
                        </th>
                        
                        `
                        ;
                      }else {
                        content.innerHTML = `
                        <th id="bill-num" >
                          ${bill_arr[i].mahd}
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

var product_arr = [
    {
        id : 1,
        ten : "Black Pink",
        giacu : "4.500.000đ", 
        giamoi : "3.200.000đ",
        anh : "./img/nam1.jpg",
        anh1: "./img/nam1.1.jpg",
        anh2: "./img/nam1.2.jpg",
        anh3: "./img/nam1.3.jpg",
        loai : "nam",
        masp : 'DHN01',
        doanhSo: 30
        
        
    },
  
    {
        id : 2,
        ten : "Slate",
        giacu : "", 
        giamoi : "5.600.000đ",
        anh: "./img/nam2.jpg",
        anh1: "./img/nam2.1.jpg",
        anh2: "./img/nam2.2.jpg",
        anh3: "./img/nam2.3.jpg",
        loai : "nam",
        masp : 'DHN02',
        doanhSo: 30
    },
  
  
    {
        id : 3,
        ten : "Desert",
        giacu : "5.600.000đ", 
        giamoi : "4.100.000đ",
        anh : "./img/nam3.jpg",
        anh1 : "./img/nam3.1.jpg",
        anh2 : "./img/nam3.2.jpg",
        anh3 : "./img/nam3.3.jpg",
        loai : "nam",
        masp : 'DHN03',
        doanhSo: 20,
    },
  
  
    {
         id : 4,
         ten: "Opar",
         giacu : "6.500.000đ", 
         giamoi : "4.900.000đ",
         anh : "./img/nam4.jpg",
         anh1 : "./img/nam4.1.jpg",
         anh2 : "./img/nam4.2.jpg",
         anh3 : "./img/nam4.3.jpg",
         loai : "nam",
         masp : 'DHN04',
         doanhSo: 10,
    },
  
    {
         id : 5,
         ten : "Champion Gold",
         giacu : "6.000.000đ", 
         giamoi : "5.700.000đ",
         anh : "./img/nam5.jpg",
         anh1 : "./img/nam5.1.jpg",
         anh2 : "./img/nam5.2.jpg",
         anh3 : "./img/nam5.3.jpg",
         loai : "nam",
         masp : 'DHN05',
         doanhSo: 50,
    },
  
  
    {
         id : 6,
         ten : "Black Rose Leather",
         giacu : "6.500.000đ", 
         giamoi : "4.900.000đ",
         anh : "./img/nam6.jpg",
         anh1 : "./img/nam6.1.jpg",
         anh2 : "./img/nam6.2.jpg",
         anh3 : "./img/sp7-4.jpg",
         loai: "nam",
         masp : 'DHN06',
         doanhSo: 40
    },
  
    {
         id : 7,
         ten : "Axiom",
         giacu : "6.500.000đ", 
         giamoi : "5.000.000đ",
         anh : "./img/nam7.jpg",
         anh1 : "./img/nam7.1.jpg",
         anh2 : "./img/nam7.2.jpg",
         anh3 : "./img/nam7.3.jpg",
         loai : "nam",
         masp : 'DHN07',
         doanhSo: 30,
    },
  
  
    {
         id : 8,
         ten : "Ralley Green Gunmetal",
         giacu : "6.700.000đ", 
         giamoi : "5.700.000đ",
         anh : "./img/nam8.jpg",
         anh1 : "./img/nam8.1.jpg",
         anh2 : "./img/nam8.2.jpg",
         anh3 : "./img/nam8.3.jpg",
         loai: "nam",
         masp : 'DHN08',
         doanhSo: 25,
    },
  
   
  
   
  
  
  
      {
         id : 9,
         ten : "Coronoda Blanc",
         giacu : "3.700.000đ", 
         giamoi : "3.500.000đ",
         anh : "./img/nu1.jpg",
         anh1 : "./img/nu1.1.jpg",
         anh2 : "./img/nu1.2.jpg",
         anh3 : "./img/nu1.3.jpg",
         loai : "nu",
         masp : 'DHG01',
         doanhSo: 10,
    },
  
  
  
    {
         id : 10,
         ten : "Bloom Rose",
         giacu : "",
         giamoi : "4.400.000đ",
         anh : "./img/nu2.jpg",
         anh1 : "./img/nu2.1.jpg",
         anh2 : "./img/nu2.2.jpg",
         anh3 : "./img/nu2.3.jpg",
         loai : "nu",
         masp : 'DHG02',
         doanhSo: 27,
    },
  
  
    {
         id : 11,
         ten : "Rodeo",
         giacu : "6.700.000đ", 
         giamoi : "5.700.000đ",
         anh : "./img/nu3.jpg",
         anh1 : "./img/nu3.1.jpg",
         anh2 : "./img/nu3.2.jpg",
         anh3 : "./img/nu3.3.jpg",
         loai : "nu",
         masp : 'DHG03',
         doanhSo: 70,
    },
  
  
  
     {
         id : 12,
         ten : "Ashen Taupe",
         giacu : "4.600.000đ", 
         giamoi : "3.200.000đ",
         anh : "./img/nu4.jpg",
         anh1 : "./img/nu4.1.jpg",
         anh2 : "./img/nu4.2.jpg",
         anh3 : "./img/nu4.3.jpg",
         loai : "nu",
         masp : 'DHG04',
         doanhSo: 80
    },
  
  
  
    {
         id : 13,
         ten : "Aubrey",
         giacu : "4.500.000đ", 
         giamoi : "3.800.000đ",
         anh : "./img/nu5.jpg",
         anh1 : "./img/nu5.1.jpg",
         anh2 : "./img/nu5.2.jpg",
         anh3 : "./img/nu5.3.jpg",
         loai : "nu",
         masp : 'DHG05',
         doanhSo: 10,
    },
  
  
      {
         id : 14,
         ten : "Hayden",
         giacu: "",
         giamoi : "4.500.000đ",
         anh : "./img/nu6.jpg",
         anh1 : "./img/nu6.1.jpg",
         anh2 : "./img/nu6.2.jpg",
         anh3 : "./img/nu6.3.jpg",
         loai : "nu",
         masp : 'DHG06',
         doanhSo: 20,
    },
  
  
    {
         id : 15,
         ten : "Sherry",
         giacu : "",
         giamoi : "3.100.000đ",
         anh : "./img/nu7.jpg",
         anh1 : "./img/nu7.1.jpg",
         anh2 : "./img/nu7.2.jpg",
         anh3 : "./img/nu7.3.jpg",
         loai : "nu",
         masp : 'DHG07',
         doanhSo: 39,
    },
  
  
  
    {
         id : 16,
         ten: "Belamar",
         giacu : "",
         giamoi : "3.900.000đ",
         anh :"./img/nu8.jpg",
         anh1 : "./img/nu8.1.jpg",
         anh2 : "./img/nu8.2.jpg",
         anh3 : "./img/nu8.3.jpg",
         loai : "nu",
         masp : 'DHG08',
         doanhSo: 28,
    },
  
    
  
    {
         id : 17,
         ten : "Minimal Cuff",
         giacu : "",
         giamoi : "1.600.000đ",
         anh : "./img/phukien1.jpg",
         anh1 : "./img/phukien1.1.jpg",
         anh2 : "./img/phukien1.2.jpg",
         anh3 : "./img/phukien1.3.jpg",
         loai : "phukien",
         masp : 'PK01',
         doanhSo: 34
    },
  
  
    {
         id : 18,
         ten : "Twist Cuff",
         giacu: "",
         giamoi : "2.400.000đ",
         anh : "./img/phukien2.jpg",
         anh1 : "./img/phukien2.1.jpg",
         anh2 : "./img/phukien2.2.jpg",
         anh3 : "./img/phukien2.3.jpg",
         loai : "phukien",
         masp : 'PK02',
         doanhSo: 30
    },
  
  
    {
         id : 19,
         ten: "Crown Cuff",
         giacu : "",
         giamoi : "2.400.000đ",
         anh : "./img/phukien3.jpg",
         anh1 : "./img/phukien3.1.jpg",
         anh2 : "./img/phukien3.2.jpg",
         anh3 : "./img/phukien3.3.jpg",
         loai : "phukien",
         masp : 'PK03',
         doanhSo: 45
    },
  
  
  
    {
         id : 20,
         ten : "Charm Cuff",
         giacu : "3.000.000đ",
         giamoi : "2.400.000đ",
         anh : "./img/phukien4.jpg",
         anh1 : "./img/phukien4.1.jpg",
         anh2 : "./img/phukien4.2.jpg",
         anh3 : "./img/phukien4.3.jpg",
         loai : "phukien",
         masp : 'PK04',
         doanhSo: 49
    },
  
  
  
    {
         id : 21,
         ten : "Origin Bracelet",
         giacu : "",
         giamoi : "2.800.000đ",
         anh : "./img/phukien5.jpg",
         anh1 : "./img/phukien5.1.jpg",
         anh2 : "./img/phukien5.2.jpg",
         anh3 : "./img/phukien5.3.jpg",
         loai : "phukien",
         masp : 'PK05',
         doanhSo: 38
    },
  
  
    
     
  ];


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

    
  }


  