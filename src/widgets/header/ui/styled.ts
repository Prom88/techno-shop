'use client'
import baseTheme from '@/shared/theme'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
	min-width: 100%;
	height: 67px;
	background-color: ${baseTheme.colors.yellow};
	display: flex;
`

export const NavMenu = styled.nav`
	padding: 0 100px;
	width: 100%;
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
`
export const Phone = styled.a`
	font-family: ${baseTheme.fonts.inter};
	font-size: 20px;
	font-weight: 200;
`
