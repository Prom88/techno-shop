import image from '@/shared/image.png'
import Image from 'next/image'
import { Card, Price, Title } from './styled'

export const ItemCard = () => {
	return (
		<Card>
			<Image src={image} alt='/' height={256} width={187} />
			<Title>Смартфон Apple iPhone 11 128Gb Зеленый</Title>
			<Price>36 990 руб.</Price>
		</Card>
	)
}
