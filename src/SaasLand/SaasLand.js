import React from "react";
import { OfflineBolt, SupervisedUserCircle , RateReview , LocationOn} from "@material-ui/icons";
import NavComp from "./components/NavComp";
import HeaderSection from "./components/HeaderSection";
import ArticleSection from './components/ArticleSection'
// import image1 from "../../public/logo192.png";

import './SaasLand.css'
function SaasLand() {
  return (
    <div className="global">
      <div className="header">
        <NavComp logo={OfflineBolt} />
        <HeaderSection image={SupervisedUserCircle} />
      </div>
      <div className="Main">
        <ArticleSection  msg={RateReview} targ={LocationOn} />
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default SaasLand;
