export const calculateQuantile = (data: bigint[], q: number): bigint => {
	if (q < 0 || q > 1) throw new Error("Quantile must be between 0 and 1");
	const sorted = data.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
	const pos = (sorted.length - 1) * q;
	const base = BigInt(Math.floor(pos));
	const rest = pos - Math.floor(pos);
	if (sorted[Number(base)] === undefined) return 0n;
	const result = sorted[Number(base)];
	if (rest === 0) {
		return result;
	}
	const next = sorted[Number(base) + 1] || sorted[Number(base)];
	return result + ((next - result) * BigInt(Math.round(rest * 100))) / 100n;
};
