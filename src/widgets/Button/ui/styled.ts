'use client'
import baseTheme from '@/shared/theme'
import styled from 'styled-components'

export const StyledButton = styled.button`
	background: none;
	border-radius: 20px;
	font-family: ${baseTheme.fonts.openSans};
	height: 44px;
	font-weight: 200;
	&:hover {
		border: 1px solid ${baseTheme.colors.yellow};
	}
`
