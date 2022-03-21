const bannerOptions = document.querySelectorAll(".js-banner-options");
const bannerOptionsDropdown = document.querySelectorAll('.banner-options-dropdown')
const dropDownList = document.querySelectorAll('.dropdown-list')
const htmll = document.querySelector('html')

const body = document.querySelector(".body");

// header dropdown
const headerBar = document.querySelector('.header__subnav-container-bars')
const headerSubnav = document.querySelector('.js-open-subnav')

const checkForm = document.querySelector('.js-check-button')
const openCheckForm = document.querySelector('.js-check-form')

// banner
const bannerSelectionButtons = document.querySelectorAll('.banner-selection-button')

// Validate
const validateForm = document.querySelectorAll('input[name="validate"]')
const excuteNot0 = document.querySelectorAll('.d-none.not-0')
const excuteNotInsert = document.querySelectorAll('.d-none.not-insert')

// products
const productPage1 = document.querySelector('.products-page1')
const productPage2 = document.querySelector('.products-page2')
const showProductPageButton = document.querySelector('.js-product-arrow')
const productsRow = document.querySelectorAll('.body__container-products-row-active')
const activePage = document.querySelector('.js-product-page.active')
const flyKindNames = document.querySelectorAll('.company-kindFly')

// special places
const specialrow = document.querySelector('.body__container-special-row')

// modal
const modal = document.querySelector('.js-modal')
const modalBody = document.querySelector('.js-modal-body')
const modalOverlay = document.querySelector('.modal__overlay')
const closeModalButton = document.querySelector('.js-close-modal')
const openModalButton = document.querySelector('.js-open-modal')
const modalSelectionButtons = document.querySelectorAll('.modal-selection-button')

