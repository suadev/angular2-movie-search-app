import { TestPpPage } from './app.po';

describe('test-pp App', () => {
  let page: TestPpPage;

  beforeEach(() => {
    page = new TestPpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
