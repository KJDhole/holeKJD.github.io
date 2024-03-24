// 模拟用户数据
常量 用户= [
    { 用户名: 'user1' ,密码: 'password1'  } ,
    { 用户名：'用户2'，密码：'密码2'  }
] ;

// 模拟快递数据
让 expressData = [ ] ;

// 登录功能
函数 登录( )  {
    const 用户名= 文档。getElementById ( '用户名' )。价值;
    常量 密码=文档。getElementById ( '密码' )。价值;

    常量 用户=用户。find ( u => u.用户名=== 用户名 && u.密码=== 密码) ;

    如果 （用户） {
        Alert ( '登录成功' ) ;
    } 别的 {
        警报        alert('用户名或密码错误');
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

// 渲染快递信息列表
函数renderExpressList  (  )   {
    const   tableBody =文档。getElementById  (  'expressTableBody'  ) ;
    表体。 内部 HTML = '' ;

    表达数据。forEach  (  (项目,索引) => {
        常量行=文档。创建元素(  'tr'  ) ;
        排。内部HTML = `
            <td> ${项目。公司} </td>
            <td> ${项目。追踪号码} </td>
            <td> ${项目。取货地址} </td>
            <td> ${项目。交货地址} </td>
            <td>
                <button onclick="editExpress( ${ index } )">编辑</button>
                <button onclick="deleteExpress( ${ index } )">删除</button>
            </td>
        ` ;
        表体。追加子级（行）；
    }  ）；
}

// 编辑快递信息
函数 editExpress （索引）{
    const     item = expressData [索引] ;
    const     company = prompt    (    '请输入快递公司' ,  item.company ) ;
    consttrackingNumber = prompt (  '  请输入快递单号' , item.trackingNumber )    ;
    constpickupAddress= prompt  (  '请输入取货地址' ,item.pickupAddress ) ; 
    const   DeliveryAddress = prompt  (  '请输入发货地址' , item.deliveryAddress )  ;

    if   (公司 && 跟踪号码 && 取货地址 && 送货地址)   {
        表达式数据[索引] = {
            公司，
            追踪号码，
            取货地址,
            邮寄地址
        } ;
        保存数据（） ;
        渲染ExpressList  (  ) ;
    }
}

// 删除快递信息
函数deleteExpress   (索引)     {
    if      (     confirm     (     '确定要删除这条快递信息吗？'     )     )      {
        表达数据。拼接（索引，1 ）；
        保存数据（） ;
        渲染ExpressList     (    ) ;
    }
}

// 加载页面时加载数据
加载数据（）；
渲染ExpressList   (  ) ;
