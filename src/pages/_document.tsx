import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

export class Document extends NextDocument {
  //   static async getInitialProps(context: DocumentContext): Promise<DocumentInitialProps> {
  //     const initialProps = await Document.getInitialProps(context);
  //     return { ...initialProps };
  //   }
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
