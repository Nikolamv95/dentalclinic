import { Button, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import React from 'react';

export default function Index() {
	const t = useTranslations('Index');
	return <Button variant="outlined">{t('title')}</Button>;
}
