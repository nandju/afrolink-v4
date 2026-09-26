import dynamic from 'next/dynamic';

export { default as Header } from './UI/Header';
export { default as GetStartedButton } from './Common/GetStartedButton';
export const HeroSection = dynamic(() => import('./UI/HeroSection'), { ssr: false });
export const Featured = dynamic(() => import('./UI/Featured'), { ssr: false });
export const OffersSection = dynamic(() => import('./UI/OffersSection'), { ssr: false });
export const FinancilaFreedom = dynamic(() => import('./UI/FinancialFreedom'), { ssr: false });
export const FAQ = dynamic(() => import('./UI/FAQ'), { ssr: false });
export { default as Footer } from './UI/Footer';
export { default as Preloader } from './UI/Preloader';
export { default as MaskText } from './Common/MaskText';
export { default as BeforeHeroSection } from './UI/BeforeHeroSection';
export { default as CircularTransition } from './Common/CircularTransition';
