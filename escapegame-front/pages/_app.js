import '@/styles/globals.css'
import Layout from "@/components/Layout";
import {ThemeProvider} from "next-themes"
import {Roboto} from 'next/font/google'

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})

export default function App({Component, pageProps}) {
    return (
        <ThemeProvider className={roboto.className} enableSystem={true} attribute="class">
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    )
}
