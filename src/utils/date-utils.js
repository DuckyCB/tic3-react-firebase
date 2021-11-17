
export function formatDay(dateFS){
	const dateJS = dateFS.toDate();
	const month = dateJS.getUTCMonth() + 1; //months from 1-12
	const day = dateJS.getUTCDate();
	const year = dateJS.getUTCFullYear();
	return day + "/" + month + "/" + year;
}

export function formatMinutes(dateFS){
	const dateJS = dateFS.toDate();
	const month = dateJS.getUTCMonth() + 1; //months from 1-12
	const day = dateJS.getUTCDate();
	const year = dateJS.getUTCFullYear();
	const hour = dateJS.getUTCHours();
	const minutes = dateJS.getUTCMinutes();
	return hour + ':' + minutes + ' ' + day + "/" + month + "/" + year;
}