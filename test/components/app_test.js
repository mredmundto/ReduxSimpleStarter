import {renderComponent, expect} from '../test_helper';
import App from '../../src/components/app'; 

// Use describe to group similiar tests
describe('App - could be any name', () => {

  let component; 
  beforeEach(()=> {
    component = renderComponent(App); 
  })
  it('show a comment box', () => {
    expect(component.find('.comment-box')).to.exist; 
  });

  // // create an instance of App
  // const component = renderComponent(App)
  // // Use 'it' to test a single attribute of a target
  // it('shows the correct text', () => {
  //   // Use 'expect' to make an 'assertion' about a target 
  //   expect(component).to.contain('React simple starter'); 

  // }); 
}); 
