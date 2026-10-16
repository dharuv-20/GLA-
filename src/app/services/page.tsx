import type { Metadata } from 'next';
import ServicesClientView from '@/components/services/ServicesClientView';

export const metadata: Metadata = {
  title: "Study Abroad & Ausbildung in Germany Services | TGLA",
  description: "Explore study abroad visa assistance, Ausbildung Germany pathways, and embassy interview guidance provided by The Global Language Academy in Delhi NCR.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Study Abroad & Ausbildung in Germany Services | TGLA",
    description: "Explore study abroad visa assistance, Ausbildung Germany pathways, and embassy interview guidance provided by The Global Language Academy in Delhi NCR.",
    url: "https://tglalearning.com/services",
    type: "website",
  },
};

export default function ServicesPage() {
  return <ServicesClientView />;
}
