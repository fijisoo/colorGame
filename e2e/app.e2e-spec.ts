import { ColorGamePage } from './app.po';

describe('color-game App', () => {
  let page: ColorGamePage;

  beforeEach(() => {
    page = new ColorGamePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
