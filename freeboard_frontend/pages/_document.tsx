import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {...initialProps};
  }

  render() {
    const kakaoKey = '7b361276d43366bba8247ce0a8956924';

    return (
      <Html>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
          <script
            type="text/javascript"
            src="//dapi.kakao.com/v2/maps/sdk.js?appkey=7b361276d43366bba8247ce0a8956924&libraries=services"
          ></script>
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
                var container = document.getElementById('map');
                var options = {
                  center: new kakao.maps.LatLng(33.450701, 126.570667),
                  level: 3,
                };
                var map = new kakao.maps.Map(container, options);
              `,
            }}
          /> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
