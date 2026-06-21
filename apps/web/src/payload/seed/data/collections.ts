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
    description:
      "A stable Level 1 collection for essays that return to older language, classical terms, and slow reading without turning the archive into decoration.",
    status: "published",
    visibility: "public",
    sort_order: 10,
    seo: {
      seo_title: "Reading the Old Texts | Ink & East",
      seo_description: "Ink & East seed collection for old texts, classical terms, and careful rereading."
    }
  },
  {
    title: "Quiet Modern Questions",
    slug: "quiet-modern-questions",
    subtitle: "Modern problems read at a slower pace",
    description:
      "A stable Level 1 collection for contemporary questions approached through restraint, rooms, objects, and attention rather than urgency.",
    status: "published",
    visibility: "public",
    sort_order: 20,
    seo: {
      seo_title: "Quiet Modern Questions | Ink & East",
      seo_description: "Ink & East seed collection for modern questions, quiet attention, and reflective essays."
    }
  }
];
