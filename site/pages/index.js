import GlobalTemplate from '~/templates/global/Template';
import Header from '~/templates/global/Header';
import HomepageHeader from '~/templates/homepage/Header';
import USPs from '~/templates/homepage/USPs';

export default () => {
  return (
    <GlobalTemplate>
      <Header />
      <HomepageHeader />
      <USPs />
    </GlobalTemplate>
  );
};
