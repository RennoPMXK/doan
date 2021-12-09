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
    alert('done');
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
    document.getElementById('name-box-1').innerHTML = 'Fullname:';
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
var UserDict = [{
        username: 'admin1001', password: 'admin111111',
        fullname: 'Nguyen Van A', datesignup: '24/11/2021',
        userType: 'Admin'
    }, {
        username: 'admin2002', password: 'admin22222',
        fullname: 'Nguyen Van B', datesignup: '28/07/2021',
        userType: 'Admin'
    }, {
        username: 'user1001', password: 'user111111',
        fullname: 'Nguyen Van C', datesignup: '16/03/2021',
        userType: 'Customer'
    }, {
        username: 'user1002', password: 'user222222',
        fullname: 'Nguyen Van C', datesignup: '15/03/2021',
        userType: 'Spectator',
    }
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
	    <div style="margin-left: 2.5rem"><b>Name</b></div>
	    <div style="margin-left: 13rem"><b>Username</b></div>
	    <div style="margin-left: 21rem"><b>Password</b></div>
	    <div style="margin-left: 29rem"><b>Delete</b></div>
        <div style="margin-left: 33rem"><b>Edit</b></div>
        <div style="margin-left: 36rem"><b>Date created</b></div>
        <div style="margin-left: 44rem"><b>User Type</b></div>
    </div>`;
    document.getElementById('userlist').style.height = UserDict.length*2.4 + 'rem';
	for(var i = 0 ; i < UserDict.length; i++)
		cache += `<div class='table-control'>
            <div style="margin-left: 0rem"> ${String(i+1)} </div>
            <div style="margin-left: 2.5rem">${UserDict[i].fullname} </div>
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
    document.getElementById('name-box-1').innerHTML = 'New name:' ;
    document.getElementById('undo-but').style.display = 'block' ;
    document.getElementById('add-nick-but').addEventListener("click", () => {
        var userDict = JSON.parse(localStorage.getItem('user'));
        var username = document.getElementById('userBox').value;
        var password = document.getElementById('passBox').value;
        var fullname = document.getElementById('nameBox').value;
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
        if (fullname!='')
            userDict[position].fullname = fullname ;
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
    var username = document.getElementById('this-username').value;
    localStorage.removeItem('user');
	localStorage.removeItem('product');
    // chua xong 
}

function createProduct() {
    if (localStorage.getItem('product') === null) 
        localStorage.setItem('product',JSON.stringify(product_arr));
}
var product_arr = [{
        id : 1,
        ten : "Black Pink",
        giacu : "4.500.000đ", 
        giamoi : "3.200.000đ",
        anh : "./assets/product/nam1.jpg",
        anh1: "./assets/product/nam1.1.jpg",
        anh2: "./assets/product/nam1.2.jpg",
        anh3: "./assets/product/nam1.3.jpg",
        doanhSo: 45,
        loai : "nam"
    }, {
        id : 2,
        ten : "Slate",
        giacu : "", 
        giamoi : "5.600.000đ",
        anh: "./assets/product/nam2.jpg",
        anh1: "./assets/product/nam2.1.jpg",
        anh2: "./assets/product/nam2.2.jpg",
        anh3: "./assets/product/nam2.3.jpg",
        doanhSo: 23,
        loai : "nam"
    }, {
        id : 3,
        ten : "Desert",
        giacu : "5.600.000đ", 
        giamoi : "4.100.000đ",
        anh : "./assets/product/nam3.jpg",
        anh1 : "./assets/product/nam3.1.jpg",
        anh2 : "./assets/product/nam3.2.jpg",
        anh3 : "./assets/product/nam3.3.jpg",
        doanhSo: 17,
        loai : "nam"
    }, {
        id : 4,
        ten: "Opar",
        giacu : "6.500.000đ", 
        giamoi : "4.900.000đ",
        anh : "./assets/product/nam4.jpg",
        anh1 : "./assets/product/nam4.1.jpg",
        anh2 : "./assets/product/nam4.2.jpg",
        anh3 : "./assets/product/nam4.3.jpg",
        doanhSo: 13,
        loai : "nam"
    }, {
        id : 5,
        ten : "Champion Gold",
        giacu : "6.000.000đ", 
        giamoi : "5.700.000đ",
        anh : "./assets/product/nam5.jpg",
        anh1 : "./assets/product/nam5.1.jpg",
        anh2 : "./assets/product/nam5.2.jpg",
        anh3 : "./assets/product/nam5.3.jpg",
        doanhSo: 21,
        loai : "nam"
    }, {
        id : 6,
        ten : "Black Rose Leather",
        giacu : "6.500.000đ", 
        giamoi : "4.900.000đ",
        anh : "./assets/product/nam6.jpg",
        anh1 : "./assets/product/nam6.1.jpg",
        anh2 : "./assets/product/nam6.2.jpg",
        anh3 : "./assets/product/sp7-4.jpg",
        doanhSo: 9,
        loai: "nam"
    }, {
        id : 7,
        ten : "Axiom",
        giacu : "6.500.000đ", 
        giamoi : "5.000.000đ",
        anh : "./assets/product/nam7.jpg",
        anh1 : "./assets/product/nam7.1.jpg",
        anh2 : "./assets/product/nam7.2.jpg",
        anh3 : "./assets/product/nam7.3.jpg",
        doanhSo: 18,
        loai : "nam"
    }, {
        id : 8,
        ten : "Ralley Green Gunmetal",
        giacu : "6.700.000đ", 
        giamoi : "5.700.000đ",
        anh : "./assets/product/nam8.jpg",
        anh1 : "./assets/product/nam8.1.jpg",
        anh2 : "./assets/product/nam8.2.jpg",
        anh3 : "./assets/product/nam8.3.jpg",
        doanhSo: 20,
        loai: "nam"
    }, {
    id : 1,
        ten : "Black Pink",
        giacu : "4.500.000đ", 
        giamoi : "3.200.000đ",
        anh : "./assets/product/nam1.jpg",
        anh1: "./assets/product/nam1.1.jpg",
        anh2: "./assets/product/nam1.2.jpg",
        anh3: "./assets/product/nam1.3.jpg",
        doanhSo: 33,
        loai : "nam"
    }, {
        id : 2,
        ten : "Slate",
        giacu : "", 
        giamoi : "5.600.000đ",
        anh: "./assets/product/nam2.jpg",
        anh1: "./assets/product/nam2.1.jpg",
        anh2: "./assets/product/nam2.2.jpg",
        anh3: "./assets/product/nam2.3.jpg",
        doanhSo: 57,
        loai : "nam"
    }, {
        id : 3,
        ten : "Desert",
        giacu : "5.600.000đ", 
        giamoi : "4.100.000đ",
        anh : "./assets/product/nam3.jpg",
        anh1 : "./assets/product/nam3.1.jpg",
        anh2 : "./assets/product/nam3.2.jpg",
        anh3 : "./assets/product/nam3.3.jpg",
        doanhSo: 17,
        loai : "nam"
    }, {
        id : 4,
        ten: "Opar",
        giacu : "6.500.000đ", 
        giamoi : "4.900.000đ",
        anh : "./assets/product/nam4.jpg",
        anh1 : "./assets/product/nam4.1.jpg",
        anh2 : "./assets/product/nam4.2.jpg",
        anh3 : "./assets/product/nam4.3.jpg",
        doanhSo: 15,
        loai : "nam"
    }, {
        id : 9,
        ten : "Coronoda Blanc",
        giacu : "3.700.000đ", 
        giamoi : "3.500.000đ",
        anh : "./assets/product/nu1.jpg",
        doanhSo: 9,
        loai : "nu"
    }, {
        id : 10,
        ten : "Bloom Rose",
        giacu : "",
        giamoi : "4.400.000đ",
        anh : "./assets/product/nu2.jpg",
        doanhSo: 23,
        loai : "nu"
    }, {
        id : 11,
        ten : "Rodeo",
        giacu : "6.700.000đ", 
        giamoi : "5.700.000đ",
        anh : "./assets/product/nu3.jpg",
        doanhSo: 30,
        loai : "nu"
    }, {
        id : 12,
        ten : "Ashen Taupe",
        giacu : "4.600.000đ", 
        giamoi : "3.200.000đ",
        anh : "./assets/product/nu4.jpg",
        doanhSo: 12,
        loai : "nu"
    }, {
        id : 13,
        ten : "Aubrey",
        giacu : "4.500.000đ", 
        giamoi : "3.800.000đ",
        anh : "./assets/product/nu5.jpg",
        doanhSo: 23,
        loai : "nu"
    }, {
        id : 14,
        ten : "Hayden",
        giacu: "",
        giamoi : "4.500.000đ",
        anh : "./assets/product/nu6.jpg",
        doanhSo: 23,
        loai : "nu"
    }, {
        id : 15,
        ten : "Sherry",
        giacu : "",
        giamoi : "3.100.000đ",
        anh : "./assets/product/nu7.jpg",
        doanhSo: 24,
        loai : "nu"
    }, {
        id : 16,
        ten: "Belamar",
        giacu : "",
        giamoi : "3.900.000đ",
        anh :"./assets/product/nu8.jpg",
        doanhSo: 1,
        loai : "nu"
    }, {
       id : 10,
       ten : "Bloom Rose",
       giacu : "",
       giamoi : "4.400.000đ",
       anh : "./assets/product/nu2.jpg",
       doanhSo: 14,
       loai : "nu"
    }, {
       id : 11,
       ten : "Rodeo",
       giacu : "6.700.000đ", 
       giamoi : "5.700.000đ",
       anh : "./assets/product/nu3.jpg",
       doanhSo: 0,
       loai : "nu"
    }, {
       id : 12,
       ten : "Ashen Taupe",
       giacu : "4.600.000đ", 
       giamoi : "3.200.000đ",
       anh : "./assets/product/nu4.jpg",
       doanhSo: 11,
       loai : "nu"
    }, {
       id : 13,
       ten : "Aubrey",
       giacu : "4.500.000đ", 
       giamoi : "3.800.000đ",
       anh : "./assets/product/nu5.jpg",
       doanhSo: 13,
       loai : "nu"
    }, {
       id : 14,
       ten : "Hayden",
       giacu: "",
       giamoi : "4.500.000đ",
       anh : "./assets/product/nu6.jpg",
       doanhSo: 27,
       loai : "nu"
    }, {
        id : 17,
        ten : "Minimal Cuff",
        giacu : "",
        giamoi : "1.600.000đ",
        anh : "./assets/product/phukien1.jpg",
        doanhSo: 13,
        loai : "phukien"
    }, {
        id : 18,
        ten : "Twist Cuff",
        giacu: "",
        giamoi : "2.400.000đ",
        anh : "./assets/product/phukien2.jpg",
        doanhSo: 14,
        loai : "phukien"
    }, {
        id : 19,
        ten: "Crown Cuff",
        giacu : "",
        giamoi : "2.400.000đ",
        anh : "./assets/product/phukien3.jpg",
        doanhSo: 37,
        loai : "phukien"
    }, {
        id : 20,
        ten : "Charm Cuff",
        giacu : "3.000.000đ",
        giamoi : "2.400.000đ",
        anh : "./assets/product/phukien4.jpg",
        doanhSo: 12,
        loai : "phukien"
    }, {
        id : 21,
        ten : "Origin Bracelet",
        giacu : "",
        giamoi : "2.800.000đ",
        anh : "./assets/product/phukien5.jpg",
        doanhSo: 7,
        loai : "phukien"
    },
];

// user box 1 : id
// pass box 1 : name 
// name box 1 : old deal 
// something new : new deal
function displayProductDict() {
    showOrHideOrFlex('statistic-id', 'none');
	var productDict = JSON.parse(localStorage.getItem('product'));
	var cache=
    `<div class="table-control">
	    <div style="margin-left: 0rem"><b>ID</b></div>
	    <div style="margin-left: 2.5rem"><b>Name</b></div>
	    <div style="margin-left: 16rem"><b>Old deal</b></div>
	    <div style="margin-left: 24rem"><b>New deal</b></div>
	    <div style="margin-left: 31rem"><b>Delete</b></div>
        <div style="margin-left: 36rem"><b>Edit</b></div>
        <div style="margin-left: 40rem"><b>Edit Img</b></div>
    </div>`;
    document.getElementById('productlist').style.height = productDict.length*3.5 + 'rem';
	for (var i = 0 ; i < productDict.length; i++)
		cache += `<div class='table-control'>
            <div style="margin-left: 0rem"> ${productDict[i].id} </div>
            <div style="margin-left: 2.5rem">${productDict[i].ten} </div>
            <div style="margin-left: 16rem">${productDict[i].giacu}</div>
            <div style="margin-left: 24rem">${productDict[i].giamoi}</div>
            <button style="margin-left: 31.5rem" id="deletebut${i}" class="delete" onClick="deleteProduct('${productDict[i].id}')"><box-icon name='x'></box-icon></button>
            <button style="margin-left: 36rem" id="editbut" class="edit" onClick="editProduct('${i}')"><box-icon type='solid' name='edit'></box-icon></button>
            <button style="margin-left: 39rem" id="editImg-id" class="editImg" onClick="editImgStep1('${i}')"><i class="fas fa-plus"></i></button>
            <button style="margin-left: 1rem" id="editImg1-id" class="editImg" onClick="editImg1Step1('${i}')"><i class="fas fa-plus"></i></button>
            <button style="margin-left: 1rem" id="editImg2-id" class="editImg" onClick="editImg2Step1('${i}')"><i class="fas fa-plus"></i></button>
            <button style="margin-left: 1rem" id="editImg3-id" class="editImg" onClick="editImg3Step1('${i}')"><i class="fas fa-plus"></i></button>
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
                if (id != '')
                    productDict[i].id = id ;
                if (ten != '')
                    productDict[i].ten = ten ;
                if (giacu != '')
                    productDict[i].giacu = giacu ;
                if (giamoi != '')
                    productDict[i].giamoi = giamoi ;
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
        if (id =='') {
            alert("Enter id pls!");
            return;
        }
        if (ten =='') {
            alert("Enter name pls!");
            return;
        }
        if (giamoi =='') {
            alert("Enter new price pls!");
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
    document.getElementById('name-box2-form').reset();
}


/*
bill_arr
    mahd: any parameter,
    makh: any parameter,
    manv: ,
    ngayhd,
    tongtien

detailBill_arr: [{
    mahd: any parameter,
    makh: any parameter,
    masp: product_arr[index].masp,
    dongia: number, 
    sl: any,
    thanhtien: price*quantity (numer*any),

}]
*/