import React from "react";
import styles from "./Write.module.css";

const WritePage = () => {
  return (
    <div className={styles.write}>
      {/* section 1 */}
      <div className={styles.sec1}>
        <div className={styles.left}>
          <h1 className={styles.heading}>
            Publish, grow, and <br /> earn, all in one <br />
            place.
          </h1>
          <p className={styles.quote}>
            If you have a story to tell, knowledge to share, or a perspective to
            offer — welcome home. Sign up for free so your writing can thrive in
            a network supported by millions of readers — not ads.
          </p>
          <div className={styles.btn}>Start Writing</div>
        </div>
        <div className={styles.right}>
          <img
            src="./images/White_face_left_Final.svg"
            alt="ffffgdf"
            width="400px"
          />
        </div>
      </div>
      {/* section2 */}
      <div className={styles.sec2}>
        <div className={styles.left}>
          <h1>
            Join a network <br />
            of curious <br />
            minds.
          </h1>
        </div>
        <div className={styles.right}>
          {/* 1 */}
          <div className={styles.element}>
            <img
              src="https://cdn-static-1.medium.com/sites/medium.com/creators/images/Obama.png"
              alt=""
            />
            <div className={styles.details}>
              <p>Barak Obama</p>
              <p>DAD, HUSABAND, PRESIDENT, CITIZEN</p>
            </div>
          </div>

          <div className={styles.element}>
            <img
              src="https://cdn-static-1.medium.com/sites/medium.com/creators/images/Chabon.png"
              alt=""
            />
            <div className={styles.details}>
              <p>Michael Chabon</p>
              <p>NOVELIST, SCREENWRITER, AND COLUMNIST</p>
            </div>
          </div>

          <div className={styles.element}>
            <img
              src="https://cdn-static-1.medium.com/sites/medium.com/creators/images/camile.png"
              alt=""
            />
            <div className={styles.details}>
              <p>Camille Fournier</p>
              <p>ENGINEER, CTO, AND AUTHOR</p>
            </div>
          </div>

          <div className={styles.element}>
            <img
              src="https://cdn-static-1.medium.com/sites/medium.com/creators/images/CarvellWallace_1CarvellWallace.png"
              alt=""
            />
            <div className={styles.details}>
              <p>Carvell Wallace</p>
              <p>NEW YORK TIMES BESTSELLING AUTHOR AND PODCASTER</p>
            </div>
          </div>

          <div className={styles.element}>
            <img
              src="https://cdn-static-1.medium.com/sites/medium.com/creators/images/Price.png"
              alt=""
            />
            <div className={styles.details}>
              <p>Devon Price</p>
              <p>SOCIAL PSYCHOLOGIST AND AUTHOR</p>
            </div>
          </div>

          <div className={styles.element}>
            <img
              src="https://cdn-static-1.medium.com/sites/medium.com/creators/images/Orlean.png"
              alt=""
            />
            <div className={styles.details}>
              <p>Susan Orlean</p>
              <p>WRITER FOR THE NEW YORKER, AUTHOR</p>
            </div>
          </div>
        </div>
          </div>
          
          {/* section3 */}

          <div className={styles.sec3}>
              <div className={styles.top}>
              <div  className={styles.left}>
                  <h1  className={styles.heading}>Create <br />
                          your space.</h1>
                      <div>
                  <p  className={styles.quote}>Tell your story your way — with different ways to write, style, and brand your work.</p>
                  <div  className={styles.btn}>Start Writing</div>
                  </div>
                </div>
              <div  className={styles.right}>
                  <img src="https://cdn-static-1.medium.com/sites/medium.com/creators/images/earn_kelly_kaki.png" alt="" />
                  </div>
              </div>
              <div className={styles.bottom}>
                    <div className={styles.item}>
                        <h1>Blogs.</h1>
                        <p>Start a blog for free to have a personalized home for your writing. Brand your space and share your writing with readers on any device.</p>
                    </div>
                    <div className={styles.item}>
                        <h1>Publications.</h1>
                        <p>Collaborate with others or publish under a brand name. Use our story submission system and expressive customization options.</p>
                    </div>
              </div>
          </div>

          {/* section 4 */}
    </div>
  );
};

export { WritePage };