var app = {
  from: [
    {
      cityName: "Đà Nẵng, Việt Nam",
      desc: "DAD - Da Nang Airport",
    },
    {
      cityName: "Đà Nẵng, Việt Nam",
      desc: "DAD - Da Nang Airport",
    },
    {
      cityName: "Đà Nẵng, Việt Nam",
      desc: "DAD - Da Nang Airport",
    },
    {
      cityName: "Đà Nẵng, Việt Nam",
      desc: "DAD - Da Nang Airport",
    },
    {
      cityName: "Đà Nẵng, Việt Nam",
      desc: "DAD - Da Nang Airport",
    },
    {
      cityName: "Đà Nẵng, Việt Nam",
      desc: "DAD - Da Nang Airport",
    },
    {
      cityName: "Đà Nẵng, Việt Nam",
      desc: "DAD - Da Nang Airport",
    },
    {
      cityName: "Đà Nẵng, Việt Nam",
      desc: "DAD - Da Nang Airport",
    },
  ],
  to: [
    {
      cityName: "Đà Nẵng, Việt Nam",
      desc: "DAD - Da Nang Airport",
    },
    {
      cityName: "Đà Nẵng, Việt Nam",
      desc: "DAD - Da Nang Airport",
    },
    {
      cityName: "Đà Nẵng, Việt Nam",
      desc: "DAD - Da Nang Airport",
    },
    {
      cityName: "Đà Nẵng, Việt Nam",
      desc: "DAD - Da Nang Airport",
    },
    {
      cityName: "Đà Nẵng, Việt Nam",
      desc: "DAD - Da Nang Airport",
    },
    {
      cityName: "Đà Nẵng, Việt Nam",
      desc: "DAD - Da Nang Airport",
    },
    {
      cityName: "Đà Nẵng, Việt Nam",
      desc: "DAD - Da Nang Airport",
    },
    {
      cityName: "Đà Nẵng, Việt Nam",
      desc: "DAD - Da Nang Airport",
    },
  ],
  placesPage1: [
    {
      image: './assets/img/Products/2.jpg',
      brand: './assets/img/Products/Group 13664.svg',
      flyKind: 'Nội địa',
      flyName: 'Bamboo Airways',
      ticketName: 'Vé máy bay đến Nha Trang khứ hồi 2022',
      startAt: 'Khởi hành 08/03/2022',
      price: '455.000 ₫'
    },
    {
      image: './assets/img/Products/1.jpg',
      brand: './assets/img/Products/Group 13663.svg',
      flyKind: 'Quốc tế',
      flyName: 'Bamboo Airways',
      ticketName: 'Vé máy bay đến Nha Trang khứ hồi 2022',
      startAt: 'Khởi hành 08/03/2022',
      price: '455.000 ₫'
    },
    {
      image: './assets/img/Products/2.jpg',
      brand: './assets/img/Products/Group 13664.svg',
      flyKind: 'Nội địa',
      flyName: 'Bamboo Airways',
      ticketName: 'Vé máy bay đến Nha Trang khứ hồi 2022',
      startAt: 'Khởi hành 08/03/2022',
      price: '455.000 ₫'
    },
    {
      image: './assets/img/Products/2.jpg',
      brand: './assets/img/Products/Group 13664.svg',
      flyKind: 'Nội địa',
      flyName: 'Bamboo Airways',
      ticketName: 'Vé máy bay đến Nha Trang khứ hồi 2022',
      startAt: 'Khởi hành 08/03/2022',
      price: '455.000 ₫'
    },
    {
      image: './assets/img/Products/1.jpg',
      brand: './assets/img/Products/Group 13663.svg',
      flyKind: 'Quốc tế',
      flyName: 'Bamboo Airways',
      ticketName: 'Vé máy bay đến Nha Trang khứ hồi 2022',
      startAt: 'Khởi hành 08/03/2022',
      price: '455.000 ₫'
    },
    {
      image: './assets/img/Products/2.jpg',
      brand: './assets/img/Products/Group 13664.svg',
      flyKind: 'Nội địa',
      flyName: 'Bamboo Airways',
      ticketName: 'Vé máy bay đến Nha Trang khứ hồi 2022',
      startAt: 'Khởi hành 08/03/2022',
      price: '455.000 ₫'
    },
    {
      image: './assets/img/Products/1.jpg',
      brand: './assets/img/Products/Group 13663.svg',
      flyKind: 'Quốc tế',
      flyName: 'Bamboo Airways',
      ticketName: 'Vé máy bay đến Nha Trang khứ hồi 2022',
      startAt: 'Khởi hành 08/03/2022',
      price: '455.000 ₫'
    },
    {
      image: './assets/img/Products/2.jpg',
      brand: './assets/img/Products/Group 13664.svg',
      flyKind: 'Nội địa',
      flyName: 'Bamboo Airways',
      ticketName: 'Vé máy bay đến Nha Trang khứ hồi 2022',
      startAt: 'Khởi hành 08/03/2022',
      price: '455.000 ₫'
    },
  ],
  placesPage2: [
    {
      image: './assets/img/Products/1.jpg',
      brand: './assets/img/Products/Group 13664.svg',
      flyKind: 'Nội địa',
      flyName: 'Bamboo Airways',
      ticketName: 'Vé máy bay đến Nha Trang khứ hồi 2022',
      startAt: 'Khởi hành 08/03/2022',
      price: '455.000 ₫'
    },
    {
      image: './assets/img/Products/2.jpg',
      brand: './assets/img/Products/Group 13663.svg',
      flyKind: 'Quốc tế',
      flyName: 'Bamboo Airways',
      ticketName: 'Vé máy bay đến Nha Trang khứ hồi 2022',
      startAt: 'Khởi hành 08/03/2022',
      price: '455.000 ₫'
    },
    {
      image: './assets/img/Products/1.jpg',
      brand: './assets/img/Products/Group 13664.svg',
      flyKind: 'Nội địa',
      flyName: 'Bamboo Airways',
      ticketName: 'Vé máy bay đến Nha Trang khứ hồi 2022',
      startAt: 'Khởi hành 08/03/2022',
      price: '455.000 ₫'
    },
    {
      image: './assets/img/Products/1.jpg',
      brand: './assets/img/Products/Group 13664.svg',
      flyKind: 'Nội địa',
      flyName: 'Bamboo Airways',
      ticketName: 'Vé máy bay đến Nha Trang khứ hồi 2022',
      startAt: 'Khởi hành 08/03/2022',
      price: '455.000 ₫'
    },
    {
      image: './assets/img/Products/2.jpg',
      brand: './assets/img/Products/Group 13663.svg',
      flyKind: 'Quốc tế',
      flyName: 'Bamboo Airways',
      ticketName: 'Vé máy bay đến Nha Trang khứ hồi 2022',
      startAt: 'Khởi hành 08/03/2022',
      price: '455.000 ₫'
    },
    {
      image: './assets/img/Products/1.jpg',
      brand: './assets/img/Products/Group 13664.svg',
      flyKind: 'Nội địa',
      flyName: 'Bamboo Airways',
      ticketName: 'Vé máy bay đến Nha Trang khứ hồi 2022',
      startAt: 'Khởi hành 08/03/2022',
      price: '455.000 ₫'
    },
    {
      image: './assets/img/Products/2.jpg',
      brand: './assets/img/Products/Group 13663.svg',
      flyKind: 'Quốc tế',
      flyName: 'Bamboo Airways',
      ticketName: 'Vé máy bay đến Nha Trang khứ hồi 2022',
      startAt: 'Khởi hành 08/03/2022',
      price: '455.000 ₫'
    },
    {
      image: './assets/img/Products/1.jpg',
      brand: './assets/img/Products/Group 13664.svg',
      flyKind: 'Nội địa',
      flyName: 'Bamboo Airways',
      ticketName: 'Vé máy bay đến Nha Trang khứ hồi 2022',
      startAt: 'Khởi hành 08/03/2022',
      price: '455.000 ₫'
    },
  ],
  render: function () {
    const _this = this

    // render banner Dropdown 
    this.renderBannerDropDown()

    // render Places page 1
    this.renderPlacesPage1()

    // render Places page 2
    this.renderPlacesPage2()
  },
  handleEvent: function () {
    var _this = this;

    // open subnav khi click vao bar
    headerBar.onclick = function() {
      headerSubnav.classList.add('open')
    }

    // click vao button check don hang thi hien ra check form
    checkForm.onclick = function() {
      openCheckForm.classList.add('open')
    }

    // ket thuc cac su kien open dropdown, open form...
      body.onclick = function() {
        headerSubnav.classList.remove('open')
        openCheckForm.classList.remove('open')
      }

    // khi click vao dia diem se active border
    bannerOptions.forEach((element, index) => {
      element.onclick = function (e) {
        e.stopPropagation();
        const bannerOptionsDropdownItem = bannerOptionsDropdown[index]  
        const activeBorderDropdown = document.querySelector('.js-banner-options.active')
        const activeDropdown = document.querySelector('.banner-options-dropdown.open')

        if (activeBorderDropdown != null) {
          activeBorderDropdown.classList.remove('active')
          activeDropdown.classList.remove('open')
        } else {
          console.log('null')
        }

        this.classList.add("active");
        bannerOptionsDropdownItem.classList.add('open')
        body.onclick = function () {
          element.classList.remove("active");
          bannerOptionsDropdownItem.classList.remove('open')
        };
      };
    });

    // active banner button
    bannerSelectionButtons.forEach(item => {
      item.onclick = function() {
        const activeButton = document.querySelector('.banner-selection-button.active')

        activeButton.classList.remove('active')
        this.classList.add('active')
      }
    })

    // show next page of products
    showProductPageButton.onclick = function() {
      _this.showProductsPage()
      // _this.animatedProduct()
    }

    // validate form khi co value nhap vao
    validateForm.forEach((item, index) => {

      const error1 = excuteNot0[index]
      const error2 = excuteNotInsert[index]

      item.onkeypress = function (e) {
        if (e.code == "Enter") {
          const formValue = this.value
          
          if(formValue == '0') {
            error1.classList.add('d-block')
            error2.classList.remove('d-block')
          } else {
            error1.classList.remove('d-block')
          } 

          if(formValue == '') {
            error2.classList.add('d-block')
            error1.classList.remove('d-block')
          } else {
            error2.classList.remove('d-block')
          }
        }
      }
    })

    // xoa đuôi đi sau của input file
    document.addEventListener('DOMContentLoad', myFunction);
 
    function myFunction() {
    const FilePicker = document.querySelector('.upload-file');
    FilePicker.style.width = "90px";
    FilePicker.title = ""; // Leave This Empty
    }

    // open modal khi click vao Đặt vé cho nhiều người?
    openModalButton.onclick = function() {
      modal.classList.add('open')
    }

    bannerOptionsDropdown.forEach(item => {
      modalBody.onclick = function(e) {
        e.stopPropagation()
        item.classList.remove('open')
      }
    })

    // close modal
    modalOverlay.onclick = function() {
      modal.classList.remove('open')
    }
    closeModalButton.onclick = function() {
      modal.classList.remove('open')
    }

    // click vao button nao thi active button do
    modalSelectionButtons.forEach(item => {

      item.onclick = function () {
        const activeButton = document.querySelector('.modal-selection-button.active')

        activeButton.classList.remove('active')
        this.classList.add('active')
      }
    })


  },
  renderBannerDropDown() {
    dropDownList.forEach(list => {
      const placeDropDown = this.from.map(item => {
        return `
                  <li class="dropdown-item">
                      <h3>${item.cityName}</h3>
                      <p>${item.desc}</p>
                  </li>
                  `;
      })

      list.innerHTML = placeDropDown.join("")
    })
  },
  renderPlacesPage1() {
       // render Products
       const productsHtmls = this.placesPage1.map(item => {
        return `
        <div class="body__container-products-row-col col l-3 m-3 c-6">
                              <div class="body__container-products-row-col-item js-animation">
                                  <div class="overflow-hidden">
                                    <img class="scale" src="${item.image}" alt="">
                                  </div>
                                  <div class="body__container-products-row-col-item-brand">
                                      <img src="${item.brand}" alt="">
                                  </div>
                                  <div class="body__container-products-row-col-item-content">
                                      <div class="company">
                                          <a href="#" class="company-kindFly">${item.flyKind}</a>
                                          <a href="#" class="company-name">${item.flyName}</a>
                                      </div>
                                      <div class="name">
                                          <h3>${item.ticketName}</h3>
                                      </div>
                                      <div class="start">
                                          <p>${item.startAt}</p>
                                      </div>
                                      <div class="price">
                                          <span>${item.price}</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
        `
      });
      productPage1.innerHTML = productsHtmls.join("")
  },
  renderPlacesPage2() {
    const productsHtmls = this.placesPage2.map(item => {
      return `
      <div class="body__container-products-row-col col l-3 m-3 c-6">
                            <div class="body__container-products-row-col-item js-animation">
                                <div class="overflow-hidden">
                                  <img class="scale" src="${item.image}" alt="">
                                </div>
                                <div class="body__container-products-row-col-item-brand">
                                    <img src="${item.brand}" alt="">
                                </div>
                                <div class="body__container-products-row-col-item-content">
                                    <div class="company">
                                        <a href="#" class="company-kindFly">${item.flyKind}</a>
                                        <a href="#" class="company-name">${item.flyName}</a>
                                    </div>
                                    <div class="name">
                                        <h3>${item.ticketName}</h3>
                                    </div>
                                    <div class="start">
                                        <p>${item.startAt}</p>
                                    </div>
                                    <div class="price">
                                        <span>${item.price}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
      `
    });
    productPage2.innerHTML = productsHtmls.join("")
  },
  // animatedProduct() {
  //   const activedPage = document.querySelector('.js-product-page.active')
  //   const animatedRun = document.querySelectorAll('.animated-toLeft')
  //   const choose = document.querySelector.bind(document)
  //   if (activedPage.classList.contains('active')) {
  //       function loadProduct(ms) {
  //           return new Promise(function(resolve) {
  //               setTimeout(resolve, ms);
  //           });
  //       }
  //       loadProduct(400)
  //       .then(function() {
  //           choose('.js-animation:first-child').classList.add('animated-toLeft')
  //           return loadProduct(400)
  //       })
  //       .then(function() {
  //           choose('.js-animation:nth-child(2)').classList.add('animated-toLeft')
  //           return loadProduct(400)
  //       })
  //       .then(function() {
  //           choose('.js-animation:nth-child(3)').classList.add('animated-toLeft')
  //           return loadProduct(400)
  //       })
  //       .then(function() {
  //           choose('.js-animation:nth-child(4)').classList.add('animated-toLeft')
  //           return loadProduct(400)
  //       })
  //       .then(function() {
  //           choose('.js-animation:nth-child(5)').classList.add('animated-toLeft')
  //           return loadProduct(400)
  //       })
  //       .then(function() {
  //           choose('.js-animation:nth-child(6)').classList.add('animated-toLeft')
  //           return loadProduct(400)
  //       }) 
  //   } else {
  //     animatedRun.forEach(item => {
  //       item.classList.remove('.animated-toLeft')
  //     })
  //   }
  // },
  showProductsPage() {
    productsRow.forEach(item => {
      if (item.classList.contains('active')) {
        item.classList.remove('active')
      } else {
        item.classList.add('active')
      }
    })
  },
  start: function (param) {
    this.render();
    this.handleEvent();
  },
};

app.start();
