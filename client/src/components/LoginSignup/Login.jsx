import React from "react";
import styles from "../../styles/LoginSignup.module.css";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/auth/actions";
import { useHistory } from "react-router";

const Login = ({ swap, status, set }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const responseGoogle = (res) => {
    const data = { ...res.profileObj, events: {} };
    dispatch(loginUser(data));
    setTimeout(() => {
      if (data) {
        alert("You have successfully Logged In");
        history.push(history.location.pathname);
      }
    }, 1000);
  };
  return (
    <div className={styles.login}>
      <h1 className={styles.login_h2}>Welcome back.</h1>
      <GoogleLogin 
        clientId="378817930652-26drd8dhlmr4qet0ilu2qts92m12mpdr.apps.googleusercontent.com"
        render={(renderProps) => (
          <button
            className={styles.btn}
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <img
              onClick={() => set(false)}
              className={styles.btn_image}
              src="https://image.similarpng.com/thumbnail/2020/12/Colorful-google-logo-design-on-transparent-PNG-1.png"
              alt="img"
            />
            <p onClick={() => set(false)} className={styles.btn_p}>
              Sign in with Google
            </p>
          </button>
        )}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        // isSignedIn={true}
        cookiePolicy={"single_host_origin"}
      />
      <button className={styles.btn} disabled>
        <img
          className={styles.btn_image}
          src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
          alt="img"
        />
        <p className={styles.btn_p}>Sign in with Facebook</p>
      </button>
      <button className={styles.btn} disabled>
        <img
          className={styles.btn_image}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEUAAAD////7+/v29vbp6emVlZWwsLD09PTi4uKGhob5+fns7Oza2toiIiKlpaXm5uYpKSnU1NQMDAxra2swMDBFRUV+fn5kZGTAwMDOzs50dHQVFRVaWlqrq6tMTEwbGxtBQUE5OTnExMSbm5uBgYG4uLhcXFyOjo5SUlItLS1nZ2fcrUYHAAAJp0lEQVR4nO2diZqqOgyAC6jAiOCGCi6jIi7n/R/wjs7MHTySNimVxvnO/wDiL9glTYJwWOL2g0UR9nwDHyUMfIZhvCTrnsfiSmbg47gZusHitBPf/D5DNytWosKvM8zCrRC/2DDLd0L8YkM/H/zt97sMy+Gjn1iODHwyD8PRpMZPiGlk4LM5GHq9S62gSH+JYf9U7yfEPDHw8fYNoxwSFOGvWLXtz6CgKFwDF7BtuHiYAyv0TFzBsuECGGNuTPcmLmHXcPEuERTzwMQ1rBrua5Yx1YHmzcRFbBpGU6ngcm3kKhYN/ZVUUKQm1mw2Dd2ZXFBMPCPXsWdYjOWC48LMdawZLuR/QiF2RkZSe4b9+t1E9SE1dCVLhm6sEjSy+71iyXC0VQmeTV3KjqGvGkeFWJi6lh3DTCmYmthW3LBjqBxmhJFF9w0rhoFS8I+Jve8nVgwVyzVDQbYvbBgmyltYGNlVfGLDUDmQrgwtZ25YMOyo1mvD0uTlLBjGiiW3OJjZVHxhwVA1VWxMREl/aN8wShWGJgLdFdo3jJdyQXNz/SetGyq29ksjMdIqrRsGR5ngwEz0qUrrhntZkHsQG5zqv2jdsCeZK4ax0Xnik9YN17DgtDR/By0YFrCgweV2hbYN/RASTJ/whF5p27APnIdeDEVHH2nbsFO7ZltOnvOEXmnbMJnXCG7i/vOu2LZh8Li/nxbPu4FO+4bR38f2g+7IWFitltYN73cW6Tp4xhxYpW3DUWXR9h5Gz9ZzLBimg+HwMt2eZ70nji5V2jb0giiKgn4L9+4b2/k0z8eYofvm+b7nvTUdGN1Otuit4xvrXlnuR0mz5ZwJw07WK06HWX5ldjh11wvdUEtQdmfzdPizwVoOdpt5Hsb7jva3a2rYKQ/zzW5wt+l7n6bHWUkeSEbdP2ldHu1VdLqZFJrzZiNDP15doLjS8jLvEcaTTjeVpw+J8SA96dxJfUNvsZF/pQ82e8wZkttZb5Uf9Ulakg+lNA3dJJbFW34Ynkbyx/VjZFGfJlbYrRPa06pnGCH9bkx6ETga9rNYFSB+dIxJBzc6hkmsfj7v2J4WtZH60ToHhhY5Z8p6SMOwrNviKRjMu3//JZPegfhDVcjxkXGyYSfU+tk/toHH8Odr9cvZWTF2ytl1sbeRaihLy1Yy2ObrURJk3eNOmjqL4ohcVtAMPTgW2D5jXMoNyTBRJ/q0ygkzb1AMHyIQ1gkRf0aCYba1LfTIRD014g2llRHWUCuiDUtVBoUlJqpTf6yhtPTDKrliLY40zBpNz8/lYMIwaz5BP5FTc8OI7SP6iXTqxxj2yRuclhnKDj4Qhm/MVjI1hM0MVaUf9pFOimpDZemHdQ7S+UJpKM/w4UApX3+rDN2ubQEFqaryRGUor/K0j3ofrDDsM39Gm+8tJBlMHMgRybZyQ2VKtl0mmGiU3BBMYGLBEXWMITX0bDtIWeHywaWGpAOFtjkjY/syw0Az9tsK6EpvmSHnyX6Krk+UGPbZBQ9/WMZYQZnhmvFyJsdnL8CGPtwZxzoDQlkNbJgx3tlTSr9gQ3U9uTVWBEHYsM83drEkpeuAhhnfJSnqyElt2LPtAbKjZVxBhv7BtghIl5bnBhkmbEfSHbFhBmQ4si0CQu0eBRmy/RuSy6ABQ4/txmlCTWwDDH2uc8W4SxSEDDu2TSCm5MY8gOHetgnEipxGCxhyygy6Q3HgizfUSM5rhTG9oQRgyDVC807Pg643fLNtArElCwKGvm0TiLkpQ7aThTztgmAY2TaB0OhcU2/IdjrUKMapN1zYNoHQqOirNyxtm0DQBQFDtgejxgzZRhL/GaIN2Z46/TP8Z/jP0D4aRc8vZqjRMvLFDDUaRNcbsg3TaPSre7EZX5buTDJkuy4lnf7KDNnuLXamDNnugN/pG8R6Q7Zna8bipeqG27aYGTJkG03UGGrqDfkmlhLTFEBDh22ZzJLcfRAwZFkRe4OQsyc1ZHvILbbUpSlgyHbZJgT1MX21M2B6033AkO+EKASxXTSUi6FoK24TXJmF0lC/dczzoa3coIwhxinQIiUtv18u6+sK6ZwUMlS/r8gmlOEUMgy4pn3d2BIWNpBh/49tCymE5xQy9NgGFG8M8OMpGCdnG6r5ZIPuHw3n6jPuZnIF/Spd0JBfU6i/mCFTaUHDN/CN51w44QZU+LyKbVT4f06onHZJZRffff43XYwibMh8RrxRIP6LklNV9n/ED0L1Tkpi2GM+X1wZ5036YgRsC4OqnFVTv+zsn2uy9z1jRVRDZqh8jR8TVto9hlh3HKhykfUVlmaoKN+IyoYJ3Dhcasg6lHHPJYRGHKkh26KEOlKgzYI8j4pzTPGR+lQUueELPaZCz7DPOPT9SP1uSm7o8m6jdM+53kGRz8g2KaMGIDil6tf2Giu3Kxdg1lflpL7OWNMFqktVhsr3E3NhrDXjO68QkPoC7E6nzJzev8jyG+yMpTTk3EypwhEMEKuz38uXuIlw7y+1of8KE4bkGANRwbB+gaWb5LQNYejznzB2knAUpgqFcYLUF7nk26PqbLhHpAYNe7Lzv4myW4gz9La2HeRIQ/u4ajDeR97SW4g0ZD0nDuTn3ciKPrYF+kK2nKEYMu6iuFF0+sRWZS7YHrWpMmuwhi7XfaIyJQNdWRvxjA6rewzia4dZLsDHUHRGx9DjmLmAaFtOqP+O+C1Pl4iqWUqFO7/q4DmiPx3F0GUXz8Bk7ZO6FHBrH4WqvCAZury2UUfUl6Z1muhwGk+nuFJEYi8NTm/qjHFtMImGbszmdQI5sq6E2g+FTQgcXYdI7viSbG273RijX3BB72mzYLE+zdG9aDW69nCoxFBte5sZMshZRL6SW9swsV6oQGl5rWNo/c0QE0rjeS1Dp2d1tMG+y6qJ4ZvN0eZCq8jXM3Q8e9HFd8Io08DQ8W11XVgSi9W1DZ2OnTljWVDbzmsbOoGVHGlUIZAhQyvv0SW+Y6ahoRNpPKjjwXR3ZTrQidwVxvomIglIw81yXuxHQeebJMp6M1p9XEx+RJsaOh76nUm7blA7RPR76NOCd4125Y0NHadARBjfd6FsFdIvNpiDLWWBE0BTQydTLMPHaa54cfb1Qw4bxTpwGBJeCHhHY0OnE0r+TINJgfvpgzi/SASPek/oleaGjrufAU/Z5rTAtyHx98UKGF9Xse4NdIwYXr9c+BiCm4ZlRBvc3WDffcwwW+alRufZH4wYfjgG8d13S0/7hPrqqSteZ1QcK7/WMF9HOp9TwZDhB2/Joju7Eq6zvs7E9Y3rJ6MyLor1Iur45JcfPfAfY5uxDQYw5cUAAAAASUVORK5CYII="
          alt="img"
        />
        <p className={styles.btn_p}>Sign in with Apple</p>
      </button>
      <button className={styles.btn} disabled>
        <img
          className={styles.btn_image}
          src="https://img.pngio.com/twitter-png-twitter-logo-twitter-icon-twitter-transparent-twitter-logo-transparent-260_260.jpg"
          alt="img"
        />
        <p className={styles.btn_p}>Sign in with Twitter</p>
      </button>
      <button className={styles.btn} disabled>
        <img
          className={styles.btn_image}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsOnMWgt5ADlNxp1XuoV_3r0R6kRunqhBdMGMdGjbUrZbQFzESqux3XJtFV8MhF_T-Ocs&usqp=CAU"
          alt="img"
        />
        <p className={styles.btn_p}>Sign in with Email</p>
      </button>
      <h6 className={styles.login_h6}>
        No account?{" "}
        <span onClick={() => swap(!status)} className={styles.login_h6_span}>
          Create one
        </span>
      </h6>
    </div>
  );
};

export default Login;
