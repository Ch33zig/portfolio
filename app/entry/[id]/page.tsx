import { notFound } from "next/navigation";
import { SECTIONS, findItem, getItemNumber, allItems } from "../../data";
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
  const idx = allItems.findIndex((it) => it.id === id);
  const prevId = idx > 0 ? allItems[idx - 1].id : undefined;
  const nextId = idx < allItems.length - 1 ? allItems[idx + 1].id : undefined;

  return <EntryPage item={item} n={n} sectionTitle={section?.title ?? ""} prevId={prevId} nextId={nextId} />;
}
