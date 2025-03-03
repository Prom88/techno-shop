'use client'
import { StyledButton } from './styled'

type TButton = {
	onClick?: () => void
	title: string
} & React.HTMLProps<HTMLButtonElement>

export const Button = ({ onClick, title, ...props }: TButton) => {
	return (
		<StyledButton style={props.style ? props.style : {}} onClick={onClick}>
			{title}
		</StyledButton>
	)
}
