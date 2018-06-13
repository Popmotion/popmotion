import { withTheme } from 'styled-components';
import Link from 'next/link';

const makeSiteUrl = (root, href) =>
  root === '/' || root === '/pure' || href.substring(0, 4) === 'http'
    ? href
    : `${root}${href}`;

const SiteLink = ({ href, children, theme, name, ...props }) => (
  <Link href={makeSiteUrl(theme.data.rootUrl, href)} {...props}>
    <a name={name}>{children}</a>
  </Link>
);

export default withTheme(SiteLink);
