<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */
use Inertia\Inertia;

Route::get('login', function () {
    return Inertia::render('Auth/Login');
});

Route:: get("/", function () {
    return Inertia::render('Dashboard/Index');
});

Route:: get("/dashboard", function () {
    return Inertia::render('Dashboard/Index');
});
Route:: get("/dashboard/all-countries", function () {
    return Inertia::render('Dashboard/AllCountries');
});
Route:: get("/financial-payments", function () {
    return Inertia::render('FinancialPayments/Index');
});
Route:: get("/financial-payments/{id}", function () {
    return Inertia::render('FinancialPayments/Details');
});

Route:: get("/expenses", function () {
    return Inertia::render('Expenses/Index');
});
Route:: get("/expenses/{id}", function () {
    return Inertia::render('Expenses/Details');
});
Route:: get("/expenses/payment-recipt/{id}", function () {
    return Inertia::render('Expenses/PaymentRecipt');
});

Route:: get("/student-wallets", function () {
    return Inertia::render('StudentWallets/Index');
});

Route:: get("/employees", function () {
    return Inertia::render('Employees/Index');
});

Route:: get("/payment-account", function () {
    return Inertia::render('PaymentAccount/Index');
});

/* My routes */

Route:: get("/english-college", function () {
    return Inertia::render('English/Index');
});

Route:: get("/profile", function () {
    return Inertia::render('Profile/Profile');
});

Route:: get("/dashboard/country-wise-students", function () {
    return Inertia::render('Dashboard/CountryWiseStudents');
});
