import { expect, it } from "bun:test";
import { calculateQuantile } from "./";

const data: bigint[] = [1n, 2n, 3n, 4n, 5n, 6n, 7n, 8n, 9n, 10n];

it("should calculate 25th percentile / first quartile", () => {
	const firstQuartile = calculateQuantile(data, 0.25);
	expect(firstQuartile).toBe(3n);
});

it("should calculate 50th percentile / median", () => {
	const median = calculateQuantile(data, 0.5);
	expect(median).toBe(5n);
});

it("should calculate 75th percentile / third quartile", () => {
	const thirdQuartile = calculateQuantile(data, 0.75);
	expect(thirdQuartile).toBe(7n);
});

it("should throw error if quantile is not between 0 and 1", () => {
	expect(() => calculateQuantile(data, 1.1)).toThrowError(
		"Quantile must be between 0 and 1",
	);
	expect(() => calculateQuantile(data, -0.1)).toThrowError(
		"Quantile must be between 0 and 1",
	);
});

it("should return 0 if data is empty", () => {
	expect(calculateQuantile([], 0.5)).toBe(0n);
});
