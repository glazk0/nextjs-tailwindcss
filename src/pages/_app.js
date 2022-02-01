import '../../styles/globals.css';

import Layout from '../client/layouts/Main';

export default function Website({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
