import type { CollectionEntry } from 'astro:content';

export type HomePageData = CollectionEntry<'pages'>['data'];
export type StoryEntry = CollectionEntry<'stories'>;
export type ProjectEntry = CollectionEntry<'projects'>;
