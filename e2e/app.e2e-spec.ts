import { GestionStockPage } from './app.po';

describe('gestion-stock App', function() {
  let page: GestionStockPage;

  beforeEach(() => {
    page = new GestionStockPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
