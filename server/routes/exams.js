
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

// إنشاء تطبيق Express
const app = express();

// تفعيل CORS للسماح بالطلبات من مصادر مختلفة
app.use(cors());

// استخدام الميدل وير لتحليل بيانات JSON في جسم الطلب
app.use(express.json());

// إنشاء اتصال بقاعدة البيانات MySQL
const db = mysql.createConnection({
    host: 'localhost',      // اسم المضيف
    user: 'root',           // اسم المستخدم لقاعدة البيانات
    password: '',           // كلمة المرور لقاعدة البيانات
    database: 'signup'      // اسم قاعدة البيانات
});

// ----------------------------------------------
// Route: /signup
// Description: لتسجيل مستخدم جديد في جدول "login"
// ----------------------------------------------
app.post('/signup', (req, res) => {
    // استعلام SQL لإدخال بيانات المستخدم في جدول login
    const sql = "INSERT INTO login (name, email, password) VALUES (?)";
    // إنشاء مصفوفة بالقيم المأخوذة من جسم الطلب
    const values = [req.body.name, req.body.email, req.body.password];

    // تنفيذ الاستعلام مع تمرير القيم
    db.query(sql, [values], (err, data) => {
        if (err) {
            // في حال حدوث خطأ في الاستعلام، يتم إرسال رسالة خطأ
            return res.json("error");
        }
        // في حال نجاح عملية الإدخال، يتم إرسال البيانات المضافة
        return res.json(data);
    });
});

// ----------------------------------------------
// Route: /login
// Description: لتسجيل دخول المستخدم من خلال التحقق من البريد الإلكتروني وكلمة المرور
// ----------------------------------------------
app.post('/login', (req, res) => {
    // استعلام SQL لاستخراج بيانات المستخدم بناءً على البريد الإلكتروني وكلمة المرور
    const sql = "SELECT * FROM login WHERE email = ? AND password = ?";
    
    // تنفيذ الاستعلام مع تمرير البريد الإلكتروني وكلمة المرور من جسم الطلب
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            // في حال حدوث خطأ في الاستعلام، يتم إرسال رسالة خطأ
            return res.json("error");
        }
        // التحقق مما إذا كانت بيانات المستخدم موجودة
        if (data.length > 0) {
            return res.json("success");
        } else {
            return res.json("fail");
        }
    });
});

// -------------------------------------------------
// مسار جديد: /teachers
// الوصف: إضافة معلّم جديد إلى جدول "teachers"
// التعليقات باللغة العربية
// -------------------------------------------------
app.post('/teachers', (req, res) => {
    // استعلام SQL لإدخال بيانات المعلّم في جدول teachers
    const sql = "INSERT INTO teachers (name, subject, email) VALUES (?)";
    // إنشاء مصفوفة بالقيم المأخوذة من جسم الطلب
    const values = [req.body.name, req.body.subject, req.body.email];

    // تنفيذ الاستعلام مع تمرير القيم
    db.query(sql, [values], (err, data) => {
        if (err) {
            // في حال حدوث خطأ في الاستعلام، يتم إرسال رسالة خطأ
            return res.json("خطأ في إضافة المعلّم");
        }
        // في حال نجاح عملية الإدخال، يتم إرسال البيانات المضافة
        return res.json(data);
    });
});

// -------------------------------------------------
// مسار جديد: /exams
// الوصف: إضافة امتحان جديد إلى جدول "exams"
// التعليقات باللغة العربية
// -------------------------------------------------
app.post('/exams', (req, res) => {
    // استعلام SQL لإدخال بيانات الامتحان في جدول exams
    const sql = "INSERT INTO exams (title, date, teacher_id) VALUES (?)";
    // إنشاء مصفوفة بالقيم المأخوذة من جسم الطلب
    const values = [req.body.title, req.body.date, req.body.teacher_id];

    // تنفيذ الاستعلام مع تمرير القيم
    db.query(sql, [values], (err, data) => {
        if (err) {
            // في حال حدوث خطأ في الاستعلام، يتم إرسال رسالة خطأ
            return res.json("خطأ في إضافة الامتحان");
        }
        // في حال نجاح عملية الإدخال، يتم إرسال البيانات المضافة
        return res.json(data);
    });
});

// بدء تشغيل الخادم على المنفذ 3000
app.listen(3000, () => {
    console.log("server is running");
});
