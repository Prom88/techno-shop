'use client'
import burger from '@/shared/burger.svg'
import Image from 'next/image'
import Link from 'next/link'
import {
	Button,
	HeaderContainer,
	Logo,
	NavMenu,
	NavMenuButton,
	Phone,
} from './styled'

export const Header = () => {
	return (
		<HeaderContainer>
			<NavMenu>
				<Logo>fakeShop|Магазин</Logo>

				<Link href='/main'>
					<Button>Главная</Button>
				</Link>
				<Link href={'/main#models'} scroll={true}>
					<Button>Модели</Button>
				</Link>
				<Link href={'#questions'}>
					<Button>Вопросы</Button>
				</Link>
				<NavMenuButton>
					<Image src={burger} alt='menu' color='white' />
				</NavMenuButton>
				<Phone href='tel:+79999999999'>+7(999) 999 99-99</Phone>
			</NavMenu>
		</HeaderContainer>
	)
}
