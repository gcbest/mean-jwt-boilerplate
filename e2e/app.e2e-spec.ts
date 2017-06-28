import { MorningMessagePage } from './app.po';

describe('morning-message App', () => {
  let page: MorningMessagePage;

  beforeEach(() => {
    page = new MorningMessagePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
