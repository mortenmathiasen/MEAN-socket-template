import { MEANNG2Page } from './app.po';

describe('mean-ng2 App', () => {
  let page: MEANNG2Page;

  beforeEach(() => {
    page = new MEANNG2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
