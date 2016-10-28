import {renderComponent, expect} from '../test_helper';
import CommentList from '../../src/components/comment_list'; 

describe('CommentList', ()=> {
  let component; 
  beforeEach(()=> {
    const props = { comments: ['New comment', 'other new comment'] }; 
    component = renderComponent(CommentList, null, props); 
  }); 

  it('shows an LI for each element', ()=> {
    expect(component.find('li').length).to.equal(2)
  });

  it('shows each comment', ()=> {
    expect(component).to.contain('New comment'); 
    expect(component).to.contain('other new comment'); 
  });

});