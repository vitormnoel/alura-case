import GlobalStyle from '../src/theme/global_style'

function MyApp({ Component, pageProps }) {
    return (
        <>
        <GlobalStyle/>
        <Component {...pageProps}/>
        </>
    )
}

export default MyApp;