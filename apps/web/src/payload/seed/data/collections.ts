type SeedEditorialCollection = {
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  status: "published";
  visibility: "public";
  sort_order: number;
  seo: {
    seo_title: string;
    seo_description: string;
  };
};

export const editorialCollections: SeedEditorialCollection[] = [
  {
    title: "Reading the Old Texts",
    slug: "reading-the-old-texts",
    subtitle: "Short pathways into older writing",
    description: "A Level 1 prototype collection for testing relationships between essays, topics, and classical reading themes.",
    status: "published",
    visibility: "public",
    sort_order: 10,
    seo: {
      seo_title: "Reading the Old Texts | Ink & East",
      seo_description: "Prototype collection for old texts and careful rereading."
    }
  },
  {
    title: "Quiet Modern Questions",
    slug: "quiet-modern-questions",
    subtitle: "Modern problems read at a slower pace",
    description: "A Level 1 prototype collection for reflective sample pieces about contemporary life.",
    status: "published",
    visibility: "public",
    sort_order: 20,
    seo: {
      seo_title: "Quiet Modern Questions | Ink & East",
      seo_description: "Prototype collection for modern questions and quiet attention."
    }
  }
];
