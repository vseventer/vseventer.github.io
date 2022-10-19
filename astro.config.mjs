// Package modules.
import { defineConfig } from 'astro/config';
import image from "@astrojs/image";
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://vseventer.com',
  integrations: [image({serviceEntryPoint: '@astrojs/image/sharp'}), mdx(), react()]
});
