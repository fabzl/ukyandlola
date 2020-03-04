import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

const NotFoundPage = () => (
	<Layout>
		<Seo title="404: Not found" />
		<h1>NOT FOUND</h1>
		<p>No existe. Fin.</p>
	</Layout>
);

export default NotFoundPage;
