'use client'
import baseTheme from '@/shared/theme'
import styled from 'styled-components'

export const Card = styled.div`
	width: 256px;
	height: 481px;
	background-color: ${baseTheme.colors.white};
	border-radius: 24px;
	filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));
	flex-shrink: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`
export const Title = styled.h3`
	text-align: center;
	color: ${baseTheme.colors.black};
	font-family: ${baseTheme.fonts.montserrat};
	font-size: 13px;
	font-style: normal;
	font-weight: 600;
	line-height: 15.847px; /* 121.9% */
`
export const Price = styled.span`
	color: ${baseTheme.colors.black};
	text-align: center;
	font-family: ${baseTheme.fonts.openSans};
	font-size: 23px;
	font-style: normal;
	font-weight: 300;
`
