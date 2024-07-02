
import { defineConfig } from 'astro/config';

let BASE_URL = LOCALHOST_URL;
// When you're building your site in local or in CI, you could just set your URL manually
if (isBuild) {
BASE_URL = LIVE_URL;
}
export default defineConfig({
  site: 'https://View-my-Git-Lab-krafi.gitlab.io',
  base: '/astro-fast-fontend-1.github.io',
  outDir: 'public',
  publicDir: 'static',
});


