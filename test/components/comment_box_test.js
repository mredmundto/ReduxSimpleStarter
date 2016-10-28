import {renderComponent, expect } from '../test_helper'; 
import CommentBox from '../../src/components/comment_box'; 

describe('CommentBox Test', ()=> {
  let component; 
  
  beforeEach(()=>{
     component = renderComponent(CommentBox);
  });

  it('has a correct class', ()=> {
    expect(component).to.have.class('comment-box')
  })

  it('has a text area ', ()=> {
    //const component = renderComponent(CommentBox);
    expect(component.find('textarea')).to.exist; 
  });

  it('has a button', ()=> {
    //const component = renderComponent(CommentBox); 
    expect(component.find('button')).to.exist; 
  });

  describe('entering some text', ()=> {

    beforeEach(()=> {
      component.find('textarea').simulate('change', 'new comment');
    });

    it('shows that text is in textarea', ()=> {
      expect(component.find('textarea')).to.have.value('new comment')
    });

    it('when submited, clears the input', ()=> {
      component.simulate('submit'); 
      expect(component.find('textarea')).to.have.value(''); 
    });

  });

});






