const arr = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sept",
	"Oct",
	"Nov",
	"Dec",
];
export const convertDates = (date) => {
	date = date.trim();
	const subDate = date.substr(0, 10);
	date = subDate.split("-");
	const str = arr[Number(date[1]) - 1] + " " + date[2];
	return str;
};
