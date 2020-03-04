import React, { useState } from 'react';
import { StNewsletterItem } from '../style.css';
import Logo from '../../Logo';
import Image from '../../Image';
import NewsletterForm from '../Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NewsletterItem = ({ name, frequency, img, logo, main, slug, title, description, callbackNotifier, callbackNewsletters, registered, subscribes }) => {

	const [ active, updateActive ] = useState(false);

	const handleActive = () => {
		updateActive(!active);
	}

	const handleRegistered = (status) => {
		callbackNotifier(status)
	}

	const handleNewsletters = (newsletters) => {
		callbackNewsletters(newsletters)
	}

	return (
		<StNewsletterItem className={main ? 'newsMain' : ''}>
			<div className="col" onClick={handleActive}>
				{main ? (
					<h2>
						<Logo Brand={logo} />
					</h2>
				) : (
					<h2>{name}</h2>
				)}
				<h3>{title}</h3>
				<h4>{frequency}</h4>
				<p>{description}</p>
				{ !registered ? (
					<button>Inscríbete &nbsp; <FontAwesomeIcon icon={['fas', 'chevron-right']} /></button>
				) : (
					<NewsletterForm newsletter={slug} callbackNotifier={handleRegistered} callbackNewsletters={handleNewsletters} registeredEmail={registered} />
				) }
			</div>
			<div className="col col2" onClick={handleActive}>
				<div className="bg">
					<Image bg filename={img} />
				</div>
				<div className="content">
					{!main && (
						<h3>
							<Logo Brand={logo} />
						</h3>
					)}
				</div>
			</div>
			{!registered && (
					<div className={active ? 'overlay active' : 'overlay'}>
						<NewsletterForm newsletter={slug} callbackNotifier={handleRegistered} callbackNewsletters={handleNewsletters} isRegistered={registered} />
					</div>
			)}
		</StNewsletterItem>
	);
};

export default NewsletterItem;
