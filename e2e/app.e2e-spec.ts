import { ScssProjectPage } from './app.po';

describe('scss-project App', () => {
  let page: ScssProjectPage;

  beforeEach(() => {
    page = new ScssProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
