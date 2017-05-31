import GlobalTemplate from '~/templates/global/Template';
import HomepageHeader from '~/templates/homepage/Header';
import USPs from '~/templates/homepage/USPs';

export default () => {
  return (
    <GlobalTemplate>
      <HomepageHeader />
      <USPs />
    </GlobalTemplate>
  );
};
