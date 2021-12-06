import { ScullyConfig } from '@scullyio/scully';

/** this loads the default render plugin, remove when switching to something else. */
import '@scullyio/scully-plugin-puppeteer';

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "portfolio2",
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
  }
};