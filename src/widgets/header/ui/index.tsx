'use client'
import { Button, HeaderContainer, Logo, NavMenu, Phone } from './styled'

export const Header = () => {
	return (
		<HeaderContainer>
			<NavMenu>
				<Logo>fakeShop|Магазин</Logo>
				<Button>Главная</Button>
				<Button>Модели</Button>
				<Button>Вопросы</Button>
				<Phone href='tel:+79999999999'>+7(999) 999 99-99</Phone>
			</NavMenu>
		</HeaderContainer>
	)
}
