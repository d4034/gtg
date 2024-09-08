document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();  // منع التحديث الافتراضي للصفحة

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // بيانات تسجيل الدخول الوهمية
    const validUsername = "as3g_as";
    const validPassword = "as3g_xg";

    if (username === validUsername && password === validPassword) {
        // إذا كانت بيانات الدخول صحيحة
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerText = 'Login successful! Redirecting...';

        // إعادة التوجيه إلى صفحة أخرى بعد تسجيل الدخول بنجاح
        setTimeout(() => {
            window.location.href = "dashboard.html";  // توجيه إلى الصفحة الجديدة
        }, 2000);  // تأخير بسيط قبل إعادة التوجيه
    } else {
        // إذا كانت بيانات الدخول غير صحيحة
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerText = 'Invalid username or password.';
    }
});
const showPasswordButton = document.getElementById('showPasswordButton');

showPasswordButton.addEventListener('click', function() {
    passwordContainer.style.display = 'flex';
});
// قائمة المستخدمين المتصلين
let onlineUsers = [];

// الحصول على عنصر قائمة المستخدمين المتصلين
const userList = document.getElementById('userList');

// إضافة مستخدم جديد إلى القائمة
function addUserToOnlineList(user) {
    onlineUsers.push(user); // إضافة المستخدم إلى المصفوفة
    const userItem = document.createElement('li'); // إنشاء عنصر جديد لقائمة المتصلين
    userItem.textContent = user; // إضافة اسم المستخدم إلى العنصر
    userList.appendChild(userItem); // إضافة العنصر إلى قائمة المستخدمين المتصلين
}

// عندما يتم تسجيل اسم المستخدم
const setNameButton = document.getElementById('setNameButton'); // زر تعيين الاسم
const userNameInput = document.getElementById('userNameInput'); // حقل إدخال الاسم

setNameButton.addEventListener('click', function() {
    const userName = userNameInput.value.trim(); // الحصول على الاسم من حقل الإدخال
    if (userName) {
        alert(`تم تسجيل الاسم: ${userName}`);
        addUserToOnlineList(userName); // إضافة المستخدم إلى قائمة المتصلين
        userNameInput.value = ''; // تفريغ حقل الاسم بعد التسجيل
    } else {
        alert('الرجاء إدخال اسم.');
    }
});
