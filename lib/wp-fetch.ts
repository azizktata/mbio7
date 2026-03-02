import { fabricationMock } from "@/mocks/fabrication";
import { utilisationsMock } from "@/mocks/utilisations";
import { experienceMock } from "@/mocks/experience";

const BASE_URL = process.env.WORDPRESS_URL;

export interface HeroSection {
  title: string;
  subtitle: string;
  images: Record<string, number | string>;
  cta: string;
}

export interface AboutSection {
  title: string;
  description: string;
  tags: Record<string, string>;
  logo: string | false;
}

export interface ProcessSlide {
  title: string;
  description: string;
  image: string | false;
}

export type ProcessSection = Record<string, ProcessSlide>;

export interface VideoSection {
  title: string;
  description: string;
  points: Record<string, string>;
  video_url: string | false;
  thumbnail: string | false;
  label: string | false;
}

export interface ImpactSection {
  title: string;
  description: string;
  stats: Record<string, { title: string; value: string }>;
  background: string | false;
}

export interface WhyUsPoint {
  title: string;
  description: string;
}

export interface WhyUsSection {
  title: string;
  points: Record<string, WhyUsPoint>;
}

export interface ComparativeSection {
  title: string;
  image: string | false;
}

export interface BlogItem {
  date: string;
  title: string;
  description: string;
  image: string | false;
  link: string;
  category: string;
}

export interface BlogsSection {
  title: string;
  cta: string;
  blogs: Record<string, BlogItem>;
}

export interface ActualiteItem {
  date: string;
  title: string;
  image: string | false;
}

export interface ActualitesSection {
  title: string;
  items: Record<string, ActualiteItem>;
}

export interface ReviewItem {
  name: string;
  rating: number;
  comment: string;
}

