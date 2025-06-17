'use client'
import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/header'
import Image from 'next/image'
import { useState } from 'react'
import {
	ButtonsBox,
	CartBox,
	CartItem,
	Container,
	Counter,
	FinalPrice,
	ItemsBox,
	NameBox,
	Price,
	TitleBox,
} from './styled'

import phone from '@/shared/image.png'
import baseTheme from '@/shared/theme'
import { Button } from '@/widgets/Button'
import Link from 'next/link'

const itemsarr = [
	{
		title: 'iphone 13 256gb white',
		price: 50000,
		id: '1',
	},
	{
		title: 'iphone 13 128gb green',
		price: 40000,
		id: '2',
	},
	{
		title: 'iphone 13 256gb white',
		price: 40000,
		id: '3',
	},
	{
		title: 'iphone 13 256gb white',
		price: 40000,
		id: '4',
	},
	{
		title: 'iphone 13 128gb green',
		price: 40000,
		id: '5',
	},
	{
		title: 'iphone 13 128gb green',
		price: 40000,
		id: '6',
	},
]

export const Cart = () => {
	const [items, setItems] = useState(itemsarr)

	const [count, setCount] = useState<number>(1)
	function increace() {
		setCount((prev) => prev + 1)
	}
	function decreace() {
		setCount((prev) => (prev == 1 ? 1 : prev - 1))
	}
	return (
		<div>
			<Header />

			<Container>
				<CartBox>
					<TitleBox>
						<h1>Корзина</h1>
						<Link href='/main'>
							<button
								style={{
									color: '#999999',
									fontSize: '52px',
									fontWeight: 'bolder',
								}}
							>
								×
							</button>
						</Link>
					</TitleBox>
					<ItemsBox>
						{items.map((item, index) => (
							<CartItem key={index}>
								<Image
									src={phone}
									alt='iphone'
									height={80}
									width={80}
									style={{ borderRadius: '10px', objectFit: 'cover' }}
								/>
								<NameBox>
									<h1> Смартфон Apple iPhone 11 128Gb Green </h1>
									<ButtonsBox>
										<Counter>
											<button onClick={() => decreace()}>-</button>
											{count}
											<button onClick={() => increace()}>+</button>
										</Counter>
										<button
											onClick={() =>
												setItems(
													items.filter((product) => product.id != item.id)
												)
											}
										>
											Удалить
										</button>
									</ButtonsBox>
								</NameBox>
								<Price>
									<span>{item.price * count}</span> руб.
								</Price>
							</CartItem>
						))}
					</ItemsBox>
					<FinalPrice>
						<span>Сумма:</span>
						{items.reduce(
							(accumulator, currentValue) =>
								accumulator + currentValue.price * count,
							0
						)}{' '}
						<span>руб.</span>
					</FinalPrice>
					<Link href={'/ordering'}>
						<Button
							style={{
								marginTop: '70px',
								marginBottom: '30px',
								height: '74px',
								fontFamily: `${baseTheme.fonts.montserrat}`,
								fontSize: '24px',
								fontWeight: '700',
								color: '#f5f5f5',
								width: '100%',
								borderRadius: '14px',
								backgroundColor: '#252525',
							}}
							title='Оформить Заказ'
						/>
					</Link>
				</CartBox>
			</Container>
			<Footer />
		</div>
	)
}
