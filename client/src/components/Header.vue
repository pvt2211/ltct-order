<template>
<div class="super_container">
    <!-- Header -->
    <header class="header">
        <!-- Top Bar -->
        <div class="top_bar">
            <div class="container">
                <div class="row">
                    <div class="col d-flex flex-row">
                        <div class="top_bar_content ml-auto">
                            <div class="top_bar_menu">
                                <ul class="standard_dropdown top_bar_dropdown">
                                    <li> <a href="#">Tiếng việt</a>
                                        <ul>
                                            <li><a href="#">English</a></li>
                                            <li><a href="#">Spanish</a></li>
                                            <li><a href="#">Japanese</a></li>
                                        </ul>
                                    </li>
                                    <li> <a href="#">
                                        <div class="user_icon"><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918647/user.svg" alt=""></div>
                                        User Account</a>
                                        <ul>
                                            <li><a href="#">Xem tài khoản</a></li>
                                            <li><a href="#">Xem đơn hàng</a></li>
                                            <li><a href="#">Đăng xuất</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> <!-- Header Main -->
        <div class="header_main">
            <div class="container">
                <div class="row">
                    <!-- Logo -->
                    <div class="col-lg-2 col-sm-3 col-3 order-1">
                        <div class="logo_container">
                            <div class="logo"><a href="#">BBB</a></div>
                        </div>
                    </div> <!-- Search -->
                    <div class="col-lg-8 col-12 order-lg-2 order-3 text-lg-left text-right">
                        <div class="header_search">
                            <div class="header_search_content">
                                <div class="header_search_form_container">
                                    <form action="#" class="header_search_form clearfix"> <input type="search" required="required" class="header_search_input" placeholder="Search for products...">
                                        <button type="submit" class="header_search_button trans_300" value="Submit"><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918770/search.png" alt=""></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <!-- Cart -->
                    <div class="col-lg-2 col-9 order-lg-3 order-2 text-lg-left text-right">
                        <div class="wishlist_cart d-flex flex-row align-items-center justify-content-end">
                            <div class="cart">
                                <div class="cart_container d-flex flex-row align-items-center justify-content-end">
                                    <div class="cart_icon"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918704/cart.png" alt="">
                                        <div class="cart_count"><span>3</span></div>
                                    </div>
                                    <div class="cart_content">
                                        <div class="cart_text"><a href="#">Cart</a></div>
                                        <div class="cart_price">$185</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </header>
    <div style="height: 700px"> </div>
</div>
</template>

<style scoped>
@charset "utf-8";
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800,900|Rubik:300,400,500,700,900');

* {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -webkit-text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
    text-shadow: rgba(0, 0, 0, .01) 0 0 1px
}

body {
    font-family: 'Rubik', sans-serif;
    font-size: 14px;
    font-weight: 400;
    background: #FFFFFF;
    color: #000000
}

div {
    position: relative;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box
}

ul {
    list-style: none;
    margin-bottom: 0px
}

p {
    font-family: 'Rubik', sans-serif;
    font-size: 14px;
    line-height: 1.7;
    font-weight: 400;
    color: #828282;
    -webkit-font-smoothing: antialiased;
    -webkit-text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
    text-shadow: rgba(0, 0, 0, .01) 0 0 1px
}

p a {
    display: inline;
    position: relative;
    color: inherit;
    border-bottom: solid 1px #ffa07f;
    -webkit-transition: all 200ms ease;
    -moz-transition: all 200ms ease;
    -ms-transition: all 200ms ease;
    -o-transition: all 200ms ease;
    transition: all 200ms ease
}

a,
a:hover,
a:visited,
a:active,
a:link {
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
    -webkit-text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
    text-shadow: rgba(0, 0, 0, .01) 0 0 1px
}

p a:active {
    position: relative;
    color: #FF6347
}

p a:hover {
    color: #FFFFFF;
    background: #ffa07f
}

p a:hover::after {
    opacity: 0.2
}

h1 {
    font-size: 48px
}
h2 {
    font-size: 36px
}
h3 {
    font-size: 24px
}
h4 {
    font-size: 18px
}
h5 {
    font-size: 14px
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    -webkit-text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
    text-shadow: rgba(0, 0, 0, .01) 0 0 1px
}

.form-control {
    color: #db5246
}

section {
    display: block;
    position: relative;
    box-sizing: border-box
}

.clear {
    clear: both
}

.clearfix::before,
.clearfix::after {
    content: "";
    display: table
}

.clearfix::after {
    clear: both
}

