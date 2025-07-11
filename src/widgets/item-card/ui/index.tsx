'use client'
import image from '@/shared/image.png'
import { Button } from '@/widgets/Button'
import Image from 'next/image'
import Link from 'next/link'
import { Card, Price, StyledButton, Title } from './styled'

export type TItem = {
	id: string
	title: string
	price: number
}

export const ItemCard = ({ id, title, price }: TItem) => {
	return (
		<Card id={id}>
			<Image src={image} alt='/' height={256} width={187} />
			<Title>{title}</Title>
			<Price>
				{Intl.NumberFormat('ru-RU', {
					style: 'currency',
					currency: 'RUB',
				}).format(price)}
			</Price>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					width: '100%',
					padding: '0 10px',
				}}
			>
				<Button
					style={{ background: '#f5f5f5', width: '114px' }}
					title='В корзину'
				/>
				<Link href='/details'>
					<StyledButton>Подробнее</StyledButton>
				</Link>
			</div>
		</Card>
	)
}
