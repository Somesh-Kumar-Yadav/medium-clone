import React from "react";
import styles from "./Write.module.css";
import {Nav} from '../../styled-components/components'

const WritePage = () => {
  return (
    <div className={styles.write}>
      {/* navbar */}

      <Nav color="#F24D2E">
        
      </Nav>


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

          <div className={styles.sec4}>
              <div className={styles.top}>
                  <h1>Find and grow your <br />
audience.</h1>
                  <p>With simple tools and features, you have the chance to connect with over 100 million curious readers.</p>
              </div>
              <div className={styles.bottom}>
                  <div className={styles.left}>
                      <h1>Audience insights.</h1>
                      <p>Use data to learn what resonates with your readers so you can keep growing.</p>
                      <img src="https://cdn-static-1.medium.com/sites/medium.com/creators/images/creator-find-points-iphones.png" alt="" />
                  </div>
                  <div className={styles.right}>
                      <div className={styles.top}>
                          <div className={styles.items}>
                              <h1>Social connectivity.</h1>
                              <p>Find people you’re already connected with on Twitter and easily share your stories across platforms.</p>
                          </div>
                          <div className={styles.items}>
                              <h1>Powerful network.</h1>
                              <p>Readers can discover and follow you easily with tailored feeds and recommendations.</p>
                          </div>
                      </div>
                      <div className={styles.top}>
                          <div className={styles.items}>
                              <h1>Email subscriptions.</h1>
                              <p>Reach readers by having your stories delivered straight to their inboxes.</p>
                          </div>
                          <div className={styles.items}>
                              <h1>Interactive discussions.</h1>
                              <p>Build relationships with your readers through a threaded comments section.</p>
                          </div>
                          <div className={styles.items}>
                              <h1>Personalized design.</h1>
                              <p>Easily customize your page to stand out and build your brand.</p>
                          </div>
                      </div>
                      <div className={styles.bottom}></div>
                  </div>
              </div>
          </div>

          {/* section 5 */}
          <div className={styles.sec5}>
              <img src="" alt="" />
                <h1 className={styles.heading}>Earn money from <br />
your writing.</h1>
                <p className={styles.quote}>Writing has its rewards when you join the Partner Program. Learn how to get paid for the content you publish and the audiences you build.</p>
                <div className={styles.btn}>Learn more</div>
          </div>


          {/* section 6 */}
    </div>
  );
};

export { WritePage };
