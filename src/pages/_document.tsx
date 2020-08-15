import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />

          {/* The below script tag can be removed if you're not using buttons.github.io in your app's components. */}
          <script
            async
            defer
            src="https://buttons.github.io/buttons.js"
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
