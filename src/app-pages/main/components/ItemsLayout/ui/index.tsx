import { ItemCard } from '@/widgets/item-card'

import { Container } from './styled'

import type { TItem } from '@/widgets/item-card'

export const ItemsLayout = ({ items }: { items: TItem[] }) => {
	return (
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
	)
}
