export class StringFormatter {
	static format(value: string, format: string): string {
		return value.replace(/{(\d+)}/g, (match, index) => {
			return format.split(',')[index];
		});
	}

	static capitalizeFirstLetter(value: string): string {
		if (!value) return value;
		return value.charAt(0).toUpperCase() + value.slice(1);
	}
}
