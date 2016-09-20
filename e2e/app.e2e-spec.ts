import { Aclib151Page } from './app.po';

describe('aclib151 App', function() {
  let page: Aclib151Page;

  beforeEach(() => {
    page = new Aclib151Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
