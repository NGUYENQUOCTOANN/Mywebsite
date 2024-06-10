<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SportShop - Sản phẩm</title>
    <link rel="stylesheet" href="../CSS/style.css">
    <style>
        /* Basic styles for the cart */
        #cart {
            position: fixed;
            right: 0;
            top: 0;
            width: 300px;
            height: 100%;
            background-color: white;
            border-left: 1px solid #ccc;
            box-shadow: -3px 0 5px rgba(0,0,0,0.2);
            padding: 20px;
            display: none;
            flex-direction: column;
        }
        #cart h2 {
            text-align: center;
        }
        #cart-items {
            flex: 1;
            overflow-y: auto;
        }
        #cart-items .cart-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
        }
        #cart-items .cart-item img {
            max-width: 50px;
            margin-right: 10px;
        }
        #cart-total {
            text-align: center;
            margin-top: 20px;
        }
        .add-to-cart {
            cursor: pointer;
            padding: 10px 15px;
            background-color: #28a745;
            color: white;
            border: none;
            border-radius: 5px;
        }
        .add-to-cart:hover {
            background-color: #218838;
        }
        .remove-from-cart {
            cursor: pointer;
            color: red;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header>
        <div class="container">
            <h1>SportShop</h1>
            <nav>
                <ul>
                    <li><a href="trangchu.html">Trang chủ</a></li>
                    <li><a href="sanpham.html">Sản phẩm</a></li>
                    <li><a href="gioithieu.html">Giới thiệu</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Products Section -->
    <section id="all-products">
        <div class="container">
            <h2>Tất cả sản phẩm</h2>
            <div class="product-list">
                <!-- Product Items -->
                <div class="product-item" data-name="Giày chạy bộ" data-price="1000000" data-image="../RES/day.jpg">
                    <img src="../RES/day.jpg" alt="Giày chạy bộ" class="responsive-img">
                    <h3>Giày chạy bộ</h3>
                    <p>1,000,000 VND</p>
                    <button class="add-to-cart">Thêm vào giỏ</button>
                </div>
                <div class="product-item" data-name="Áo thể thao" data-price="500000" data-image="../RES/aott.png">
                    <img src="../RES/aott.png" alt="Áo thể thao" class="responsive-img">
                    <h3>Áo thể thao</h3><p>500,000 VND</p>
                    <button class="add-to-cart">Thêm vào giỏ</button>
                </div>
                <div class="product-item" data-name="Balo thể thao" data-price="750000" data-image="../RES/balo tt.jpg">
                    <img src="../RES/balo tt.jpg" alt="Balo thể thao" class="responsive-img">
                    <h3>Balo thể thao</h3>
                    <p>750,000 VND</p>
                    <button class="add-to-cart">Thêm vào giỏ</button>
                </div>
                <!-- More products here -->
                <div class="product-item" data-name="Giày đá bóng" data-price="1000000" data-image="../RES/bongda.jpg">
                    <img src="../RES/bongda.jpg" alt="Giày đá bóng" class="responsive-img">
                    <h3>Giày bóng đá</h3>
                    <p>1,000,000 VND</p>
                    <button class="add-to-cart">Thêm vào giỏ</button>
                </div>
                <div class="product-item" data-name="Áo khoác thể thao" data-price="500000" data-image="../RES/aokhoactt.jpg">
                    <img src="../RES/aokhoactt.jpg" alt="Áo khoác thể thao" class="responsive-img">
                    <h3>Áo khoác thể thao</h3>
                    <p>500,000 VND</p>
                    <button class="add-to-cart">Thêm vào giỏ</button>
                </div>
                <div class="product-item" data-name="áo giữ nhiệt" data-price="750000" data-image="../RES/aogiunhiet.webp">
                    <img src="../RES/aogiunhiet.webp" alt="áo giữ nhiệt" class="responsive-img">
                    <h3>Áo giữ nhiệt</h3>
                    <p>750,000 VND</p>
                    <button class="add-to-cart">Thêm vào giỏ</button>
                </div>
                <div class="product-item" data-name="Giày bóng chuyền" data-price="1200000" data-image="../RES/bongchuyen.webp">
                    <img src="../RES/bongchuyen.webp" alt="Giày bóng chuyền" class="responsive-img">
                    <h3>Giày bóng chuyền</h3>
                    <p>1,200,000 VND</p>
                    <button class="add-to-cart">Thêm vào giỏ</button>
                </div>
                <div class="product-item" data-name="Quần thể thao" data-price="400000" data-image="../RES/quantt.jpg">
                    <img src="../RES/quantt.jpg" alt="Quần thể thao" class="responsive-img">
                    <h3>Quần thể thao</h3>
                    <p>400,000 VND</p>
                    <button class="add-to-cart">Thêm vào giỏ</button>
                </div>
                <div class="product-item" data-name="Balo tập gym" data-price="800000" data-image="../RES/balogym.webp">
                    <img src="../RES/balogym.webp" alt="Balo tập gym" class="responsive-img">
                    <h3>Balo tập gym</h3>
                    <p>800,000 VND</p><div class="container">
            <div class="footer-info">
                <div class="footer-column">
                    <h3>Về chúng tôi</h3>
                    <p>SportShop là nơi cung cấp các sản phẩm thể thao chất lượng cao, giúp bạn nâng cao hiệu suất và phong cách.</p>
                </div>
                <div class="footer-column">
                    <h3>Liên hệ</h3>
                    <ul>
                        <li>Địa chỉ: 123 Đường ABC, Quận 1, TP.HCM</li>
                        <li>Email: info@sportshop.com</li>
                        <li>Điện thoại: 0123 456 789</li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Theo dõi chúng tôi</h3>
                    <ul class="social-media">
                        <li><a href="#"><img src="facebook-icon.png" alt="Facebook"></a></li>
                        <li><a href="#"><img src="instagram-icon.png" alt="Instagram"></a></li>
                        <li><a href="#"><img src="twitter-icon.png" alt="Twitter"></a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 SportShop. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <!-- Link to external JavaScript file -->
    <script src="script.js"></script>
</body>
</html>
