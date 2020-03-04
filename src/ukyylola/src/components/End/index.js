import React from 'react';
import { Container, Content, TextHolder, BuyButton, IconHolder, CenteredTitle, CenteredP } from './End.css';

class End extends React.Component {
	constructor(props) {
		super(props);
		this.clickScroll = this.clickScroll.bind(this);
		this.state = {
			loading: true,
			loadingError: false,
			data: {},
			atributos: [],
			fichas: [],
			selectedPlan: 1,
			selectedURL: '',
			userSelectedPLan: ''
		};
	}

	componentDidMount() {}

	clickScroll() {
		if (typeof window !== 'undefined') {
			window.scrollTo({
				top: window.innerHeight,
				left: 0,
				behavior: 'smooth'
			});
		}
	}
	render() {
		return (
			<Container>
				<Content>
					<TextHolder>
						<CenteredTitle>Ya estás listo.</CenteredTitle>
						<CenteredP>Comienza a navegar sin límites en La Tercera.</CenteredP>
						<BuyButton
							href="https://www.latercera.com"
							className={this.state.userSelectedPLan}
							target="_blank"
						>
							Empezar
						</BuyButton>
					</TextHolder>
				</Content>
			</Container>
		);
	}
}

export default End;
