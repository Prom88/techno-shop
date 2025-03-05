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
`
