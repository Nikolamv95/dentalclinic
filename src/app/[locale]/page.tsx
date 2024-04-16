import { useTranslations } from 'next-intl';
import React from 'react';

export default function Index() {
	const t = useTranslations('Index');
	return <h1>{t('title')}</h1>;
}
