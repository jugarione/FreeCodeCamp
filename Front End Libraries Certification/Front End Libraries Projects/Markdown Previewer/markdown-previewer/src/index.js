import React from 'react'
import ReactDom from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

class MarkdownPreviewer extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      markdownText: ''
    }
    this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
      this.setState({
        markdownText: e.target.value
      });
    }




  render(){
    return(
      <div className='container-fluid h-100'>
        <div className='row'>
          <p className='h1 w-100 text-center'>Markdown Previewer</p>
        </div>
      <div className='row h-100'>
        <div className='col-sm-6 h-100'>
          <textarea id='editor h-100' className='form-control' onChange={this.handleChange}>

          </textarea>
        </div>
        <div className='col-sm-6 h-100'>
          <div id='preview' className='form-control'>
             {this.state.markdownText}
          </div>
        </div>
      </div>
      </div>
    );
  }
}

ReactDom.render(<MarkdownPreviewer />, document.getElementById('root'))