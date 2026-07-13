"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Download, ExternalLink } from "lucide-react";

import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  type ComparativeCost,
  type ComparativeDoc,
  type DocLang,
} from "@/lib/comparative-data";

interface ComparativeStudyProps {
  /** Both language versions, so the selector can switch without a refetch. */
  docs: Record<DocLang, ComparativeDoc>;
  /** Which document to show first — defaults to the site locale. */
  initialLang: DocLang;
}

export default function ComparativeStudy({
  docs,
  initialLang,
}: ComparativeStudyProps) {
  // Document language is independent of the site locale: a visitor on /fr may
  // read the English comparison without navigating away.
  const [lang, setLang] = useState<DocLang>(initialLang);
  const t = useTranslations("Comparative");
  const doc = docs[lang];

  return (
    <Section className="bg-gradient-to-l from-[#2A6F6A] to-[#85E08A] py-16">
      <Container className="flex flex-col gap-8">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-semibold text-white">
            {doc.title}
          </h2>
          {doc.intro && (
            <p className="mt-3 text-lg text-white/90">{doc.intro}</p>
          )}
        </div>

        <div className="flex flex-col  gap-4 sm:flex-row sm:items-center sm:justify-between">
          <LangSelector
            lang={lang}
            onChange={setLang}
            label={t("docLanguage")}
          />

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="bg-white text-mbioPrimary hover:bg-white/90"
            >
              {/* Plain <a>, not the locale-aware Link: that would prefix /fr and 404. */}
              <a
                href={doc.pdf}
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4" />
                {t("downloadPdf")}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <a href={doc.htmlDoc} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                {t("viewFull")}
              </a>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {doc.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={cn(
                "rounded-xl border bg-white/95 p-6 text-center shadow-sm",
                // The savings card is the point of the whole section.
                i === 2 && "border-mbioPrimary ring-2 ring-mbioPrimary/40"
              )}
            >
              <p
                className={cn(
                  "text-3xl font-semibold lg:text-4xl",
                  i === 2 ? "text-mbioPrimary" : "text-gray-900"
                )}
              >
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-[8px_8px_0_0_rgba(0,0,0,0.4)] sm:p-8">
          {doc.conditions && (
            <p className="mb-8 rounded-r border-l-4 border-mbioPrimary bg-mbioPrimary/5 px-4 py-3 text-sm text-muted-foreground">
              {doc.conditions}
            </p>
          )}

          <CriteriaTable doc={doc} />

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <CostTable
              headers={doc.cost_headers}
              rows={doc.mbio7_costs}
              totalLabel={doc.mbio7_label}
              total={doc.mbio7_total}
              highlight
            />
            <CostTable
              headers={doc.cost_headers}
              rows={doc.traditional_costs}
              totalLabel={doc.traditional_label}
              total={doc.traditional_total}
            />
          </div>

          <div className="mt-8 rounded-lg bg-mbioPrimary px-6 py-6 text-center text-white">
            <p className="text-sm uppercase tracking-wide text-white/80">
              {doc.savings_label}
            </p>
            <p className="mt-1 text-4xl font-semibold lg:text-5xl">
              {doc.savings_value}
            </p>
            <p className="mt-2 text-sm text-white/90">{doc.savings_percent}</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function LangSelector({
  lang,
  onChange,
  label,
}: {
  lang: DocLang;
  onChange: (lang: DocLang) => void;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 self-center sm:self-auto">
      {/* <span className="text-sm text-white/90">{label}</span> */}
      <div
        role="group"
        aria-label={label}
        className="inline-flex gap-1 rounded-full bg-white/20 p-1"
      >
        {(["fr", "en"] as const).map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => onChange(value)}
            aria-pressed={lang === value}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
              lang === value
                ? "bg-white text-mbioPrimary"
                : "text-white hover:bg-white/10"
            )}
          >
            {value.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}

/**
 * The source documents are fixed-width A4, so the tables are rebuilt here.
 * Below `md` each one renders as a stacked card list instead of a wide table —
 * same data, no horizontal scrolling on a phone.
 */
function CriteriaTable({ doc }: { doc: ComparativeDoc }) {
  const { table_headers: h, criteria } = doc;

  return (
    <>
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="bg-gray-900 p-3 text-left font-semibold text-white">
                {h.criterion}
              </th>
              <th className="bg-mbioPrimary p-3 text-left font-semibold text-white">
                {h.mbio7}
              </th>
              <th className="bg-red-700 p-3 text-left font-semibold text-white">
                {h.traditional}
              </th>
              <th className="bg-amber-600 p-3 text-left font-semibold text-white">
                {h.observations}
              </th>
            </tr>
          </thead>
          <tbody>
            {criteria.map((row) => (
              <tr key={row.criterion} className="border-b odd:bg-gray-50">
                <td className="p-3 font-medium text-gray-900">
                  {row.criterion}
                </td>
                <td className="p-3 text-mbioPrimary">{row.mbio7}</td>
                <td className="p-3 text-red-700">{row.traditional}</td>
                <td className="p-3 text-muted-foreground">{row.observation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col gap-4 md:hidden">
        {criteria.map((row) => (
          <div key={row.criterion} className="rounded-lg border p-4">
            <p className="font-semibold text-gray-900">{row.criterion}</p>
            <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-xs uppercase text-muted-foreground">
                  {h.mbio7}
                </p>
                <p className="mt-1 font-medium text-mbioPrimary">{row.mbio7}</p>
              </div>
              <div>
                <p className="text-xs uppercase text-muted-foreground">
                  {h.traditional}
                </p>
                <p className="mt-1 font-medium text-red-700">
                  {row.traditional}
                </p>
              </div>
            </div>
            <p className="mt-3 text-sm italic text-muted-foreground">
              {row.observation}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

function CostTable({
  headers,
  rows,
  totalLabel,
  total,
  highlight = false,
}: {
  headers: ComparativeDoc["cost_headers"];
  rows: ComparativeCost[];
  totalLabel: string;
  total: string;
  highlight?: boolean;
}) {
  const accent = highlight ? "text-mbioPrimary" : "text-red-700";
  const totalBg = highlight ? "bg-mbioPrimary" : "bg-red-700";

  return (
    <div>
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="p-2 text-left font-semibold">{headers.product}</th>
              <th className="p-2 text-right font-semibold">
                {headers.unit_price}
              </th>
              <th className="p-2 text-right font-semibold">{headers.qty}</th>
              <th className="p-2 text-right font-semibold">{headers.total}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.product} className="border-b">
                <td className="p-2">
                  <span className="font-medium text-gray-900">
                    {row.product}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {row.detail} · {row.basis}
                  </span>
                </td>
                <td className="p-2 text-right tabular-nums">
                  {row.unit_price}
                </td>
                <td className="p-2 text-right tabular-nums">{row.qty}</td>
                <td className="p-2 text-right font-medium tabular-nums">
                  {row.total}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col gap-3 md:hidden">
        {rows.map((row) => (
          <div key={row.product} className="rounded-lg border p-3">
            <p className="font-medium text-gray-900">{row.product}</p>
            <p className="text-xs text-muted-foreground">
              {row.detail} · {row.basis}
            </p>
            <div className="mt-2 grid grid-cols-3 gap-2 text-sm">
              <div>
                <p className="text-xs text-muted-foreground">
                  {headers.unit_price}
                </p>
                <p className="tabular-nums">{row.unit_price}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{headers.qty}</p>
                <p className="tabular-nums">{row.qty}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground">{headers.total}</p>
                <p className={cn("font-semibold tabular-nums", accent)}>
                  {row.total}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className={cn(
          "mt-4 flex items-center justify-between gap-4 rounded-lg px-4 py-3 text-white",
          totalBg
        )}
      >
        <span className="text-sm font-semibold uppercase">{totalLabel}</span>
        <span className="text-lg font-semibold tabular-nums">{total}</span>
      </div>
    </div>
  );
}
