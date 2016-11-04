import { Untitled6Page } from './app.po';

describe('untitled6 App', function() {
  let page: Untitled6Page;

  beforeEach(() => {
    page = new Untitled6Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
