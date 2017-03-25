import { MajormemoryPage } from './app.po';

describe('majormemory App', function() {
  let page: MajormemoryPage;

  beforeEach(() => {
    page = new MajormemoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
