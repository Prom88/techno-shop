'use client'
import baseTheme from '@/shared/theme'
import styled from 'styled-components'

export const Section = styled.section`
	width: fit-content;
	margin: 0 auto;
	& > h1 {
		font-size: 60px;
		font-style: normal;
		font-weight: 700;
		color: ${baseTheme.colors.black};
		font-family: ${baseTheme.fonts.montserrat};
		margin-top: 86px;
		margin-bottom: 92px;
	}
`

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 0fr);
	gap: 27px;

	width: fit-content;
`
