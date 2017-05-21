import { TeamAtomicPage } from './app.po';

describe('team-atomic App', () => {
  let page: TeamAtomicPage;

  beforeEach(() => {
    page = new TeamAtomicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
