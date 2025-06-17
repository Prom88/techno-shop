'use client'
import { useState } from 'react'

import { Button } from '@/widgets/Button'
import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/header'
import Image from 'next/image'
import Link from 'next/link'

import cart from '@/shared/cart.svg'
import phone from '@/shared/image.png'
import phone2 from '@/shared/phone2.webp'
import phone3 from '@/shared/phone3.webp'
import baseTheme from '@/shared/theme'

import {
	ButtonsBox,
	Cart,
	Container,
	Counter,
	DescriptionBox,
	ImageBox,
	ImageSelector,
	Line,
	NameBox,
	NavLink,
	PhoneBox,
} from './styled'

const Imges = [phone, phone2, phone3]

export const Details = () => {
	const [count, setCount] = useState<number>(1)

	const [image, setImage] = useState(Imges[0])

	function increace() {
		setCount((prev) => prev + 1)
	}
	function decreace() {
		setCount((prev) => (prev == 1 ? 1 : prev - 1))
	}

	return (
		<div style={{ overflow: 'initial' }}>
			<Header />
			<Link href='/cart'>
				<Cart>
					<Image
						src={cart}
						alt='cart'
						height={44}
						width={44}
						style={{ marginLeft: '-10px' }}
					/>
				</Cart>
			</Link>
			<Container>
				<PhoneBox>
					<ImageBox>
						<NavLink href={'/main'}>{'< Назад к другим покупкам'}</NavLink>
						<Image src={image} alt='/' height={391} />{' '}
						<ImageSelector>
							{Imges.map((img, index) => (
								<Image
									src={img}
									key={index}
									alt='/'
									height={71}
									onClick={() => setImage(Imges[index])}
								/>
							))}
						</ImageSelector>
						<DescriptionBox>
							<h1>Описание</h1>
							<Line></Line>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.
							</p>
						</DescriptionBox>
					</ImageBox>
					<NameBox>
						<h1>Смартфон Apple iPhone 11 128Gb Green</h1>
						<h3>Артикул 123456789</h3>
						<h2>59 900 руб.</h2>
						<ButtonsBox>
							<Counter>
								<button onClick={() => decreace()}>-</button>
								{count}
								<button onClick={() => increace()}>+</button>
							</Counter>
							<Button
								title='Добавить'
								style={{
									background: '#252525',
									color: '#ffffff',
									fontFamily: `${baseTheme.fonts.montserrat}`,
									fontWeight: 'bolder',
									width: '132px',
									height: '33px',
								}}
							/>
						</ButtonsBox>
					</NameBox>
				</PhoneBox>
			</Container>

			<Footer />
		</div>
	)
}
