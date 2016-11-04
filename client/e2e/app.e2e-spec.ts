import { MEAN2Page } from './app.po';

describe('MEAN2 App', function() {
  let page: MEAN2Page;

  beforeEach(() => {
    page = new MEAN2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
