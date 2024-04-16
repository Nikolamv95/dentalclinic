/* eslint-disable react/jsx-indent */
import { ThemeProvider } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import { theme } from '../store/theme/theme';

export interface LayoutProps extends PropsWithChildren {
    params: {
        locale: string
    }
}

export default function LocaleLayout({ children, params: { locale } }: LayoutProps) {
    console.log(children)
    return (
        <html lang={locale}>
            <ThemeProvider theme={theme}>
                <body>{children}</body>
            </ThemeProvider>
        </html>
    );
}
