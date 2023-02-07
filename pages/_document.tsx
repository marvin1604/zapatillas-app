import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render(){
        return (
            <Html>
            <Head>
                {/*stylesheet */}
            </Head>
            <body className='my-body'>
                <Main />
                <NextScript />
            </body>
            </Html>
        )
    }
}

export default MyDocument