.clearfix {
    zoom: 1
}


.super_container {
    width: 100%;
    height: 220px;
    overflow: hidden;
    border-bottom: solid 1px rgba(0, 0, 0, 0.05);
    background: #fafafa;
}

.button {
    display: inline-block;
    background: #0e8ce4;
    border-radius: 5px;
    height: 48px;
    -webkit-transition: all 200ms ease;
    -moz-transition: all 200ms ease;
    -ms-transition: all 200ms ease;
    -o-transition: all 200ms ease;
    transition: all 200ms ease
}

.button a {
    display: block;
    font-size: 18px;
    font-weight: 400;
    line-height: 48px;
    color: #FFFFFF;
    padding-left: 35px;
    padding-right: 35px
}

.button:hover {
    opacity: 0.8
}

.header {
    position: relative;
    width: 100%;
    z-index: 10
}

.top_bar {
    width: 100%;
    height: 56px;
    background: #fafafa;
    border-bottom: solid 1px rgba(0, 0, 0, 0.05);
    z-index: 2
}

.header.scrolled .top_bar {
    display: none
}

.top_bar_icon {
    display: inline-block;
    margin-right: 14px;
    -webkit-transform: translateY(-2px);
    -moz-transform: translateY(-2px);
    -ms-transform: translateY(-2px);
    -o-transform: translateY(-2px);
    transform: translateY(-2px)
}

.top_bar_menu {
    display: inline-block
}

.top_bar_dropdown li {
    padding-left: 13px;
    padding-right: 13px
}

.standard_dropdown li {
    display: inline-block;
    position: relative;
    height: 56px
}

.standard_dropdown li li {
    display: block;
    width: 100%
}

.standard_dropdown li li a {
    display: block;
    width: 100%;
    border-bottom: solid 1px #f2f2f2;
    font-size: 16px
}

.standard_dropdown li:last-child a {
    border-bottom: none
}

.standard_dropdown li.hassubs>a i {
    display: inline-block;
    margin-left: 5px
}

.standard_dropdown li a {
    display: block;
    position: relative;
    font-size: 16px;
    font-weight: 300;
    color: #000000;
    line-height: 56px;
    white-space: nowrap;
    -webkit-transition: all 200ms ease;
    -moz-transition: all 200ms ease;
    -ms-transition: all 200ms ease;
    -o-transition: all 200ms ease;
    transition: all 200ms ease
}

.standard_dropdown li a:hover {
    color: #0e8ce4
}

.standard_dropdown li a i {
    display: none;
    -webkit-transform: translateY(-1px);
    -moz-transform: translateY(-1px);
    -ms-transform: translateY(-1px);
    -o-transform: translateY(-1px);
    transform: translateY(-1px);
    font-size: 12px
}

.standard_dropdown li ul {
    display: block;
    position: absolute;
    top: 120%;
    left: 0;
    width: auto;
    visibility: hidden;
    opacity: 0;
    background: #FFFFFF;
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
    -webkit-transition: opacity 0.3s ease;
    -moz-transition: opacity 0.3s ease;
    -ms-transition: opacity 0.3s ease;
    -o-transition: opacity 0.3s ease;
    transition: all 0.3s ease;
    z-index: 1
}

.standard_dropdown li:hover>ul {
    top: 100%;
    visibility: visible;
    opacity: 1
}

.standard_dropdown ul ul {
    left: 100%;
    top: 0 !important
}

.user_icon {
    display: inline-block;
    margin-right: 7px;
    -webkit-transform: translateY(-2px);
    -moz-transform: translateY(-2px);
    -ms-transform: translateY(-2px);
    -o-transform: translateY(-2px);
    transform: translateY(-2px);
    width: 15px
}

.user_icon img {
    width: 100%
}

.header_main {
    z-index: 1;
    padding: 30px;
}

.header.scrolled .header_main {
    display: none
}

.header_main_item {
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%)
}

.logo_container {
    height: 80px
}

.logo {
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%)
}

.logo a {
    font-size: 36px;
    font-weight: 500;
    color: #0e8ce4
}

.header_search {
    height: 90px
}

.header_search_content {
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%)
}

.header_search_form_container {
    width: 100%;
    height: 50px;
    border: solid 1px #e5e5e5;
    border-radius: 5px
}

.header_search_form {
    width: 100%;
    height: 100%
}

.header_search_input {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    line-height: 50px;
    border: none !important;
    outline: none !important;
    padding-left: 26px;
    color: #7f7f7f;
    float: left
}

