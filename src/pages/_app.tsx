import '../../styles/globals.scss'
import type { AppProps } from 'next/app'
// import { useThemeStore } from '../../store/theme'
import { Layout } from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    // const currentTheme = useThemeStore((state) => state.theme)

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
