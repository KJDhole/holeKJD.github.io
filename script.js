// Simulate user data
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

// Simulate express delivery data
let expressData = [];

//Login function
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        alert ( 'Login successful' ) ;
    } else {
                alert('用户名或密码错误');
    }
}

// 注册功能
function register() {
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    const existingUser = users.find(u => u.username === newUsername);

    if (existingUser) {
        alert('用户名已存在');
    } else {
        users.push({ username: newUsername, password: newPassword });
        alert('注册成功');
    }
}

// 提交快递信息
function submitExpress() {
    const company = document.getElementById('company').value;
    const trackingNumber = document.getElementById('trackingNumber').value;
    const pickupAddress = document.getElementById('pickupAddress').value;
    const deliveryAddress = document.getElementById('deliveryAddress').value;

    expressData.push({
        company,
        trackingNumber,
        pickupAddress,
        deliveryAddress
    });

    saveData();
    renderExpressList();
}

// 保存数据到JSON文件
function saveData() {
    const jsonData = JSON.stringify(expressData);
    localStorage.setItem('expressData', jsonData);
}

// 从JSON文件加载数据
function loadData() {
    const jsonData = localStorage.getItem('expressData');
    expressData = jsonData ? JSON.parse(jsonData) : [];
}

//Render the courier information list
function renderExpressList() {
    const tableBody = document.getElementById('expressTableBody');
    tableBody. innerHTML = '' ;

    expressData.forEach((item, index) => {
        const row = document.createElement('tr');
        row. innerHTML = `
            <td>${item.company}</td>
            <td>${item.trackingNumber}</td>
            <td>${item.pickupAddress}</td>
            <td>${item.deliveryAddress}</td>
            <td>
                <button onclick="editExpress(${index})">编辑</button>
                <button onclick="deleteExpress(${index})">删除</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// 编辑快递信息
function editExpress(index) {
    const item = expressData[index];
    const  company = prompt ( 'Please enter the courier company' , item. company ) ;
    const  trackingNumber = prompt ( 'Please enter the express delivery number' , item. trackingNumber ) ;
    const  pickupAddress = prompt ( 'Please enter the pickup address' , item. pickupAddress ) ;
    const deliveryAddress = prompt('请输入送货地址', item.deliveryAddress);

    if (company && trackingNumber && pickupAddress && deliveryAddress) {
        expressData[index] = {
            company,
            trackingNumber,
            pickupAddress,
            deliveryAddress
        };
        saveData();
        renderExpressList();
    }
}

// 删除快递信息
function deleteExpress(index) {
    if (confirm('确定要删除这条快递信息吗？')) {
        expressData.splice(index, 1);
        saveData();
        renderExpressList();
    }
}

// 加载页面时加载数据
loadData();
renderExpressList();
