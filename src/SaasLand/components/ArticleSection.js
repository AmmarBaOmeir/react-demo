import React from 'react'
import image1 from "../image2.png"
import image2 from "../image3.png"

function ArticleSection(props) {
    return (
        <div className="article-section">
          <div>
             <img src={image1} alt="" title=""/>
          </div>
          <div className="article">
          <props.msg />
            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
            <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            mollitia amet et aperiam fugiat cupiditate. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Aliquam mollitia amet et aperiam
            fugiat cupiditate.
            </p>
          </div>
          <div className="article">
          <props.targ />
            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
            <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            mollitia amet et aperiam fugiat cupiditate. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Aliquam mollitia amet et aperiam
            fugiat cupiditate.
            </p>
          </div>
          <div>
             <img src={image2} alt="" title=""/>
          </div>
        </div>
    )
}

export default ArticleSection
