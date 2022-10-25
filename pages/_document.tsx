/* eslint-disable react/no-danger */
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class ZBDDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* Fonts Preloading */}
          <link
            as="font"
            rel="preload"
            crossOrigin=""
            href="/fonts/athaus/Regular.woff2"
          />
          <link
            as="font"
            rel="preload"
            crossOrigin=""
            href="/fonts/athaus/Bold.woff2"
          />
          <link
            as="font"
            rel="preload"
            crossOrigin=""
            href="/fonts/athaus/Medium.woff2"
          />
          <link
            as="font"
            rel="preload"
            crossOrigin=""
            href="/fonts/athaus/Black.woff2"
          />
          <link
            as="font"
            rel="preload"
            crossOrigin=""
            href="/fonts/beyond/Regular.woff2"
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `
             @font-face {
              font-family: 'Aero';
              src: url('/fonts/athaus/Regular.woff2') format('woff2'),
                  url('/fonts/athaus/Regular.woff') format('woff');
              font-style: normal;
              font-weight: 400;
              font-display: block;
            }
    
            @font-face {
              font-family: 'Aero';
              src: url('/fonts/athaus/Medium.woff2') format('woff2'),
                  url('/fonts/athaus/Medium.woff') format('woff');
              font-style: bold;
              font-weight: 600;
              font-display: block;
            }

            @font-face {
                font-family: 'Aero';
                src: url('/fonts/athaus/Bold.woff2') format('woff2'),
                    url('/fonts/athaus/Bold.woff') format('woff');
                font-style: bold;
                font-weight: 800;
                font-display: block;
              }
            
          
            @font-face {
              font-family: 'Aero';
              src: url('/fonts/athaus/Black.woff2') format('woff2'),
                  url('/fonts/athaus/Black.woff') format('woff');
              font-style: bold;
              font-weight: 900;
              font-display: block;
            }

            @font-face {
              font-family: 'Beyond';
              src: url('/fonts/beyond/Regular.woff2') format('woff2'),
                  url('/fonts/beyond/Regular.woff') format('woff');
              font-style: normal;
              font-weight: 400;
              font-display: block;
            }
  
          }
          `,
            }}
          />
          {/* End Fonts Preloading */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
