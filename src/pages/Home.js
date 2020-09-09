import React from "react";
import "./Home.css";
import AppsIcon from "@material-ui/icons/Apps";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Search from "./Search";

function Home() {
  return (
    <div className="home">
      {/* all the gmail,images,about */}
      <div className="home__header">
        <div className="home__headerLeft">
          {/* Link of about */}
          <a href="https://about.google/">About</a>
          {/* Link store */}
          <a href="https://store.google.com">Store</a>
        </div>
        <div className="home__headerRight">
          {/* Link of gmail */}
          <a href="https://mail.google.com">Gmail</a>
          {/* Link of images */}
          <a href="https://www.google.com/search?q=google+images&tbm=isch&hl=en&chips=q:google+images,g_1:wallpaper:XbyATGg4ue8%3D,g_1:beautiful:I2ccztps8lo%3D&hl=en&sa=X&ved=2ahUKEwicn-S39rvrAhWNVX0KHW8IB9QQ4lYoBXoECAEQHw&biw=1263&bih=578">
            Images
          </a>
          {/* Icon of 9 dot */}
          <AppsIcon />
          {/* Icon of user */}
          <AccountCircleIcon />
        </div>
      </div>
      {/* all the things below header is body */}
      <div className="home__body">
        {/* <img src={GetWay} alt="GetWay7" /> */}
        <div className="home__logo">
          <h1 className="logo__first">G</h1>
          <h1 className="logo__second">e</h1>
          <h1 className="logo__third">t</h1>
          <h1 className="logo__fourth">W</h1>
          <h1 className="logo__five">a</h1>
          <h1 className="logo__six">y</h1>
          <h1 className="logo__seven">7</h1>
        </div>
        <div className="home__inputContainer">
          {/* Search component */}
          {/* the hidden buttons hide the buttons on home page  */}
          <Search hideButtons />
        </div>
      </div>
    </div>
  );
}

export default Home;
