import { Inter, Montserrat, Open_Sans } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'] })
const inter = Inter({ subsets: ['latin', 'cyrillic'] })
const openSans = Open_Sans({ subsets: ['cyrillic', 'latin'] })

const baseTheme = {
	colors: {
		yellow: '#FFC900',
		white: '#FFFFFF',
		darkWhite: '#F5F5F5',
		black: '#252525',
		grey: 'rgba(37, 37, 37, 0.1)',
		darkGrey: '#999999',
	},
	fonts: {
		montserrat: montserrat.style.fontFamily,
		inter: inter.style.fontFamily,
		openSans: openSans.style.fontFamily,
	},
}

export default baseTheme
