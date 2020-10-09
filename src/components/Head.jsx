import React, { useState, useEffect } from 'react'

const Head = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [themeColor, setThemeColor] = useState('theme-crimson')

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme-color')

        if(currentTheme) setThemeColor(currentTheme);
    }, [])

    const handleClick = e => {
        setThemeColor(e.target.id);

        localStorage.setItem('theme-color', e.target.id)
    }
    return (
      <>
        <div className={openMenu ? "menu active" : "menu"}>
          <div className="icon">
            <i className="fa fa-cog" onClick={() => setOpenMenu(!openMenu)}></i>
          </div>
          <h2>change theme</h2>
          <ul className="list-unstyled">
            <li onClick={handleClick} id="theme-crimson"></li>
            <li onClick={handleClick} id="theme-light"></li>
            <li onClick={handleClick} id="theme-dark"></li>
          </ul>
        </div>
        <div className={`banner ${themeColor}`}>
          <div className="banner__content h-100 d-flex align-items-center">
            <div className="container">
              <div className="banner__text">
                <h1>we are creative agency</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat, unde. Odit, ducimus atque! Aspernatur, aut.
                  Consequatur veritatis ullam quidem eius quam nulla! Cumque,
                  praesentium consequuntur.
                </p>
                <div>
                  <button>watch demo</button>
                  <button>Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Head
