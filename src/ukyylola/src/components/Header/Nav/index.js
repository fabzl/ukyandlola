import React, { getGlobal } from 'reactn';
import { Link } from 'gatsby';
import { Container } from './Nav.css';

class Nav extends React.Component {
	constructor(props) {
		super(props);
	}

	state = {
		language: true
	};

	render() {
		const { lang } = getGlobal();

		return (
			<Container>
				<div id="menuToggle">
					<input type="checkbox" />

					<span />
					<span />
					<span />

					<ul id="menu">
						<li>
							<Link to="/">Home</Link>
						</li>
						{/* <li>
							<Link to="/about/">{this.global.lang === 'esp' ? 'Sobre el film' : 'About the film'}</Link>
						</li> */}
						<li>
							<Link to="/research/">{this.global.lang === 'esp' ? 'Investigación' : 'Research'}</Link>
						</li>
						<li>
							<Link to="/characters/">{this.global.lang === 'esp' ? 'Personajes' : 'Characters'}</Link>
						</li>
						<li>
							<Link to="/locations/">{this.global.lang === 'esp' ? 'Locaciones' : 'Locations'}</Link>
						</li>
						<li>
							<Link to="/script/">{this.global.lang === 'esp' ? 'Guión Literario' : 'Script'}</Link>
						</li>

						<li>
							<Link to="/documentary/">{this.global.lang === 'esp' ? 'Documental' : 'Documentary'}</Link>
						</li>
						<li>
							<Link to="/teaser/">Film Teaser</Link>
						</li>
						{/* <li>
							<Link to="/credits/">{this.global.lang === 'esp' ? 'Creditos' : 'credits'}</Link>
						</li> */}
					</ul>
				</div>
			</Container>
		);
	}
}

export default Nav;
