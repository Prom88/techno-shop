'use client'
import burger from '@/shared/burger.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {
	Button,
	HeaderContainer,
	Logo,
	MobileMenu,
	MobileMenuButton,
	NavMenu,
	NavMenuButton,
	Phone,
} from './styled'

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
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
					<NavMenuButton onClick={() => setIsOpen(!isOpen)}>
						<Image src={burger} alt='menu' color='white' />
					</NavMenuButton>
					<Phone href='tel:+79999999999'>+7(999) 999 99-99</Phone>
				</NavMenu>
			</HeaderContainer>
			{isOpen && (
				<MobileMenu>
					<Link href='/cart'>
						<MobileMenuButton onClick={() => setIsOpen(false)}>
							Коризна
						</MobileMenuButton>
					</Link>
					<Link href='/main'>
						<MobileMenuButton onClick={() => setIsOpen(false)}>
							Главная
						</MobileMenuButton>
					</Link>
					<Link href={'/main#models'} scroll={true}>
						<MobileMenuButton onClick={() => setIsOpen(false)}>
							Модели
						</MobileMenuButton>
					</Link>
					<Link href={'#questions'}>
						<MobileMenuButton onClick={() => setIsOpen(false)}>
							Вопросы
						</MobileMenuButton>
					</Link>
				</MobileMenu>
			)}
		</>
	)
}
