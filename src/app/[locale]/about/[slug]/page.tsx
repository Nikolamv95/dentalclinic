import { useTranslations } from 'next-intl';

export default function Page({ params }: { params: any }) {
    const t = useTranslations(params.slug);
    return <h1>{t('title')}</h1>;
}