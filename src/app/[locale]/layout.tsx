/* eslint-disable react/jsx-indent */
import React, { PropsWithChildren } from 'react';

export interface LayoutProps extends PropsWithChildren {
    params: {
        locale: string
    }
}

export default function LocaleLayout({ children, params: { locale } }: LayoutProps) {
    return (
        <html lang={locale}>
            <body>{children}</body>
        </html>
    );
}
