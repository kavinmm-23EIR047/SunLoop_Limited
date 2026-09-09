import { notFound } from 'next/navigation';
import { ProductDatasheetView } from '../../../components/ProductDatasheet';
import { allDatasheets, getDatasheetById } from '../../../data/allProducts';

export function generateStaticParams() {
  return allDatasheets.map((d) => ({ id: d.id }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const entry = getDatasheetById(params.id);
  if (!entry) return { title: 'Datasheet Not Found' };
  return {
    title: `${entry.modelNumber} — ${entry.title} Datasheet`,
    description: entry.datasheet.overview,
  };
}

export default function DatasheetDetailPage({ params }: { params: { id: string } }) {
  const entry = getDatasheetById(params.id);
  if (!entry) notFound();
  return <ProductDatasheetView entry={entry} />;
}