export interface ReviewsSection {
  title: string;
  reviews: Record<string, ReviewItem>;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSection {
  title: string;
  questions: Record<string, FAQItem>;
}

export interface ContactSection {
  subtitle: string;
  title: string;
  email: string;
  phone: string;
  address: string;
}

export interface LandingPageACF {
  herosection_fr: HeroSection;
  herosection_en: HeroSection;
  aboutsection_fr: AboutSection;
  aboutsection_en: AboutSection;
  processsection_fr: ProcessSection;
  processsection_en: ProcessSection;
  videosection_fr: VideoSection;
  videosection_en: VideoSection;
  impactsection_fr: ImpactSection;
  impactsection_en: ImpactSection;
  whyussection_fr: WhyUsSection;
  whyussection_en: WhyUsSection;
  comparativesection_fr: ComparativeSection;
  comparativesection_en: ComparativeSection;
  blogssection_fr: BlogsSection;
  blogssection_en: BlogsSection;
  actualitessection_fr: ActualitesSection;
  actualitessection_en: ActualitesSection;
  reviewssection_fr: ReviewsSection;
  reviewssection_en: ReviewsSection;
  faqsection_fr: FAQSection;
  faqsection_en: FAQSection;
  contactsection_fr: ContactSection;
  contactsection_en: ContactSection;
  [key: string]: unknown;
}

export interface LandingPageResponse {
  id: number;
  slug: string;
  title: { rendered: string };
  acf: LandingPageACF;
}

export const fetchLandingPage = async (): Promise<LandingPageResponse> => {
  const res = await fetch(`${BASE_URL}/mbio7?slug=landingpage&_fields=acf&acf_format=standard`, {
    // next: { revalidate: 3600 },
  });
  const data = await res.json();
  if (!data || data.length === 0) {
    throw new Error("Landing page not found");
  }
  // API returns an array, take first item
  return data[0];
};

// Helper to get a section by locale key
function getSection<T>(acf: LandingPageACF, prefix: string, locale: string): T {
  const key = `${prefix}_${locale}` as keyof LandingPageACF;
  return acf[key] as T;
}

export const getHeroSection = async (
  locale: string
): Promise<{
  title: string;
  subtitle: string;
  imageUrls: string[];
  cta: string;
}> => {
  const landing = await fetchLandingPage();
  const hero = getSection<HeroSection>(landing.acf, "herosection", locale);

  // hero.image already contains the media urls, so we can filter out valid URLs directly
  // also the hero images are same on both languages, so we can just take the first one and use it for both languages
  const imageUrls = Object.values(hero.images).filter(
    (url): url is string => typeof url === "string" && url.trim() !== ""
  );

  return {
    title: hero.title,
    subtitle: hero.subtitle,
    imageUrls: imageUrls.filter(Boolean),
    cta: hero.cta,
  };
};

export const getAboutSection = async (
  locale: string
): Promise<{
  title: string;
  description: string;
  tags: string[];
  logo: string | false;
}> => {
  const landing = await fetchLandingPage();
  const about = getSection<AboutSection>(landing.acf, "aboutsection", locale);

  const tags = Object.values(about.tags).filter(
    (tag): tag is string => typeof tag === "string" && tag.trim() !== ""
  );

  return {
    title: about.title,
    description: about.description,
    tags,
    logo: about.logo,
  };
};

export const getProcessSection = async (
  locale: string
): Promise<
  { title: string; description: string; image: string | false }[]
> => {
  const landing = await fetchLandingPage();
  const process = getSection<ProcessSection>(landing.acf, "processsection", locale);

  return Object.values(process);
};

export const getVideoSection = async (
  locale: string
): Promise<{
  title: string;
  description: string;
  points: string[];
  video_url: string | false;
  thumbnail: string | false;
  label: string | false;
}> => {
  const landing = await fetchLandingPage();
  const video = getSection<VideoSection>(landing.acf, "videosection", locale);

  const points = Object.values(video.points).filter(
    (p): p is string => typeof p === "string" && p.trim() !== ""
  );

  return {
    title: video.title,
    description: video.description,
    points,
    video_url: video.video_url,
    thumbnail: video.thumbnail,
    label: video.label,
  };
};

export const getImpactSection = async (
  locale: string
): Promise<{
  title: string;
  description: string;
  stats: { title: string; value: string }[];
  background: string | false;
}> => {
  const landing = await fetchLandingPage();
  const impact = getSection<ImpactSection>(landing.acf, "impactsection", locale);

  return {
    title: impact.title,
    description: impact.description,
    stats: Object.values(impact.stats),
    background: impact.background,
  };
};

export const getWhyUsSection = async (
  locale: string
): Promise<{
  title: string;
  points: { title: string; description: string }[];
}> => {
  const landing = await fetchLandingPage();
  const whyus = getSection<WhyUsSection>(landing.acf, "whyussection", locale);

  return {
    title: whyus.title,
    points: Object.values(whyus.points),
  };
};

export const getComparativeSection = async (
  locale: string
): Promise<{
  title: string;
  image: string | false;
}> => {
  const landing = await fetchLandingPage();
  return getSection<ComparativeSection>(landing.acf, "comparativesection", locale);
};

export const getBlogsSection = async (
  locale: string
): Promise<{
  title: string;
  cta: string;
  blogs: BlogItem[];
}> => {
  const landing = await fetchLandingPage();
  const section = getSection<BlogsSection>(landing.acf, "blogssection", locale);

  return {
    title: section.title,
    cta: section.cta,
    blogs: Object.values(section.blogs),
  };
};

export const getActualitesSection = async (
  locale: string
): Promise<{
  title: string;
  items: ActualiteItem[];
}> => {
  const landing = await fetchLandingPage();
  const section = getSection<ActualitesSection>(landing.acf, "actualitessection", locale);

  return {
    title: section.title,
    items: Object.values(section.items),
  };
};

export const getReviewsSection = async (
  locale: string
): Promise<{
  title: string;
  reviews: ReviewItem[];
}> => {
  const landing = await fetchLandingPage();
  const section = getSection<ReviewsSection>(landing.acf, "reviewssection", locale);

  return {
    title: section.title,
    reviews: Object.values(section.reviews),
  };
};

export const getFAQSection = async (
  locale: string
): Promise<{
  title: string;
  questions: FAQItem[];
}> => {
  const landing = await fetchLandingPage();
  const section = getSection<FAQSection>(landing.acf, "faqsection", locale);

  return {
    title: section.title,
    questions: Object.values(section.questions),
  };
};

export const getContactSection = async (
  locale: string
): Promise<ContactSection> => {
  const landing = await fetchLandingPage();
  return getSection<ContactSection>(landing.acf, "contactsection", locale);
};

// ============================================================
// Sub-page interfaces
// ============================================================

export interface FabricationItem {
  title: string;
  description: string;
  specials: Record<string, string>;
}

export interface FabricationPageACF {
  fabricationsection_fr: Record<string, FabricationItem>;
  fabricationsection_en: Record<string, FabricationItem>;
  [key: string]: unknown;
}

export interface ExperienceHeroACF {
  title: string;
  description: string;
}

export interface ExperienceItem {
  title: string;
  description: string;
  specials: Record<string, string>;
  cta?: string;
}

export interface ExperiencePageACF {
  experiencehero_fr: ExperienceHeroACF;
  experiencehero_en: ExperienceHeroACF;
  experiencesection_fr: Record<string, ExperienceItem>;
  experiencesection_en: Record<string, ExperienceItem>;
  [key: string]: unknown;
}

export interface UtilisationHeroACF {
  title: string;
  description: string;
  details: Record<string, string>;
}

export interface UtilisationMainACF {
  title: string;
  description: string;
  dimensions: Record<string, string>;
}

export interface UtilisationsPageACF {
  utilisationhero_fr: UtilisationHeroACF;
  utilisationhero_en: UtilisationHeroACF;
  utilisationmain_fr: UtilisationMainACF;
  utilisationmain_en: UtilisationMainACF;
  [key: string]: unknown;
}

export interface SubPageResponse<T> {
  id: number;
  slug: string;
  title: { rendered: string };
  acf: T;
}

// ============================================================
// Sub-page fetch functions (with mock fallback)
// ============================================================

export const fetchFabricationPage =
  async (): Promise<SubPageResponse<FabricationPageACF>> => {
    try {
      const res = await fetch(
        `${BASE_URL}/mbio7?slug=fabrication&_fields=acf,slug,title&acf_format=standard`,
        { next: { revalidate: 3600 } }
      );
        // const res = await fetch(`${BASE_URL}/mbio7?_fields=acf&acf_format=standard`, {

      if (!res.ok) throw new Error("Fetch failed");
      const data = await res.json();
      if (!data || data.length === 0) throw new Error("Not found");
      return data[0];
    } catch {
      return fabricationMock;
    }
  };

export const fetchUtilisationsPage =
  async (): Promise<SubPageResponse<UtilisationsPageACF>> => {
    try {
      const res = await fetch(
        `${BASE_URL}/mbio7?slug=utilisations&_fields=acf,slug,title&acf_format=standard`,
        { next: { revalidate: 3600 } }
      );
      if (!res.ok) throw new Error("Fetch failed");
      const data = await res.json();
      if (!data || data.length === 0) throw new Error("Not found");
      return data[0];
    } catch {
      return utilisationsMock;
    }
  };

export const fetchExperiencePage =
  async (): Promise<SubPageResponse<ExperiencePageACF>> => {
    try {
      const res = await fetch(
        `${BASE_URL}/mbio7?slug=experience&_fields=acf,slug,title&acf_format=standard`,
        { next: { revalidate: 3600 } }
      );
      if (!res.ok) throw new Error("Fetch failed");
      const data = await res.json();
      if (!data || data.length === 0) throw new Error("Not found");
      return data[0];
    } catch {
      return experienceMock;
    }
  };

// ============================================================
// Sub-page section getters
// ============================================================

export const getFabricationSection = async (
  locale: string
): Promise<{ title: string; description: string; specials: { point: string }[] }[]> => {
  const page = await fetchFabricationPage();
  const key = `fabricationsection_${locale}` as keyof FabricationPageACF;
  const section = page.acf[key] as Record<string, FabricationItem>;
  return Object.values(section).map((item) => ({
    title: item.title,
    description: item.description,
    specials: Object.values(item.specials).map((point) => ({ point })),
  }));
};

export const getUtilisationHeroSection = async (
  locale: string
): Promise<{ title: string; description: string; details: string[] }> => {
  const page = await fetchUtilisationsPage();
  const key = `utilisationhero_${locale}` as keyof UtilisationsPageACF;
  const section = page.acf[key] as UtilisationHeroACF;
  return {
    title: section.title,
    description: section.description,
    details: Object.values(section.details),
  };
};

export const getUtilisationMainSection = async (
  locale: string
): Promise<{ title: string; description: string; dimensions: string[] }> => {
  const page = await fetchUtilisationsPage();
  const key = `utilisationmain_${locale}` as keyof UtilisationsPageACF;
  const section = page.acf[key] as UtilisationMainACF;
  return {
    title: section.title,
    description: section.description,
    dimensions: Object.values(section.dimensions),
  };
};

export const getExperienceHeroSection = async (
  locale: string
): Promise<{ title: string; description: string }> => {
  const page = await fetchExperiencePage();
  const key = `experiencehero_${locale}` as keyof ExperiencePageACF;
  return page.acf[key] as ExperienceHeroACF;
};

export const getExperienceSection = async (
  locale: string
): Promise<
  { title: string; description: string; specials: { point: string }[]; cta?: string }[]
> => {
  const page = await fetchExperiencePage();
  const key = `experiencesection_${locale}` as keyof ExperiencePageACF;
  const section = page.acf[key] as Record<string, ExperienceItem>;
  return Object.values(section).map((item) => ({
    title: item.title,
    description: item.description,
    specials: Object.values(item.specials).map((point) => ({ point })),
    cta: item.cta,
  }));
};
