'use client'
import bg from '@/shared/bg15.svg'
import cart from '@/shared/cart.svg'
import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/header'
import Image from 'next/image'
import Link from 'next/link'
import { ItemsLayout } from '../components/ItemsLayout'
import { Background, Cart, Container } from './styled'

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
				<Background src={bg} alt='background' width={window.innerWidth} />
			</Container>
			<ItemsLayout items={items} />
			<Footer />
		</div>
	)
}
