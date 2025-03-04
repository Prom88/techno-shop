'use client'

import baseTheme from '@/shared/theme'
import styled from 'styled-components'

export const StyledFooter = styled.footer`
	max-width: 100%;
	height: 470px;
	background-color: ${baseTheme.colors.black};
	margin-top: 90px;
	padding: 0 150px;
	display: flex;
	align-items: center;
`
export const Container = styled.section`
	height: fit-content;
	color: ${baseTheme.colors.white};

	& > h1 {
		font-family: ${baseTheme.fonts.montserrat};
		font-size: 60px;
		font-weight: 800;
		margin-bottom: 14px;
	}
	& > h2 {
		margin: 20px 0;
		font-family: ${baseTheme.fonts.montserrat};
		font-size: 28px;
		font-weight: 600;
	}
`

export const Line = styled.div`
	width: 100%;
	height: 2px;
	background-color: ${baseTheme.colors.white};
`
