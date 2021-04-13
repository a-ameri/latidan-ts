import React from 'react';
import ReactDOM, {render} from 'react-dom';

interface propsFOrThis{
  text : String
}

class ReactComment extends React.Component<propsFOrThis> {
  

    static defaultProps = {
      trim: true
    }
  
    componentDidMount() {
      let el : any = ReactDOM.findDOMNode(this)
      ReactDOM.unmountComponentAtNode(el)
      el.outerHTML = this.createComment()
    }
  
    createComment() {
      let text = this.props.text
      text = text.trim();
  
      return `<!-- ${text} -->`
    }

    render(){
      return <div />
    }
  
  }
  export default ReactComment;




