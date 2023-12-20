class AppHeader extends HTMLElement {
  connectedCallback(){
    this.innerHTML = `
    <header>
    <div class="header">
      <div class="container">
      <div class="logo">
      <a href="Homepage.html"><img class="logo-img" src="images/logo.png" alt="Logo"></a>
      </div>
        <a id="menu-icon">&#9776;</a>
        <nav class="navbar">
          <ul class="menu">
            <li><a class="active" href="Homepage.html">Home</a></li>
            <li><a href="product.html">Product</a></li>
            <li><a href="productpage.html">About Us</a></li>
            <li><a href="#">Wellness</a></li>
            <li><a href="#">Download</a></li>
            <li><a href="#">Legal</a></li>

            <li><a href="#"><i class="fa fa-search"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
            <li><a href="#"><i class="fa-regular fa-cart-shopping"></i></a></li>


            <button id="genology-button">Genology</button>
            <button id="login-button">Login</button>
          </ul>
        </nav>
      </div>
    </div>
  </header>
    `
  }
}

customElements.define('app-header' , AppHeader)


jQuery(document).ready(function() {
    jQuery('#menu-icon').on('click', function() {
        jQuery('.navbar').toggleClass('expand');
        return false;
    });
});




document.addEventListener("DOMContentLoaded", function() {
const items = document.querySelectorAll('img');
const itemCount = items.length;
const nextItem = document.querySelector('.next');
const previousItem = document.querySelector('.previous');
let count = 0;

function showNextItem() {
  items[count].classList.remove('active');

  if(count < itemCount - 1) {
    count++;
  } else {
    count = 0;
  }

  items[count].classList.add('active');
  console.log(count);
}

function showPreviousItem() {
  items[count].classList.remove('active');

  if(count > 0) {
    count--;
  } else {
    count = itemCount - 1;
  }

  items[count].classList.add('active');
  console.log(count);
}

function keyPress(e) {
  e = e || window.event;
  
  if (e.keyCode == '37') {
    showPreviousItem();
  } else if (e.keyCode == '39') {
    showNextItem();
  }
}
nextItem.addEventListener('click', showNextItem);
previousItem.addEventListener('click', showPreviousItem);
document.addEventListener('keydown', keyPress);
});

$(document).ready(function() {
  $('.slider-items').slick({
      autoplay:false,
prevArrow:'.prev',
nextArrow:'.next',
slidesToShow:1,
fade: true,
centerMode: true,
centerPadding: '1px',
cssEase: 'linear',
responsive: [
{
    breakpoint: 680,
settings: {
  slidesToShow: 1,
  slidesToScroll: 1
}
}

]
})

  });

// script.js
document.addEventListener('DOMContentLoaded', function () {
  const ratings = document.querySelectorAll('.rating');

  ratings.forEach(function (rating) {
      const stars = rating.getAttribute('data-rating');
      const count = rating.getAttribute('data-count');
      const starDiv = document.createElement('div');

      for (let i = 1; i <= 5; i++) {
          const star = document.createElement('span');
          star.innerHTML = (i <= stars) ? '&#9733;' : '&#9734;';
          star.addEventListener('click', function () {
              rating.setAttribute('data-rating', i);
              updateStars(rating);
          });
          starDiv.appendChild(star);
      }

      const countDiv = document.createElement('div');
      countDiv.textContent = `(${count} reviews)`;

      rating.appendChild(starDiv);
      rating.appendChild(countDiv);
      updateStars(rating);
  });

  function updateStars(rating) {
      const stars = rating.getAttribute('data-rating');
      const starElements = rating.querySelectorAll('span');

      starElements.forEach(function (star, index) {
          star.innerHTML = (index < stars) ? '&#9733;' : '&#9734;';
      });
  }
});

