import Head from 'next/head'

const Main = ({ children, router }) => {
    return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Takuya's homepage" />
        <meta name="author" content="glazk0" />
          
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@glazk0" />
        <meta name="twitter:creator" content="@glazk0" />
        <meta name="twitter:image" content="/card.png" />
          
        <meta property="og:site_name" content="Aeternum Discord Bot" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
          
        <title>Aeternum</title>
      </Head>
        {children}
    </div>
  )
}

export default Main