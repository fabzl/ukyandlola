import React, { Component, setGlobal, getGlobal } from 'reactn';

import { ButtonChangLang } from './style.css';

// import styled from 'styled-components';
// import theme from '../../styles/theme';
// import propTypes from './node_modules/prop-types';

class ChangLang extends Component {
	changeLanguage = () => {
		const { lang } = getGlobal();
		// console.log('lang :', lang, lang === 'esp');

		if (lang === 'esp') {
			this.setGlobal({ lang: 'eng' });
			// console.log('setting global to eng', lang);
			this.setState({ language: 'eng' });
		} else {
			this.setGlobal({ lang: 'esp' });
			this.setState({ language: 'esp' });
			// console.log('setting global to esp', lang);
		}
	};

	render() {
		const { lang } = getGlobal();

		return (
			<ButtonChangLang onClick={this.changeLanguage}>
				{this.global.lang === 'esp' ? 'english' : 'español'}
			</ButtonChangLang>
		);
	}
}

export default ChangLang;
