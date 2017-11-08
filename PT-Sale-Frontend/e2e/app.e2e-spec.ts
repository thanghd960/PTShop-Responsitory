import { PTSaleFrontendPage } from './app.po';

describe('pt-sale-frontend App', function() {
  let page: PTSaleFrontendPage;

  beforeEach(() => {
    page = new PTSaleFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
