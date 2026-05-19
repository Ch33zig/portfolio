import { notFound } from "next/navigation";
import { SECTIONS, findItem, getItemNumber } from "../../data";
import EntryPage from "./EntryPage";

export function generateStaticParams() {
  return SECTIONS.flatMap((s) => s.items.map((it) => ({ id: it.id })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = findItem(id);
  if (!item) return {};
  return {
    title: `${item.title} | Alex Wu`,
    description: item.preview,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = findItem(id);
  if (!item) notFound();

  const n = getItemNumber(id);
  const section = SECTIONS.find((s) => s.items.some((it) => it.id === id));

  return <EntryPage item={item} n={n} sectionTitle={section?.title ?? ""} />;
}
