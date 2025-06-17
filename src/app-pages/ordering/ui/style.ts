import baseTheme from '@/shared/theme'
import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 5% 0;
`

export const OrderBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 60px;
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
	& > span {
		font-family: ${baseTheme.fonts.montserrat};
		font-weight: bold;
		font-size: 32px;
	}
`
export const OrderTitle = styled.div`
	display: flex;
	justify-content: space-between;
	height: fit-content;
	gap: 15px;
	& > h1 {
		font-family: ${baseTheme.fonts.montserrat};
		font-weight: bold;
		font-size: 32px;
	}
	& > span {
		font-family: ${baseTheme.fonts.montserrat};

		color: ${baseTheme.colors.grey};
		font-weight: bold;
		font-size: 32px;
	}
`

export const OrderData = styled.div`
	width: 100%;
	gap: 20px;
	display: flex;
	flex-direction: column;
	& > h2 {
		font-family: ${baseTheme.fonts.montserrat};
		font-weight: bold;
		font-size: 23px;
	}
`
export const StyledSelect = styled.select`
	width: 100%;
	height: 65px;
	background-color: ${baseTheme.colors.darkWhite};
	border-radius: 10px;
	border: 1px solid ${baseTheme.colors.grey};
	font-size: 23px;
	font-family: ${baseTheme.fonts.inter};
	font-weight: lighter;
	> option {
		font-size: 23px;
		font-family: ${baseTheme.fonts.inter};
		font-weight: lighter;
	}
`

export const StyledInput = styled.input`
	width: 100%;
	height: 65px;
	background-color: ${baseTheme.colors.darkWhite};
	border-radius: 10px;
	border: 1px solid ${baseTheme.colors.grey};
	font-size: 23px;
	font-family: ${baseTheme.fonts.inter};
	font-weight: lighter;
`
export const Promo = styled.h3`
	font-size: 14px;
	font-family: ${baseTheme.fonts.inter};
	font-weight: lighter;
	align-self: center;
`
export const PayOption = styled.div`
	display: flex;
	gap: 13px;
	& > h3 {
		font-family: ${baseTheme.fonts.inter};
		font-weight: lighter;
		font-size: 20px;
	}
`
export const Sum = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	& > h1 {
		font-family: ${baseTheme.fonts.inter};
		font-weight: bold;
		font-size: 17px;
	}
	& > h3 {
		font-family: ${baseTheme.fonts.montserrat};
		font-weight: light;
		font-size: 17px;
	}
`
export const Line = styled.div`
	height: 1px;
	width: 100%;
	background-color: ${baseTheme.colors.grey};
`
