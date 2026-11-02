export const url = process.env.URL || 'http://localhost:8080';
export const domain = new URL(url).hostname;
export const siteName = 'Trash Not Slop';
export const siteDescription = 'making things badly the hard way';
export const siteType = 'Person'; // schema
export const locale = 'en_EN';
export const lang = 'en';
export const skipContent = 'Skip to content';
export const author = {
  name: 'Trash Not Slop', 
  avatar: '/icon-512x512.png', 
  me: [
  ]
};
// for the site developer, used for footer credits and humans.txt info
export const creator = {
  name: 'Trash Not Slop',
  email: 'hello@trashnotslop.com',
  website: 'https://www.trashnotslop.com',
  social: 'https://bsky.app/profile/trashnotslop.com'
};
export const pathToSvgLogo = 'src/assets/svg/misc/logo.svg'; // used for favicon generation
export const themeColor = '#FCBF49'; // used in manifest, for example primary color value
export const themeLight = '#F4EFD7'; // used for meta tag theme-color, if light colors are prefered. best use value set for light bg
export const themeDark = '#222'; // used for meta tag theme-color, if dark colors are prefered. best use value set for dark bg
export const opengraph_default = '/assets/images/template/opengraph-default.jpg'; // fallback/default meta image
export const opengraph_default_alt = ""; // alt text for default meta image
export const blog = {
  // RSS feed
  name: `${siteName} Blog`,
  description: '',
  // feed links are looped over in the head. You may add more to the array.
  feedLinks: [
    {
      title: 'Atom Feed',
      url: '/feed.xml',
      type: 'application/atom+xml'
    },
    {
      title: 'JSON Feed',
      url: '/feed.json',
      type: 'application/json'
    }
  ],
  // Tags
  tagSingle: 'Tag',
  tagPlural: 'Tags',
  tagMore: 'More tags:',
  // pagination
  paginationLabel: 'Blog',
  paginationPage: 'Page',
  paginationPrevious: 'Previous',
  paginationNext: 'Next',
  paginationNumbers: true
};
export const details = {
  aria: 'section controls',
  expand: 'expand all',
  collapse: 'collapse all'
};
export const dialog = {
  close: 'Close',
  next: 'Next',
  previous: 'Previous'
};
export const navigation = {
  navLabel: 'Menu',
  ariaTop: 'Main',
  ariaBottom: 'Complementary',
  ariaPlatforms: 'Platforms',
  drawerNav: false,
  subMenu: false
};
export const themeSwitch = {
  title: 'Theme',
  light: 'light',
  dark: 'dark'
};
export const robots = {
  // AI bot user agents live in `src/common/robots.njk` (sourced from
  // https://github.com/ai-robots-txt/ai.robots.txt).
  // Training / AI-search scrapers
  allowAiCrawlers: false,
  // On-demand assistants and browsing agents.
  allowAiAgents: false,
  // emit /llms.txt at build time.
  generateLlmsTxt: false
};
export const tests = {
  pa11y: {
    // keep customPaths empty if you want to test all pages
    customPaths: ['/', '/about/', '/blog/', '/styleguide/'],
    globalIgnore: []
  }
};
export const viewRepo = {
  // this is for the view/edit on github link. The value in the package.json will be pulled in.
  allow: true,
  infoText: 'View this page on GitHub'
};
export const easteregg = true;
