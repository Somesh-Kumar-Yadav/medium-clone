import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Signup from "./Signup";
import Login from "./Login";
import styles from "../../styles/LoginSignup.module.css";

const LoginSignup = ({ status, set }) => {
  const [swapLogin, setswapLogin] = useState(true);
  //console.log(status, set);
  return (
    <div>
      <Modal open={status} onClose={() => set(false)}>
        <div className={styles.modal}>
          {swapLogin ? (
            <Login swap={setswapLogin} set={set} status={swapLogin} />
          ) : (
            <Signup swap={setswapLogin} set={set} status={swapLogin} />
          )}
          <p className={styles.modal_p}>
            Click “Sign In” to agree to Medium’s{" "}
            <span className={styles.modal_span}>Terms of Service</span>
            and acknowledge that Medium’s{" "}
            <span className={styles.modal_span}>Privacy Policy</span> applies to
            you.
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default LoginSignup;
