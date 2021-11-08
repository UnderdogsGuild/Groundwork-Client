describe('groundwork-components: GroundworkComponents component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=groundworkcomponents--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to GroundworkComponents!');
    });
});
