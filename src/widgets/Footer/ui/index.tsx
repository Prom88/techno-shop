'use client'
import { Container, Line, StyledFooter } from './styled'

export const Footer = () => {
	return (
		<StyledFooter id='questions'>
			<Container>
				<h1>Частые вопросы</h1>
				<Line />
				<h2>Как заказать?</h2>
				<Line />
				<h2>Как скоро придет заказ?</h2>
			</Container>
		</StyledFooter>
	)
}
