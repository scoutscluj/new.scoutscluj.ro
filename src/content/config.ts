import { defineCollection, z } from 'astro:content';

const navLinkSchema = z.object({
  label: z.string(),
  href: z.string()
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    metaDescription: z.string().optional(),
    utility: z.object({
      leftText: z.string(),
      email: z.string(),
      phone: z.string()
    }),
    brand: z.object({
      name: z.string(),
      subtitle: z.string(),
      shortLabel: z.string()
    }),
    navigation: z.object({
      links: z.array(navLinkSchema),
      ctaLabel: z.string(),
      ctaHref: z.string()
    }),
    hero: z.object({
      badgeLabel: z.string(),
      countdownDays: z.number().int().min(0),
      countdownLabel: z.string(),
      countdownTargetDate: z.string().optional(),
      backgroundImagePlaceholder: z.string().optional(),
      kicker: z.string(),
      headline: z.string(),
      subheadline: z.string(),
      primaryCtaLabel: z.string(),
      primaryCtaHref: z.string(),
      secondaryCtaLabel: z.string(),
      secondaryCtaHref: z.string(),
      floatingLinks: z.array(navLinkSchema),
      quickContactLabel: z.string(),
      quickContactHref: z.string(),
      backgroundImage: z.string()
    }),
    impact: z.object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
      metrics: z.array(
        z.object({
          value: z.string(),
          label: z.string(),
          note: z.string()
        })
      ),
      pillars: z.array(
        z.object({
          title: z.string(),
          description: z.string()
        })
      )
    }),
    projectsSection: z.object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
      featured: z.object({
        title: z.string(),
        summary: z.string(),
        image: z.string(),
        ctaLabel: z.string(),
        ctaHref: z.string()
      })
    }),
    timeline: z.object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
      items: z.array(
        z.object({
          title: z.string(),
          description: z.string()
        })
      )
    }),
    storiesSection: z.object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
      ctaLabel: z.string(),
      ctaHref: z.string()
    }),
    support: z.object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
      primaryCtaLabel: z.string(),
      primaryCtaHref: z.string(),
      secondaryCtaLabel: z.string(),
      secondaryCtaHref: z.string(),
      goalLabel: z.string(),
      goalPercent: z.number().min(0).max(100),
      goalProgressText: z.string(),
      newsletterLabel: z.string(),
      newsletterPlaceholder: z.string(),
      newsletterButtonLabel: z.string()
    }),
    contactSection: z.object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
      addressLabel: z.string(),
      address: z.string(),
      emailLabel: z.string(),
      email: z.string(),
      phoneLabel: z.string(),
      phone: z.string(),
      bankLabel: z.string(),
      bankAccountName: z.string(),
      iban: z.string(),
      bankName: z.string(),
      mapEmbedUrl: z.string(),
      mapCtaLabel: z.string(),
      mapCtaHref: z.string()
    }),
    footer: z.object({
      id: z.string(),
      heading: z.string(),
      lineOne: z.string(),
      lineTwo: z.string(),
      linksHeading: z.string(),
      links: z.array(navLinkSchema),
      contactHeading: z.string(),
      location: z.string(),
      copyright: z.string()
    })
  })
});

const stories = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    image: z.string(),
    href: z.string(),
    draft: z.boolean().default(false)
  })
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    period: z.string(),
    summary: z.string(),
    status: z.enum(['active', 'seasonal', 'archived']),
    order: z.number().int().nonnegative().default(99)
  })
});

export const collections = {
  pages,
  stories,
  projects
};
