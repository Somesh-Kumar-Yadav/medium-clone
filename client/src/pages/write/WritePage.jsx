import React, { useState } from "react";
import styles from "./Write.module.css";
import { NavBar } from "../../components/LandingPage/NavBar";
import { Acordian } from "../../components/acordian/Acordian";
import { useHistory } from "react-router";
import { HomePageNavBar } from "../../components/HomePage/HomePageNavBar";
import { useSelector } from 'react-redux';

const WritePage = () => {
  const history = useHistory();
const [active, setActive] = useState("");
const auth = Boolean(useSelector(state => state.auth.isAuth))
  return (
    <div className={styles.write}>
      {/* navbar */}
 {auth ? <HomePageNavBar color={"#F24D2E" }/>:<NavBar color="#F24D2E" /> }
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
          <div className={styles.btn} onClick={()=>{history.push("/newStory")}}>Start Writing</div>
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
          <div className={styles.left}>
            <h1 className={styles.heading}>
              Create <br />
              your space.
            </h1>
            <div>
              <p className={styles.quote}>
                Tell your story your way — with different ways to write, style,
                and brand your work.
              </p>
              <div className={styles.btn}>Start Writing</div>
            </div>
          </div>
          <div className={styles.right}>
            <img
              src="https://cdn-static-1.medium.com/sites/medium.com/creators/images/earn_kelly_kaki.png"
              alt=""
            />
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.item}>
            <h1>Blogs.</h1>
            <p>
              Start a blog for free to have a personalized home for your
              writing. Brand your space and share your writing with readers on
              any device.
            </p>
          </div>
          <div className={styles.item}>
            <h1>Publications.</h1>
            <p>
              Collaborate with others or publish under a brand name. Use our
              story submission system and expressive customization options.
            </p>
          </div>
        </div>
      </div>

      {/* section 4 */}

      <div className={styles.sec4}>
        <div className={styles.top}>
          <h1>
            Find and grow your <br />
            audience.
          </h1>
          <p>
            With simple tools and features, you have the chance to connect with
            over 100 million curious readers.
          </p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <h1>Audience insights.</h1>
            <p>
              Use data to learn what resonates with your readers so you can keep
              growing.
            </p>
            <img
              src="https://cdn-static-1.medium.com/sites/medium.com/creators/images/creator-find-points-iphones.png"
              alt=""
            />
          </div>
          <div className={styles.right}>
            <div className={styles.top}>
              <div className={styles.items}>
                <h1>Social connectivity.</h1>
                <p>
                  Find people you’re already connected with on Twitter and
                  easily share your stories across platforms.
                </p>
              </div>
              <div className={styles.items}>
                <h1>Powerful network.</h1>
                <p>
                  Readers can discover and follow you easily with tailored feeds
                  and recommendations.
                </p>
              </div>
            </div>
            <div className={styles.top}>
              <div className={styles.items}>
                <h1>Email subscriptions.</h1>
                <p>
                  Reach readers by having your stories delivered straight to
                  their inboxes.
                </p>
              </div>
              <div className={styles.items}>
                <h1>Interactive discussions.</h1>
                <p>
                  Build relationships with your readers through a threaded
                  comments section.
                </p>
              </div>
              <div className={styles.items}>
                <h1>Personalized design.</h1>
                <p>
                  Easily customize your page to stand out and build your brand.
                </p>
              </div>
            </div>
            <div className={styles.bottom}></div>
          </div>
        </div>
      </div>

      {/* section 5 */}
      <div className={styles.sec5}>
        <img src="" alt="" />
        <h1 className={styles.heading}>
          Earn money from <br />
          your writing.
        </h1>
        <p className={styles.quote}>
          Writing has its rewards when you join the Partner Program. Learn how
          to get paid for the content you publish and the audiences you build.
        </p>
        <div className={styles.btn}>Learn more</div>
      </div>

      {/* section 6 */}
      <div className={styles.sec6}>
        <div>
          <h1 className={styles.heading}>More about writing on Medium:</h1>
        </div>
        <Acordian
          ans="First, make a free account. Then, to create a story, click on your profile picture in the top-right corner of the page, then “Write a Story.”"
          title={"How do I start writing on Medium?"}
          active={active}
          setActive={setActive}
        />
        <Acordian
          ans="Anyone can write on Medium. Whether you’ve never written before or are ready to create a full publication, it’s easy to get started and we allow you to focus more on big ideas and less on driving clicks. With the option to earn for your work, you can also be directly rewarded for the value you provide readers."
          title={"Who writes on Medium?"}
          active={active}
          setActive={setActive}
        />
        <Acordian
          ans="If you join the Medium Partner Program, you can earn money based on how much time members spend reading your work and whenever you convert non-paying readers into members."
          title={"How can I make money writing on Medium?"}
          active={active}
          setActive={setActive}
        />
        <Acordian
          ans="No. You can write on Medium even if you are not in the Partner Program. If you are in the Partner Program you can also choose which of the stories you publish are eligible for the Program. For more about the Partner Program, click here."
          title={"Do I need to be in the Partner Program to write on Medium?"}
          active={active}
          setActive={setActive}
        />
        <Acordian
          ans="Anyone on the internet can read your stories. Even if your story is being distributed in the Partner Program as a part of our metered paywall, anyone can still read a limited number of articles for free each month. If you want to share an un-metered version of your story, you can use a Friend Link."
          title={"Who can read the work I publish on Medium?"}
          active={active}
          setActive={setActive}
        />
        <Acordian
          ans="For the latest guides, resources, and inspiration for creators on Medium, follow Creators Hub, the official Medium blog for writers."
          title={"Where can I get updates and plug into the creator community?"}
          active={active}
          setActive={setActive}
        />
        <Acordian
          ans="Medium has a number of tools to connect you with over 100 million readers on the platform and beyond. Some ways you can build your audience are by starting a newsletter,  submitting to publications, following the distribution standards, and sharing your stories on social media. We also encourage you to check out our blog, 3 Minute Read, for more helpful tips and tricks – like how to write a great headline and SEO tips to make your stories more discoverable."
          title={"How can I grow my audience with Medium?"}
          active={active}
          setActive={setActive}
        />
        <div className={styles.bottom}>
          <p>Looking for help getting started?</p>
          <div className={styles.btn}>Check out our guides.</div>
        </div>
      </div>
    </div>
  );
};

export { WritePage };