.header_search_input::-webkit-input-placeholder {
    font-size: 16px !important;
    font-weight: 300;
    line-height: 50px;
    color: #a3a3a3 !important
}

.header_search_input:-moz-placeholder {
    font-size: 16px !important;
    font-weight: 300;
    line-height: 50px;
    color: #a3a3a3 !important
}

.header_search_input::-moz-placeholder {
    font-size: 16px !important;
    font-weight: 300;
    line-height: 50px;
    color: #a3a3a3 !important
}

.header_search_input:-ms-input-placeholder {
    font-size: 16px !important;
    font-weight: 300;
    line-height: 50px;
    color: #a3a3a3 !important
}

.header_search_input::input-placeholder {
    font-size: 16px !important;
    font-weight: 300;
    line-height: 50px;
    color: #a3a3a3 !important
}


.header_search_button {
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 100%;
    background: #0e8ce4;
    border: none;
    outline: none;
    cursor: pointer;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px
}

.wishlist_cart {
    height: 90px
}

.cart_count {
    position: absolute;
    bottom: -1px;
    right: -14px;
    width: 23px;
    height: 23px;
    background: #0e8ce4;
    border-radius: 50%;
    text-align: center
}

.cart_count span {
    display: block;
    line-height: 23px;
    font-size: 12px;
    color: #FFFFFF;
    -webkit-transform: translateY(1px);
    -moz-transform: translateY(1px);
    -ms-transform: translateY(1px);
    -o-transform: translateY(1px);
    transform: translateY(1px)
}

.cart_icon img {
    width: 100%
}

.cart_content {
    margin-left: 28px
}

.cart_text a {
    font-size: 18px;
    font-weight: 400;
    color: #000000;
    -webkit-transition: all 200ms ease;
    -moz-transition: all 200ms ease;
    -ms-transition: all 200ms ease;
    -o-transition: all 200ms ease;
    transition: all 200ms ease
}

.cart_text a:hover {
    color: #0e8ce4
}

.cart_price {
    font-size: 14px;
    color: #a3a3a3;
    margin-top: -2px
}



@media (min-width: 1200px) {
    .container {
        max-width: 1300px !important
    }
}

@media only screen and (max-width: 1199px) {
    .main_nav_dropdown li {
        margin-right: 30px
    }

    .main_nav_dropdown li a {
        font-size: 16px
    }
}

@media only screen and (max-width: 991px) {
    .header_search {
        height: 50px
    }

    .logo_container,
    .wishlist_cart {
        height: 125px
    }

    .menu_trigger_container {
        display: block
    }

    .top_bar {
        height: 40px
    }

    .top_bar_contact_item {
        font-size: 12px;
        margin-right: 20px;
        line-height: 40px
    }

    .top_bar_contact_item a {
        font-size: 12px;
        line-height: 40px
    }

    .top_bar_icon {
        margin-right: 4px
    }

    .top_bar_icon img {
        width: 70%
    }

    .top_bar_menu {
        display: none
    }

    .top_bar_user a {
        font-size: 12px;
        line-height: 40px
    }

    .user_icon {
        -webkit-transform: translateY(-1px);
        -moz-transform: translateY(-1px);
        -ms-transform: translateY(-1px);
        -o-transform: translateY(-1px);
        transform: translateY(-1px);
        width: 12px
    }
}

@media only screen and (max-width: 767px) {
    .header_search {
        display: none
    }
}

@media only screen and (max-width: 575px) {
    h2 {
        font-size: 24px
    }

    p {
        font-size: 13px
    }

    .top_bar {
        display: none
    }

    .logo_container,
    .wishlist_cart {
        height: 72px
    }

    .logo a {
        font-size: 24px
    }

    .menu_trigger_text {
        font-size: 13px;
        margin-right: 10px
    }

    .cart_text {
        display: none
    }

    .cart_text a {
        font-size: 14px
    }

    .cart_price {
        font-size: 12px
    }

    .cart_content {
        margin-left: 18px
    }

    .cart_icon {
        width: 17px
    }

    .cart_count {
        width: 21px;
        height: 21px
    }

    .cart_count span {
        line-height: 21px
    }

    .top_bar_user {
        margin-left: 0px
    }

    .header_search {
        display: none
    }

    .menu_trigger_container {
        padding-right: 15px
    }

    .button {
        height: 32px
    }

    .button a {
        font-size: 12px;
        line-height: 32px;
        padding-left: 25px;
        padding-right: 25px
    }
}
</style>