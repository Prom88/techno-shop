'use client'
import baseTheme from '@/shared/theme'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
	width: 100%;
	height: 67px;
	background-color: ${baseTheme.colors.yellow};
	display: flex;
	justify-content: center;
	align-items: center;
`

export const NavMenu = styled.nav`
	width: 90%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 100%;
	color: ${baseTheme.colors.white};
`
export const Logo = styled.div`
	font-family: ${baseTheme.fonts.montserrat};
	font-weight: 600;
	font-size: 23px;
`
export const Button = styled.button`
	background: none;
	border: none;
	color: ${baseTheme.colors.white};
	font-family: ${baseTheme.fonts.inter};
	font-size: 20px;
	font-weight: 200;
	@media (max-width: 700px) {
		display: none;
	}
`
export const NavMenuButton = styled.div`
	@media (min-width: 700px) {
		display: none;
	}
`

export const Phone = styled.a`
	font-family: ${baseTheme.fonts.inter};
	font-size: 20px;
	font-weight: 200;
	@media (max-width: 1000px) {
		display: none;
	}
`
export const MobileMenu = styled.div`
	width: 100%;
	height: fit-content;
	background-color: ${baseTheme.colors.yellow};
	display: flex;
	flex-direction: column;
	position: absolute;
`

export const MobileMenuButton = styled.button`
	height: 50px;
	width: 100%;
	color: ${baseTheme.colors.white};
	font-family: ${baseTheme.fonts.montserrat};
	font-size: 20px;
	font-weight: 500;
	&:hover {
		background-color: ${baseTheme.colors.white};
		color: ${baseTheme.colors.yellow};
	}
`
