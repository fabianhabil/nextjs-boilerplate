import '@/styles/globals.css';
import { TailwindIndicator } from '@/components/atoms/TailwindIndicator/TailwindIndicator';
import { siteConfig } from '@/components/constants/site';
import { ThemeProvider } from '@/components/theme-provider';
import { fontSFPro } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`
    },
    description: siteConfig.description,
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png'
    }
};

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'white' },
        { media: '(prefers-color-scheme: dark)', color: 'black' }
    ],
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <>
            <html lang='en' suppressHydrationWarning={true}>
                <body
                    className={cn(
                        'min-h-screen font-sfpro antialiased',
                        fontSFPro.variable
                    )}
                    suppressHydrationWarning={true}
                >
                    <ThemeProvider
                        attribute='class'
                        defaultTheme='dark'
                        enableSystem
                    >
                        <div className='container relative flex min-h-screen flex-col justify-center'>
                            <div>{children}</div>
                        </div>
                        <TailwindIndicator />
                    </ThemeProvider>
                </body>
            </html>
        </>
    );
}
