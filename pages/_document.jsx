import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,600;1,100;1,200;1,300;1,400&family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <meta name="description" content="Next Movie" />
          <meta name="keywords" content="next, movie, movies, film, films" />
          <meta name="author" content="Next Movie" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
