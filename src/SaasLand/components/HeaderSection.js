import React from "react";
import logo192 from "../image1.png"
import curved from "../curvedBorder.png"

function HeaderSection(props) {
  return (
    <section>
      <div className="article">
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
          mollitia amet et aperiam fugiat cupiditate. Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Aliquam mollitia amet et aperiam
          fugiat cupiditate.
        </p>
        <input type="button" value="Get Started" />
      </div>
      <div>
        <img src={logo192} alt="" title=""/>
      </div>
      <img id="curvedBorder" src={curved} alt="" />

    </section>
  );
}

export default HeaderSection;
