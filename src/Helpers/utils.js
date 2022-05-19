import { format } from "date-fns";

export default function formatDate(d1, d2) {
	try {
		const fdate = format(new Date(d1), "yyyy MMM");
		const cdate = new Date(d2);

		const currentDate = new Date();
		let ldate = format(cdate, "yyyy MMM");

		if (
			currentDate.getFullYear() === cdate.getFullYear() &&
			currentDate.getMonth() === cdate.getMonth()
		)
			ldate = "Present";

		return fdate + " - " + ldate;
	} catch {
		return "";
	}
}
