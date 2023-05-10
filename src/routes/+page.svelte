<script lang="ts">
	// @ts-ignore
	import { compile, parse } from 'mathjs';

	function createFunction(expression: string) {
		const parsed = parse(expression);
		const compiled = compile(parsed as any);
		return function (x: number) {
			return compiled.evaluate({ x });
		};
	}

	// Quadratic
	const quadratic = '2*x^2 + 3*x + 1';
	const f1 = createFunction(quadratic);
	console.log(f1(2)); // 2*(2^2) + 3*2 + 1 = 17

	// Exponential
	const exponential = '3 * e^(2*x)';
	const f2 = createFunction(exponential);
	console.log(f2(2)); // 3 * e^(2*2) = 162.86245334760156

	// Mixed
	const mixed = 'x^3 - 2*sin(x) + e^x';
	const f3 = createFunction(mixed);
	console.log(f3(2)); // 2^3 - 2*sin(2) + e^2 = 12.778112197861301

	// Trigonometric
	const trigonometric = 'cos(x) - sin(x)';
	const f4 = createFunction(trigonometric);
	console.log(f4(Math.PI / 4)); // cos(pi/4) - sin(pi/4) = 0

	let equation = '';
	$: console.log(equation);
</script>

<input
	type="text"
	bind:value={equation}
	placeholder="Enter equation"
	class="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
/>
