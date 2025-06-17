import baseTheme from '@/shared/theme'
import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
	max-width: 100%;
	overflow: hidden;
	height: fit-content;
	display: flex;
	justify-content: center;
`

export const Background = styled(Image)`
	margin: 0 auto;
	justify-self: center;
	position: center;
`
export const Cart = styled.div`
	z-index: 1;
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

	@media (max-width: 700px) {
		display: none;
	}
`
