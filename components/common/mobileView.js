import { useEffect, useState } from "react";

const MobileView = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(0);
  const [menuMode, setMenuMode] = useState(false);

  useEffect(() => {


    const menuItems = document.querySelectorAll('.sm-map-menu-overlay__menu');
    const smMapBg = document.querySelector('.sm-map-bg');
    const smMapBgSky = document.querySelector('.sm-map-bg-sky');
    const smContainer = document.querySelector('.sm-container');
    const mobileMenuButton = document.getElementById('sm-menu');


    mobileMenuButton.addEventListener('click', (e) => {
      console.log('clicked');
      smContainer.classList.toggle('menu-clicked');

    })


    // [...menuItems].forEach((item, i) => {
    //   // console.log(item);
    //   item.addEventListener('click', (e) => {

    //     if (item.getAttribute('data-menu-item') == i + 1) {
    //       item.classList.add('item-clicked');
    //     } else {
    //       item.classList.remove('item-clicked');
    //     }

    //     // console.log(item.getAttribute('data-menu-item'));
    //     // setActiveMenuItem(item.getAttribute('data-menu-item'));
    //     // console.log('activeMenuItem', activeMenuItem);
    //     // [...menuItems][i].classList.add('item-clicked')
    //   })
    // })

  }, [])




  return (
    <div className="sm-container">
      <div className="sm-map-top-menu" id="sm-menu">
        <img src="menu.svg" alt="" />
      </div>
      <div className="sm-map-menu-overlay">
        <div className="sm-map-menu-overlay__container">
          <div data-menu-item='1' className="sm-map-menu-overlay__menu sm-map-menu-overlay__menu--item-1">
            <span>Castle</span>
          </div>
          <div data-menu-item='2' className="sm-map-menu-overlay__menu sm-map-menu-overlay__menu--item-2">
            <span>Saloon</span>
          </div>
          <div data-menu-item='3' className="sm-map-menu-overlay__menu sm-map-menu-overlay__menu--item-3">
            <span>Honey</span>
          </div>
          {/* <div data-menu-item='4' className="sm-map-menu-overlay__menu sm-map-menu-overlay__menu--item-4">
            <span>Bridge</span>
          </div> */}
          <div data-menu-item='4' className="sm-map-menu-overlay__menu sm-map-menu-overlay__menu--item-5">
            <span>Ark</span>
          </div>
          <div data-menu-item='4' className="sm-map-menu-overlay__menu sm-map-menu-overlay__menu--item-6">
            <span>Purple Trees</span>
          </div>
          <div data-menu-item='5' className="sm-map-menu-overlay__menu sm-map-menu-overlay__menu--item-7">
            <span>Seed <br /> Deposit</span>
          </div>
          <div data-menu-item='6' className="sm-map-menu-overlay__menu sm-map-menu-overlay__menu--item-8">
            <span>Fruit Market</span>
          </div>

          <div data-menu-item='7' className="sm-map-menu-overlay__menu sm-map-menu-overlay__menu--item-9">
            <span>Bridge</span>
          </div>


        </div>
      </div>
      <div className="sm-map-items">
        <img src="i1.png" alt="" />
        <img src="i2.png" alt="" />
        <img src="i3.png" alt="" />
        <img src="i4.png" alt="" />
        {/* <img src="i6.png" alt="" /> */}
        <img src="i5.png" alt="" />
        <img src="i7.png" alt="" />
        <img src="i8.png" alt="" />
        <img src="i9.png" alt="" />
      </div>
      <div className="sm-map-bg">
        <img src="main-island-up-2.png" alt="" />
      </div>
      <div className="sm-map-bg-sky">
        <img src="sky-bg-1.png" alt="" />
        <img src="sky-bg-3.png" alt="" />
        <img src="sky-bg-2.png" alt="" />
      </div>
    </div>
  );
}

export default MobileView;