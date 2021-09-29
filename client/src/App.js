import styles from "./App.module.css";
import { NavBar } from "./components/LandingPage/NavBar";
import { OurStroryPage } from "./components/OurStoryPage/OurStoryPage";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <OurStroryPage />
    </div>
  );
}

export default App;
