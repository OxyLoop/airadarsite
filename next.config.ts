import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts'); // i18n.ts yolunu veriyoruz

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);
