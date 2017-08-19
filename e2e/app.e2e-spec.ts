import { RoutingOrderPage } from './app.po';

describe('routing-order App', () => {
  let page: RoutingOrderPage;

  beforeEach(() => {
    page = new RoutingOrderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
