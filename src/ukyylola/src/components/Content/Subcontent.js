import React from 'react';
import { SubtitleContainer, StyledImage } from './Content.css';
import VideoPlayer from '../VideoPlayer';

const Subcontent = ({ image, video }) => {
	return (
		<SubtitleContainer>
			{video && <VideoPlayer url={video} />}
			{!video && image && image.localFile && <StyledImage fluid={image.localFile.childImageSharp.fluid} />}
		</SubtitleContainer>
	);
};

export default Subcontent;
