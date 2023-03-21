import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <link
                rel="stylesheet"
                href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
                integrity="sha384-2ZzJLvBnnXjJz6U5r5qyO6OOnhUKUw/iitdJWRzC0hc+bbtl9KZvbi6xpfJg+oE"
                crossOrigin=""
            />
            <link
              rel="stylesheet"
              href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
            />
        </Head>
        <body>
            <Main />
            <NextScript/>
        </body>

      </Html>
    );
  }
}

export default MyDocument;
