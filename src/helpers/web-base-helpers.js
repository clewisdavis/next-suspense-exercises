import React from 'react';

// Wrap the 'getNavLinks' in a 'React.cache', so it does the work once and shares it 
// with both the 'SiteHeader', and the 'SiteFooter'
export const getNavLinks = React.cache(
  async function getNavLinks() {
    console.info(
      'Requesting navigation links from CMS'
    );
    // put in some randomness
    await delay(1800 + Math.random() * 2000);

    return LINKS;
  }
);

const delay = (ms) =>
  new Promise((resolve) =>
    setTimeout(resolve, ms)
  );

const LINKS = [
  {
    slug: 'platform',
    label: 'Platform',
    href: '/platform',
    type: 'primary',
  },
  {
    slug: 'solutions',
    label: 'Solutions',
    href: '/solutions',
  },
  {
    slug: 'integrations',
    label: 'Integrations',
    href: '/integrations',
  },
  {
    slug: 'docs',
    label: 'Docs',
    href: '/documentation/start-here',
  },
  {
    slug: 'pricing',
    label: 'Pricing',
    href: '/pricing',
  },
];
