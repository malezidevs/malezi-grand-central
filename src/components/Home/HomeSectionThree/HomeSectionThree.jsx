import { ReactComponent as ImageTwo } from "../../../assets/icons/imageOne.svg";
import { ReactComponent as ImageThree } from "../../../assets/icons/imageThree.svg";
import { ReactComponent as LineTwo } from "../../../assets/images/line2.svg";
import { ReactComponent as BtnTwo } from "../../../assets/icons/btn2.svg";

import "./HomeSectionThree.scss";

function HomeSectionThree() {
  return (
    <div className="home-threeWrapper">
      <div className="home-three">
        <h3 className="home-three--infoOne">
          WE EQUIP/PREPARE YOUNG <br /> MINDS TO
        </h3>
        <h1 className="home-three--title">
          INVENT THE <br />
          FUTURE
        </h1>
        <div className="home-three--images">
          <div className="home-three--images__left">
            <LineTwo />
            <ImageThree />
          </div>
          <div className="home-three--images__right">
            <ImageTwo />
          </div>
        </div>
        <h3 className="home-three--infoTwo">WE BELIEVE</h3>
        <div className="home-three--btnWrapper">
          <p className="home-three--descOne">
            BY GIVING LEARNERS AND EDUCATORS THE RIGHT TOOLS TO ENABLE RICHER,
            MORE ROUNDED LEARNING, WE ARE PREPARING CHILDREN FOR PROFESSIONS
            THAT ARE YET TO BE INVENTED.
          </p>
          <button className="home-three--btn">
            <BtnTwo />
          </button>
        </div>
        <p className="home-three--descTwo">
          We work throughout Africa providing education solutions for
          governments, enterprise, schools and homes with the mission of
          ensuring learning never stops.
        </p>
      </div>
    </div>
  );
}

export default HomeSectionThree;
