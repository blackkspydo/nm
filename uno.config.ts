import { defineConfig } from 'unocss';
import transformerDirectives from '@unocss/transformer-directives';
import extractorSvelte from '@unocss/extractor-svelte';
import presetMini from '@unocss/preset-mini';
import presetWebFonts from '@unocss/preset-web-fonts';
import presetUno from '@unocss/preset-uno';

export default defineConfig({
	presets: [
		presetUno(),
		presetWebFonts({
			provider: 'google',
			fonts: {
				rubik: [
					{
						name: 'Rubik',
						weights: ['400', '500', '700'],
						italic: true
					},
					{
						name: 'sans-serif',
						provider: 'none'
					}
				],
				karla: [
					{
						name: 'Karla',
						weights: ['400', '500', '700'],
						italic: true
					},
					{
						name: 'sans-serif',
						provider: 'none'
					}
				]
			}
		})
	],
	extractors: [extractorSvelte(), presetMini()],
	transformers: [transformerDirectives() as any],
	theme: {
		colors: {
			grey: {
				'800': '#0F0F0F',
				'700': '#1E1E1E',
				'600': '#3C3B3B',
				'500': '#5D5C62',
				'400': '#787979',
				'300': '#CED0D0',
				'200': '#E7E8E8',
				'100': '#F8F8FA'
			},
			white: '#FFFFFF',
			red: '#FF6666'
		}
	},
	shortcuts: {
		'karla-regular': 'font-karla font-normal',
		'karla-medium': 'font-karla font-medium',
		'karla-bold': 'font-karla font-bold',
		'rubik-regular': 'font-rubik font-normal',
		'rubik-medium': 'font-rubik font-medium',
		'rubik-bold': 'font-rubik font-bold',
		'flex-center': 'flex justify-center items-center',
		'flex-between': 'flex justify-between items-center',
		'flex-col-center': 'flex flex-col justify-center items-center',
		'flex-col-between': 'flex flex-col justify-between items-center'
	},
	rules: [
		[
			'container',
			{
				'max-width': '1200px',
				width: '100%',
				'margin-left': 'auto',
				'margin-right': 'auto',
				'padding-left': '1rem',
				'padding-right': '1rem'
			}
		],
		[
			'bg-linear-purple-100',
			{
				background: 'linear-gradient(100.91deg, #BEB2F7 0%, #8D79EE 88.39%)'
			}
		],
		[
			'bg-linear-purple-50',
			{
				background: 'linear-gradient(98.89deg, #D7DBFF 0%, #C2C8FF 89.1%)'
			}
		],
		[
			'bg-linear-green',
			{
				background: 'linear-gradient(100.91deg, #40AE5F 0%, #4F7953 88.39%)'
			}
		],
		[
			'border-linear-purple-50',
			{
				'border-image-source': 'linear-gradient(98.89deg, #D7DBFF 0%, #C2C8FF 89.1%)',
				'border-image-slice': '2'
			}
		],
		[/^ls-(-?[\d.]+)(px|em|rem)$/, (match) => ({ 'letter-spacing': `${match[1]}${match[2]}` })]
	]
});
