import fs from 'node:fs';
import path from 'node:path';
import { parse as yamlParse } from 'yaml';
import type { SiteData, PricingData, SectionData, SectionFilter } from '../types';
import { SITE_DEFAULTS, PRECIOS_DEFAULTS } from '../data/defaults';

function safeReadYaml<T>(filePath: string): T | null {
  try {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      return (yamlParse(content) as T) || null;
    }
  } catch (e) {
    console.error('Error reading', filePath, (e as Error).message);
  }
  return null;
}

const contentDir = path.join(process.cwd(), 'src', 'content');

export function getSiteData(): SiteData {
  return safeReadYaml<SiteData>(path.join(contentDir, 'site', 'index.yaml')) ?? SITE_DEFAULTS;
}

export function getPricingData(): PricingData {
  return safeReadYaml<PricingData>(path.join(contentDir, 'pricing', 'index.yaml')) ?? PRECIOS_DEFAULTS;
}

const SECTION_KEYS = ['helados', 'milkshakes', 'tortas', 'otros'] as const;

export function getSections(): SectionData[] {
  const sections: SectionData[] = [];

  for (const key of SECTION_KEYS) {
    const data = safeReadYaml<any>(path.join(contentDir, 'sections', key, 'index.yaml'));
    if (data && data.visible !== false) {
      const products = (data.products || []).slice().sort((a, b) => {
        if (a.imageUrl && !b.imageUrl) return -1;
        if (!a.imageUrl && b.imageUrl) return 1;
        return 0;
      });
      const filters: SectionFilter[] = deriveFilters(products);
      sections.push({ ...data, products, slug: key, filters });
    }
  }

  sections.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  return sections;
}

function deriveFilters(products: { category: string }[]): SectionFilter[] {
  const seen = new Set<string>();
  const filters: SectionFilter[] = [];
  for (const p of products) {
    if (p.category && !seen.has(p.category)) {
      seen.add(p.category);
      filters.push({
        label: p.category.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
        value: p.category,
      });
    }
  }
  return filters;
}

export function formatPrice(p: string): string {
  if (p === '--') return '--';
  return `$${Number(p).toLocaleString('es-AR')}`;
}
