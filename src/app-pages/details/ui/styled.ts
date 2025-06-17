import baseTheme from '@/shared/theme'
import Link from 'next/link'
import styled from 'styled-components'

export const Container = styled.main`
	width: fit-content;
	margin: 0 auto;
	margin-top: 50px;
`
export const PhoneBox = styled.section`
	margin-top: 80px;
	display: flex;

	width: fit-content;
`

export const MobileName = styled.div`
	box-shadow: 0px -1px 10px 0px rgba(0, 0, 0, 0.1);

	display: flex;
	gap: 15px;
	flex-direction: column;
	padding: 7px 11px;
	width: 100%;
	border-radius: 21px 21px 0 0;
	height: 190px;
	background-color: ${baseTheme.colors.white};

	position: sticky;
	bottom: 0px;

	@media (min-width: 1010px) {
		display: none;
	}

	& > h1 {
		font-family: ${baseTheme.fonts.montserrat};
		font-size: 28px;
		font-weight: bold;
	}
	& > h2 {
		font-family: ${baseTheme.fonts.montserrat};
		font-size: 20px;
		font-weight: 600;
	}
	& > h3 {
		font-family: ${baseTheme.fonts.openSans};
		font-size: 18px;
		font-weight: lighter;
		color: ${baseTheme.colors.darkGrey};
	}
`

export const NameBox = styled.div`
	display: flex;
	gap: 15px;
	flex-direction: column;
	height: fit-content;
	padding-bottom: 60px;
	border-bottom: 1px solid rgba(37, 37, 37, 0.051);

	& > h1 {
		font-family: ${baseTheme.fonts.montserrat};
		font-size: 28px;
		font-weight: bold;
		width: 246px;
	}
	& > h2 {
		font-family: ${baseTheme.fonts.montserrat};
		font-size: 20px;
		font-weight: 600;
	}

	& > h3 {
		font-family: ${baseTheme.fonts.openSans};
		font-size: 18px;
		font-weight: lighter;
		color: ${baseTheme.colors.darkGrey};
	}

	@media (max-width: 1010px) {
		display: none;
	}
`
export const Counter = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 8px;
	width: 132px;
	height: 33px;
	border-radius: 5px;
	background-color: rgba(37, 37, 37, 0.051);
	font-family: ${baseTheme.fonts.inter};
	@media (max-width: 1010px) {
		width: 46%;
	}

	& > button {
		font-size: 20 px;
		font-weight: bold;
	}
`
export const ButtonsBox = styled.div`
	display: flex;
	gap: 22px;
	width: 100%;
	@media (max-width: 1010px) {
		justify-content: center;
	}
`

export const NavLink = styled(Link)`
	align-self: flex-start;
	margin-top: -50px;
	color: ${baseTheme.colors.grey};
	font-family: ${baseTheme.fonts.inter};
	font-weight: lighter;
`
export const ImageBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;
	max-width: 665px;
	width: 100%;
`

export const ImageSelector = styled.div`
	display: flex;
	gap: 30px;
`

export const DescriptionBox = styled.div`
	margin-bottom: 100px;
	align-self: flex-start;
	& > h1 {
		text-decoration: underline;
		font-family: ${baseTheme.fonts.montserrat};
		font-weight: bold;
		font-size: 28px;
	}

	& > p {
		font-family: ${baseTheme.fonts.openSans};
		color: ${baseTheme.colors.darkGrey};
		font-size: 18;
		font-weight: lighter;
		margin-top: 30px;
		line-height: 24.5px;
	}
	@media (max-width: 690px) {
		margin-left: 10px;
		margin-right: 10px;
	}
`
export const Line = styled.div`
	margin-top: -1px;
	width: 100%;
	height: 1px;
	background-color: ${baseTheme.colors.grey};
`
export const Cart = styled.div`
	height: 80px;
	width: 80px;
	border-radius: 50%;
	position: fixed;
	top: 67px;
	right: 15px;
	background-color: ${baseTheme.colors.white};
	display: flex;
	align-items: center;
	justify-content: center;
	filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
`
export const Article = styled.h2`
	font-family: ${baseTheme.fonts.inter};
	font-size: 18px;
	font-weight: lighter;
	color: ${baseTheme.colors.darkGrey};
`
