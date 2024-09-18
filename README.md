# bigint-quantile

Easily calculate quantiles for large datasets.

## Installation

```bash
$ npm install bigint-quantile
```

## Usage

```ts
import { calculateQuantile } from "bigint-quantile";

const data: bigint[] = [1n, 2n, 3n, 4n, 5n, 6n, 7n, 8n, 9n, 10n];
const quantile = 0.5;

const result = calculateQuantile(data, quantile);
```
