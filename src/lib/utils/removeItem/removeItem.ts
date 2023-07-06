export function removeItem<T>(arr: T[], item: T) {
	return arr.filter((x) => x !== item);
}
