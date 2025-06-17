import baseTheme from '@/shared/theme'
import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 5% 0;
`

export const CartBox = styled.div`
	padding-top: 60px;
	padding-left: 4%;
	padding-right: 4%;
	max-width: 950px;
	width: 100%;
	box-shadow: 0px -1px 6.9px 0px rgba(0, 0, 0, 0.25);
	height: fit-content;
	border-radius: 14px;
`
export const TitleBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	height: fit-content;
	& > h1 {
		font-family: ${baseTheme.fonts.montserrat};
		font-weight: bold;
		font-size: 32px;
	}
`
export const CartItem = styled.div`
	display: flex;
	height: 157px;
	width: 100%;
	border-bottom: 1px solid ${baseTheme.colors.grey};
	margin-bottom: 15px;
`
export const ItemsBox = styled.div`
	margin-top: 60px;
`
export const NameBox = styled.div`
	height: fit-content;
	margin-left: 20px;
	& > h1 {
		font-family: ${baseTheme.fonts.openSans};
		font-size: 18px;
		font-weight: 300;
		line-height: 24.5px;
	}
`
export const Counter = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 8px;
	width: 153px;
	height: 33px;
	border-radius: 5px;
	font-weight: lighter;
	font-family: ${baseTheme.fonts.inter};

	& > button {
		height: 45px;
		width: 45px;
		border-radius: 10px;
		background-color: rgba(37, 37, 37, 0.051);
		font-size: 20 px;
		font-weight: bold;
	}
`
export const ButtonsBox = styled.div`
	width: fit-content;
	display: flex;
	height: fit-content;
	margin-top: 40px;
	gap: 40px;
	& > button {
		font-size: 18px;
		font-weight: lighter;
		font-family: ${baseTheme.fonts.inter};
		color: ${baseTheme.colors.darkGrey};
	}
	& > button:hover {
		color: ${baseTheme.colors.yellow};
	}
`
export const Price = styled.span`
	font-weight: lighter;
	font-family: ${baseTheme.fonts.inter};
	color: ${baseTheme.colors.darkGrey};
	width: 100%;
	text-align: right;
	& > span {
		color: ${baseTheme.colors.black};
		font-weight: 300;
	}
`
export const FinalPrice = styled.div`
	width: 100%;
	height: fit-content;
	text-align: right;
	color: ${baseTheme.colors.black};
	font-family: ${baseTheme.fonts.inter};
	font-size: 20px;
	font-weight: 600;
	& > span {
		font-weight: 300;
	}
	& > span:last-child {
		font-weight: 300;
		color: ${baseTheme.colors.darkGrey};
	}
`
