import React from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import marked from "marked";

const firstMarkdown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markdownText: firstMarkdown,
    };
    this.handleChange = this.handleChange.bind(this);
    this.makeMarkUp = this.makeMarkUp.bind(this);
  }

  handleChange(e) {
    this.setState({
      markdownText: e.target.value,
    });
  }

  makeMarkUp() {
    marked.setOptions({
      breaks: true,
    });
    let markup = marked(this.state.markdownText);

    return { __html: markup };
  }

  render() {
    return (
      <div className="container-fluid h-100">
        <div className="row">
          <p className="h1 w-100 text-center">Markdown Previewer</p>
        </div>
        <div className="row h-100">
          <div className="col-sm-6" id="editor-area">
            <textarea
              id="editor"
              className="form-control"
              onChange={this.handleChange}
            >
              {this.state.markdownText}
            </textarea>
          </div>
          <div className="col-sm-6 h-100">
            <div
              id="preview"
              className="form-control"
              dangerouslySetInnerHTML={this.makeMarkUp()}
            />
          </div>
        </div>
      </div>
    );
  }
}

ReactDom.render(<MarkdownPreviewer />, document.getElementById("root"));
