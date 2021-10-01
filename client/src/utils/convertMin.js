export const convertMin = (text) => {
	text = text.trim().split(" ");
	const time = Math.ceil(text.length / 20);
	return time;
};
