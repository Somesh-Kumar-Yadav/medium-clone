/**
 *
 * @param {string} key
 * returns JSON.parse(data)
 */
export function loadData(key) {
	try {
		let data = localStorage.getItem(key);
		data = JSON.parse(data);
		return data;
	} catch (error) {
		return undefined;
	}
}
/**
 *
 * @param {string} key
 * @param {any} data
 */
export function saveData(key, data) {
	localStorage.setItem(key, JSON.stringify(data));
}
