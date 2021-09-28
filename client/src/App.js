import styles from "./App.module.css";
import { NavBar } from "./components/LandingPage/NavBar";
import { WritePage } from "./pages/write/WritePage";

function App() {
	return (
		<div className={styles.App}>
			<NavBar />
			<WritePage/>
		</div>
	);
}

export default App;