/*!     
        jquery.picZoomer.js
        v 1.0
        David
        http://www.CodingSerf.com
*/
$('.thumbnail').on('click', function() {
  var clicked = $(this);
  var newSelection = clicked.data('big');
  var $img = $('.primary').css("background-image","url(" + newSelection + ")");
  clicked.parent().find('.thumbnail').removeClass('selected');
  clicked.addClass('selected');
  $('.primary').empty().append($img.hide().fadeIn('slow'));
});

// Add to cart

function addToCart() {
  var selectedQuantity = document.getElementById("quantity").value;

  alert("Added " + selectedQuantity + " items to the cart!");
}

class ProductDetails extends HTMLElement {
  connectedCallback(){
    this.innerHTML = `
    <nav class="product-nav">
    <ul>
        <li><a href="Homepage.html">Home</a></li>
        <li><a href="product.html">Product Page</a></li>
        <li><a href="productdetails.html">Product Details Page</a></li>

    </ul>
</nav>
<hr>

<div class="row">
    <div class="col-50">
        <div class="wrapper">
        
            <div class="image-gallery">
              <aside class="thumbnails">
                <a href="#" class="selected thumbnail" data-big="https://zinghealthyliving.com/cdn/shop/products/Cela_Pack_Oily_400x.jpg">
                  <div class="thumbnail-image" style="background-image: url(https://zinghealthyliving.com/cdn/shop/products/Cela_Pack_Oily_400x.jpg)"></div>
                </a>
                <a href="#" class="thumbnail" data-big="https://zinghealthyliving.com/cdn/shop/products/Cela_Pack_Oily_400x.jpg">
                  <div class="thumbnail-image" style="background-image: url(https://zinghealthyliving.com/cdn/shop/products/Cela_Pack_Oily_400x.jpg)"></div>
                </a>
                <a href="#" class="thumbnail" data-big="https://zinghealthyliving.com/cdn/shop/products/Cela_Pack_Oily_400x.jpg">
                  <div class="thumbnail-image" style="background-image: url(https://zinghealthyliving.com/cdn/shop/products/Cela_Pack_Oily_400x.jpg)"></div>
                </a>
              </aside>
            
              <main class="primary" style="background-image: url('https://zinghealthyliving.com/cdn/shop/products/Cela_Pack_Oily_400x.jpg');"></main>
            </div>
            
            </div>
    </div>
    <div class="col-50">
        <div class="product-details">
            <h4 class="product-title">Celavive @ Pack (Dry/Sensitive)</h5>
              <div class="row">
                <div class="col-6">
                    <div class="rating" data-rating="4"></div>
                </div>
                <div class="col-6">
                    <div class="rating-count">5 reviews</div>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <h6>Rs 1,120</h6>
                </div>
                <div class="col-6">
                  <h6> Rs 1,500</h6>
                </div>
                <div class="col-6">
                    <button class="discount">-30%</button>
                </div>

            </div>
            <div class="row">
                <div class="col-6">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, laboriosam nulla corrupti fuga nihil tempore illum reiciendis</p>
                </div>
        
              </div>
              <button onclick="addToCart()">Add to Cart</button>

              
          </div>
          </div>
        </div>

        <div class="middle-header">
            <nav>
            <a href="productdetails.html">Product Details</a>
            <a href="Raiting&Review.html">Raitng & Reviews</a>
            <a href="#">FAQ's</a>
            </nav>
        </div>
        <hr>
    `
  }
}

customElements.define('product-details' , ProductDetails)

class AppFooter extends HTMLElement {
  connectedCallback(){
    this.innerHTML = `
    <footer>
    <div class="container row">
        <div class="footer-left">
            <img src="logo.png" alt="Logo">
        </div>
        <nav class="footer-nav"
            <ul>
                <li><a href="Homepage.html">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="product.html">Product</a></li>
                <li><a href="#">Downloads</a></li>
                <li><a href="#">Blogs</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </nav>
        <div class="footer-right">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fas fa-shopping-cart"></i></a>
        </div>
    </div>
</footer>
    `
  }
}
customElements.define('app-footer' , AppFooter)
