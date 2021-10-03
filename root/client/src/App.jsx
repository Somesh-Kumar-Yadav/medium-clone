import styles from "./App.module.css";
// import { HomePage } from "./components/HomePage/HomePage";
import Routes from "./routes/Routes";

function App() {
	return (
		<div className={styles.App}>
			<Routes />
			{/* <HomePage /> */}
		</div>
	);
}

export default App;
