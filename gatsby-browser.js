/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
exports.shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  const { pathname } = location;
  const scrollToTopRoutes = [`/privacy-policy`, `/page-2`];

  if (scrollToTopRoutes.indexOf(pathname) !== -1) {
    window.scrollTo(0, 0);
  }

  return false;
};
