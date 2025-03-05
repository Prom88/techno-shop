'use client'
import bg from '@/shared/bg15.svg'
import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/header'
import { ItemsLayout } from '../components/ItemsLayout'
import { Background, Container } from './styled'

export const Main = () => {
	const items = [
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

	return (
		<div>
			<Header />
			<Container>
				<Background src={bg} alt='background' width={window.innerWidth} />
			</Container>
			<ItemsLayout items={items} />
			<Footer />
		</div>
	)
}
