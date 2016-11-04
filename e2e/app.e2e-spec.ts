import { Untitled42Page } from './app.po';

describe('MEAN2 App', function() {
  let page: Untitled42Page;

  beforeEach(() => {
    page = new Untitled42Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
