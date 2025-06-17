'use client'
import { ItemCard } from '@/widgets/item-card'

import { Container, Section } from './styled'

import type { TItem } from '@/widgets/item-card'

export const ItemsLayout = ({ items }: { items: TItem[] }) => {
	return (
		<Section id='models'>
			<h1>Модели</h1>
			<Container>
				{items.map((item) => (
					<ItemCard
						key={item.id}
						id={item.id}
						title={item.title}
						price={item.price}
					/>
				))}
			</Container>
		</Section>
	)
}
