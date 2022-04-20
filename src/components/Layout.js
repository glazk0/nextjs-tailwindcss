import Head from 'next/head';

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="Your site name" />
				<meta name="author" content="glazk0" />

				<link rel="apple-touch-icon" href="apple-touch-icon.png" />
				<link rel="shortcut icon" href="/icons/favicon.ico" type="image/x-icon" />

				<link rel="manifest" href="/manifest.json" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@yourname" />
				<meta name="twitter:creator" content="@yourname" />
				<meta name="twitter:image" content="/card.png" />

				<meta property="og:site_name" content="Your site name" />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="/card.png" />

				<title>Your site name</title>
			</Head>
			{children}
		</>
	);
}
