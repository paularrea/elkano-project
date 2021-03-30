import React, {Fragment} from "react";
import foto3 from "../../images/foto3.jpg";
import { Parallax } from "react-parallax";
import style from "../../styles/storyLiberia.module.scss";
import Media from "react-media";

const ParallaxYamahFace = () => {
  return (
          <Media
          queries={{
            small: "(max-width: 869px)",
            large: "(min-width: 870px)",
          }}
        >
          {(matches) => (
            <Fragment>
              {matches.small && (
               <Parallax bgImage={foto3} strength={150}>
               <div className={style.img_ebola_container} style={{ height: '30vh' }}>
                 <div style={{width:'90%'}}>
                   <h4 style={{fontSize:'20px'}}>
                     Yamah risked her own life to deliver babies during the Ebola
                     outbreak.
                   </h4>
                 </div>
               </div>
             </Parallax>
              )}
              {matches.large && (
                <Parallax bgImage={foto3} strength={150}>
                <div className={style.img_ebola_container} style={{ height: '40vw' }}>
                  <div>
                    <h4>
                      Yamah risked her own life to deliver babies during the Ebola
                      outbreak.
                    </h4>
                  </div>
                </div>
              </Parallax>
              )}
            </Fragment>
          )}
        </Media>
  );
};

export default ParallaxYamahFace;
