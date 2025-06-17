'use client'
import baseTheme from '@/shared/theme'
import { Button } from '@/widgets/Button'
import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/header'
import Link from 'next/link'
import { useState } from 'react'
import {
	Container,
	Line,
	OrderBox,
	OrderData,
	OrderTitle,
	PayOption,
	Promo,
	StyledInput,
	StyledSelect,
	Sum,
	TitleBox,
} from './style'

export const Ordering = () => {
	const [shipping, setShipping] = useState<string>('CDEK')

	return (
		<div>
			<Header />
			<Container>
				<OrderBox>
					<TitleBox>
						<OrderTitle>
							<h1>Заказ</h1>
							<span>№111111</span>
						</OrderTitle>
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

					<OrderData>
						<h2>Данные для заказа</h2>
						<StyledInput placeholder='Имя*' />
						<StyledInput placeholder='Фамилия*' />
						<StyledInput placeholder='Телефон*' />
						<StyledInput placeholder='E-mail*' />
						<Promo>Ввести промокод</Promo>
					</OrderData>

					<OrderData>
						<h2>Доставка</h2>
						<StyledSelect
							onChange={(e) => {
								setShipping(e.target.value)
								console.log(shipping)
							}}
						>
							<option>CDEK</option>
							<option>Самовывоз</option>
						</StyledSelect>
						{shipping == 'CDEK' && (
							<>
								<StyledInput placeholder='Город*' />
								<StyledInput placeholder='Коментарий*' />
							</>
						)}
					</OrderData>
					<OrderData>
						<h2>Оплата</h2>
						<PayOption>
							<input type='radio' name='pay' />

							<h3>Оплата картой</h3>
						</PayOption>
						<PayOption>
							<input type='radio' name='pay' />
							<h3>При получении</h3>
						</PayOption>
						<Sum>
							<h3>Cумма:</h3>
							<h3>
								119 800{' '}
								<span
									style={{
										color: '#999999',
									}}
								>
									руб.
								</span>
							</h3>
						</Sum>
						<Line></Line>
					</OrderData>
					<Sum>
						<h1>ИТОГО:</h1>
						<h3>
							119 800{' '}
							<span
								style={{
									color: '#999999',
								}}
							>
								руб.
							</span>
						</h3>
					</Sum>
					<Link href={'/main'}>
						<Button
							title='Оформить заказ'
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
						></Button>
					</Link>
				</OrderBox>
			</Container>
			<Footer />
		</div>
	)
}
