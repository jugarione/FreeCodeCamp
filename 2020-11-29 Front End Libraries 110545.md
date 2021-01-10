# Front End Libraries

## Bootstrap

## jQuery

### make document ready

``<script>$(document).ready(function(){});</script>``

We'll learn more about `functions` later. The important thing to know is that code you put inside this `function` will run as soon as your browser has loaded your page.

This is important because without your `document ready function`, your code may run before your HTML is rendered, which would cause bugs.

### target elements with selectors

````html
<script>
  $(document).ready(function() {
      // type
    $("button").addClass("animated bounce");
      // class
    $('.well').addClass('animated shake');
      // id
    $('#target3').addClass('animated fadeOut');
      
      //remove clases
    $('#target3').removeClass('fadeOut');
      
      // Change css
    $("#target1").css("color", "red");
      
      // Disable an element
    $('').prop('disabled', true);

      // edit >this< considering html
    $('').html('<em>jQuery Playground</em>');
      // the same as html but only text
    $('').text('<em>jQuery Playground</em>');
    
      //remove an item
    $('').remove()  
      
      // Move from one div to another
    $('').appendTo('')
      
      // clone elements where you want
    $("").clone().appendTo("");
      
      // target the parent of an element
    $('').parent().css('','')
      
      // target the child of an element
    $('').children().css('','')
      
      // target a specific child of an element
    $('.target:nth-child(n)').addClass('')
      
      // target elements based on their positions using :odd or :even selectors.
    $('.target:even').addClass('')
  });
</script>
````



## Sass

### store data

````css
/* yo can set variables */
$main-color: blue
/* and use it like this*/
main{
color: $text-color;    
}

/* you can nest css */
nav {
  background-color: red;
  ul {
    list-style: none;
    li {
      display: inline-block;
    }
  }
}
````

### Create reusable CSS with Mixins

```scss
div {
  -webkit-box-shadow: 0px 0px 4px #fff;
  -moz-box-shadow: 0px 0px 4px #fff;
  -ms-box-shadow: 0px 0px 4px #fff;
  box-shadow: 0px 0px 4px #fff;
}
```

It's a lot of typing to re-write this rule for all the elements that have a `box-shadow`, or to change each value to test different effects. Mixins are like functions for CSS. Here is how to write one:

```scss
@mixin box-shadow($x, $y, $blur, $c){ 
  -webkit-box-shadow: $x $y $blur $c;
  -moz-box-shadow: $x $y $blur $c;
  -ms-box-shadow: $x $y $blur $c;
  box-shadow: $x $y $blur $c;
}
```

The definition starts with `@mixin` followed by a custom name. The parameters (the `$x`, `$y`, `$blur`, and `$c` in the example above) are optional. Now any time a `box-shadow` rule is needed, only a single line calling the mixin replaces having to type all the vendor prefixes. A mixin is called with the `@include` directive:

```scss
div {
  @include box-shadow(0px, 0px, 4px, #fff);
}
```

### if else

````css
<style type='text/scss'>

@mixin border-stroke($val) {
  @if $val == light {
    border: 1px solid black;
  } @else if $val == medium {
    border: 3px solid black;
  }  @else if $val == heavy {
    border: 6px solid black;
  } @else {
    border: none;
  }
}

  #box {
    width: 150px;
    height: 150px;
    background-color: red;
    @include border-stroke();
  }
</style>

<div id="box"></div>
````

### for loop

The `@for` directive adds styles in a loop, very similar to a `for` loop in JavaScript.

`@for` is used in two ways: "start through end" or "start to end". The main difference is that the "start **to** end" *excludes* the end number as part of the count, and "start **through** end" *includes* the end number as part of the count.

````css
<style type='text/scss'>

    @for $j from 1 through 6 {
        .text-#{$j} {font-size: 15px * $j;}
    }

</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
````

### Use @each to Map Over Items in a List

The last challenge showed how the `@for` directive uses a starting and ending value to loop a certain number of times. Sass also offers the `@each` directive which loops over each item in a list or map. On each iteration, the variable gets assigned to the current value from the list or map.

```scss
@each $color in blue, red, green {
  .#{$color}-text {color: $color;}
}
```

A map has slightly different syntax. Here's an example:

```scss
$colors: (color1: blue, color2: red, color3: green);

@each $key, $color in $colors {
  .#{$color}-text {color: $color;}
}
```

Note that the `$key` variable is needed to reference the keys in the map. Otherwise, the compiled CSS would have `color1`, `color2`... in it. Both of the above code examples are converted into the following CSS:

```scss
.blue-text {
  color: blue;
}

.red-text {
  color: red;
}

.green-text {
  color: green;
}
```

````css
<style type='text/scss'>

@each $color in blue, black, red {
  .#{$color}-bg {background-color: $color;}
}

  div {
    height: 200px;
    width: 200px;
  }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>
````

### while

````css
<style type='text/scss'>

$x: 1;
@while $x < 6 {
  .text-#{$x} { font-size: 15px * $x;}
  $x: $x + 1;
}

</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
````

## Split Your Styles into Smaller Chunks with Partials

Partials in Sass are separate files that hold segments of CSS code. These are imported and used in other Sass files. This is a great way to group similar code into a module to keep it organized.

Names for partials start with the underscore (`_`) character, which tells Sass it is a small segment of CSS and not to convert it into a CSS file. Also, Sass files end with the `.scss` file extension. To bring the code in the partial into another Sass file, use the `@import` directive.

For example, if all your mixins are saved in a partial named "_mixins.scss", and they are needed in the "main.scss" file, this is how to use them in the main file:

```scss
// In the main.scss file

@import 'mixins'
```

Note that the underscore and file extension are not needed in the `import` statement - Sass understands it is a partial. Once a partial is imported into a file, all variables, mixins, and other code are available to use.

## Extend One Set of CSS Styles to Another Element

Sass has a feature called `extend` that makes it easy to borrow the CSS rules from one element and build upon them in another.

For example, the below block of CSS rules style a `.panel` class. It has a `background-color`, `height` and `border`.

```scss
.panel{
  background-color: red;
  height: 70px;
  border: 2px solid green;
}
```

Now you want another panel called `.big-panel`. It has the same base properties as `.panel`, but also needs a `width` and `font-size`. It's possible to copy and paste the initial CSS rules from `.panel`, but the code becomes repetitive as you add more types of panels. The `extend` directive is a simple way to reuse the rules written for one element, then add more for another:

```scss
.big-panel{
  @extend .panel;
  width: 150px;
  font-size: 2em;
}
```

The `.big-panel` will have the same properties as `.panel` in addition to the new styles.

## React

### JSX

Is a syntax extension of JavaScript called JSX that allows you to write html directly within JavaScript.

* You can write JS inside JSX writing the code inside {curly braces};

* You have to wrap all the code inside a one element like a <div>

  ````javascript
  // Valid JSX
  const JSX = {
      <div>
    		<p>Paragraph One</p>
  	  	<p>Paragraph Two</p>
    		<p>Paragraph Three</p>
  	</div>
  }
  
  // Invalid JSX
  const InvaJSX = {
      <p>Paragraph One</p>
  	<p>Paragraph Two</p>
  	<p>Paragraph Three</p>
  }
  ````

* To put comments in JSX use {/* */}

* Diferences between JSX and HTML

  * Clases in JSX is className
  * onclick in JSX is onClick
  * onchange in JSX is onChange

* Any JSX element can be written with a self-closing tag, and every element must be closed.

Render HTML Elements to the DOM

````
ReactDOM.render(componentToRender, targetNode)

//example
ReactDOM.render(SomeDiv, document.getElementById("id"))
````

### React Components

#### Pass props to a stateless Functional Component

````react
const Child = (props) => {
    return(
    <div>
            {/* here is the name of the prop for later design a value */}
    	<p>The current child is: {props.data}</p>    
    </div>
    );
};

class father extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
        <div>
        	<h3>How is the child?</h3>  
                {/*this pass the propr value to the child*/}
                <Child data="Child" />
        </div>
        );
    }
};
````

#### Pass an Array as props

````react
<ParentComponent>
  <ChildComponent colors={["green", "blue", "red"]} />
</ParentComponent>
````

#### Default props

````react
MyComponent.defaultProps = { location: 'San Francisco' }
````

#### Override Default Props

you have to explicitly override the default prop

#### Define the type of prop that you expect

````react
{/* it has to be outside MyComponent*/}

MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }
````

#### Access Props with  this.props

````react
{this.props.data}

{/* the definition in the parent*/}
<div>
	<child data="asdfasdf" />
</div>
````

#### EXAMPLE

````react
// name is not defined here

class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// Change code below this line

const Camper = props => {
    
    // note: here you can use JavaScript to do a lot of things after the return and doesn't have to use {}
  return (
<div>
  <p>{props.name}</p>
</div>
  )
}
{/* DefaultProp */}
Camper.defaultProps = { name: "CamperBot" }
{/* PropTypes definition */}
Camper.propTypes = { name: PropTypes.string.isRequired}
````

#### state

````react
this.state = {
// describe your state here
}
````

##### call the state info

````react
{ this.state.tag }
````

#### call the state before and example code

````react
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // before return statement you can write JS without {}
    // defined
    const name = this.state.name;
    return (
      <div>
            {// called}
          <h1>{name}</h1>
      </div>
    );
  }
};
````

#### set State

allow you to set or change the state value

````react
this.setState({
  username: 'Lewis'
});
````

React expects you to never modify `state` directly, instead always use `this.setState()` when state changes occur. Also, you should note that React may batch multiple state updates in order to improve performance. What this means is that state updates through the `setState` method can be asynchronous. There is an alternative syntax for the `setState` method which provides a way around this problem. This is rarely needed but it's good to keep it in mind! Please consult the [React documentation](https://facebook.github.io/react/docs/state-and-lifecycle.html) for further details.

#### Bind 'this' to a Class Method

````react
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
    // bindding
      this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        { /* how to call it */ }
        <button onClick={this.handleClick} >Click Me</button>
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};
````

#### use state to toggle an element

If you need to know the previous state when updating a state, you can't do this

````react
this.setState({
  counter: this.state.counter + this.props.increment
});
````

Instead, you should pass `setState` a function that allows you to access state and props. Using a function with `setState` guarantees you are working with the most current values of state and props. This means that the above should be rewritten as:

````react
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
````

You can also use a form without `props` if you need only the `state`:

```react
this.setState(state => ({
  counter: state.counter + 1
}));
```

#### EXAMPLEs

````react
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // binding
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  // toggle
  toggleVisibility(){
    this.setState( state => {
      if(state.visibility){
        return {visibility: false}
        } else {
          return {visibility: true}
        }
    });
  }
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}
		
````

````react
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
      this.reset = this.reset.bind(this);

  }
    increment(){
      this.setState(state => ({
        count: state.count + 1
      }))
    }

    decrement(){
      this.setState(state => ({
        count: state.count - 1
      }))
    }

    reset(){
      this.setState(state => ({
        count: 0
      }))
    }

  // Change code above this line
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};

````

#### Controlled Input

````react
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // bindding
      this.handleChange = this.handleChange.bind(this);
  }
    handleChange(event){
      this.setState({
          input: event.target.value
      });
    }
  render() {
    return (
      <div>
        { /* value=atribute,  */}
          <input value={this.state.input} onChange={this.handleChange}></input>
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};

````

#### create a controlled Form

````react
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    this.setState({
      submit: this.state.input
    })
      
    event.preventDefault()
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.input} onChange={this.handleChange}></input>
          <button type='submit'>Submit!</button>
        </form>
  	      <h1>{this.state.submit}</h1>
      </div>
    );
  }
}

````

#### Pass state al Props to Child Component

````react
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         {/* pass the value*/}
         <Navbar name={this.state.name} />
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      {/* show the value */}
      <h1>Hello, my name is: {this.props.name} </h1>
    </div>
    );
  }
};

````

#### Pass a Callback as Props (autoUpdate input to < p >) example

````react
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        { /* Change code below this line */ }
          <GetInput input={this.state.inputValue} 
          handleChange={this.handleChange}
           />

          <RenderInput input={this.state.inputValue}
           />

        { /* Change code above this line */ }
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};

````

####  LifeCycle methods instoduction

React components have several special methods that provide opportunities to perform actions at specific points in the lifecycle of a component. These are called lifecycle methods, or lifecycle hooks, and allow you to catch components at certain points in time. This can be before they are rendered, before they update, before they receive props, before they unmount, and so on. Here is a list of some of the main lifecycle methods: `componentWillMount()` `componentDidMount()` `shouldComponentUpdate()` `componentDidUpdate()` `componentWillUnmount()` The next several lessons will cover some of the basic use cases for these lifecycle methods.

#### when call an api best practice componentDidMount

The best practice with React is to place API calls or any calls to your server in the lifecycle method `componentDidMount()`. This method is called after a component is mounted to the DOM. Any calls to `setState()` here will trigger a re-rendering of your component. When you call an API in this method, and set your state with the data that the API returns, it will automatically trigger an update once you receive the data.

#### Add Event Listeners componentDidMount()

The `componentDidMount()` method is also the best place to attach any event listeners you need to add for specific functionality. React provides a synthetic event system which wraps the native event system present in browsers. This means that the synthetic event system behaves exactly the same regardless of the user's browser - even if the native events may behave differently between different browsers.

````react
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // here is the added event listener
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress());
  }
  // here is the added event listener
  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};

````

#### Optimize Re-Renders with shouldComponentUpdate

So far, if any component receives new `state` or new `props`, it re-renders itself and all its children. This is usually okay. But React provides a lifecycle method you can call when child components receive new `state` or `props`, and declare specifically if the components should update or not. The method is `shouldComponentUpdate()`, and it takes `nextProps` and `nextState` as parameters.

This method is a useful way to optimize performance. For example, the default behavior is that your component re-renders when it receives new `props`, even if the `props` haven't changed. You can use `shouldComponentUpdate()` to prevent this by comparing the `props`. The method must return a `boolean` value that tells React whether or not to update the component. You can compare the current props (`this.props`) to the next props (`nextProps`) to determine if you need to update or not, and return `true` or `false` accordingly.

````react
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    // Change code below this line
    if(nextProps.value % 2 == 0){
      return true;
    }
    return false;
    // Change code above this line
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState(state => ({
      value: state.value + 1
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}

````

#### Introducing Inline Styles differences html and react

````html
<div style="color: yellow; font-size: 16px">Mellow Yellow</div>
````

JSX elements use the `style` attribute, but because of the way JSX is transpiled, you can't set the value to a `string`. Instead, you set it equal to a JavaScript `object`. Here's an example:

````react
<div style={{color: "yellow", fontSize: 16}}>Mellow Yellow</div>	
````

Notice how we camelCase the "fontSize" property? This is because React will not accept kebab-case keys in the style object. React will apply the correct property name for us in the HTML.

#### make objects of style you can apply

You may have noticed in the last challenge that there were several other syntax differences from HTML inline styles in addition to the `style` attribute set to a JavaScript object. First, the names of certain CSS style properties use camel case. For example, the last challenge set the size of the font with `fontSize` instead of `font-size`. Hyphenated words like `font-size` are invalid syntax for JavaScript object properties, so React uses camel case. As a rule, any hyphenated style properties are written using camel case in JSX.

All property value length units (like `height`, `width`, and `fontSize`) are assumed to be in `px` unless otherwise specified. If you want to use `em`, for example, you wrap the value and the units in quotes, like `{fontSize: "4em"}`. Other than the length values that default to `px`, all other property values should be wrapped in quotes.

````react
const styles = {color: "purple", fontSize: 40, border: "2px solid purple"};

// Change code above this line
class Colorful extends React.Component {
  render() {
    // Change code below this line
    return (
      <div style= {styles} >Style Me!</div>
    );
    // Change code above this line
  }
};
````

#### Use advances JavaScript in React Render Method

You can also write JavaScript directly in your render methods, before the return statement, without inserting it inside of curly braces. This is because it is not yet within the JSX code. When you want to use a variable later in the JSX code inside the return statement, you place the variable name inside curly braces.

````react
const inputStyle = {
  width: 235,
  margin: 5
};

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: ''
    };
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ''
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      "Don't count on it",
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ];
    const answer = possibleAnswers[this.state.randomIndex]; // Change this line
    return (
      <div>
        <input
          type='text'
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle}
        />
        <br />
        <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
        <br />
        <h3>Answer:</h3>
        <p>
          {/* Change code below this line */}
            {answer}
          {/* Change code above this line */}
        </p>
      </div>
    );
  }
}
````

#### Render with an If-Else Condition

Another application of using JavaScript to control your rendered view is to tie the elements that are rendered to a condition. When the condition is true, one view renders. When it's false, it's a different view. You can do this with a standard if/else statement in the render() method of a React component.

````react
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display
    }));
  }
  render() {
    // Change code below this line
    if(this.state.display){
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         <h1>Displayed!</h1>
       </div>
    );
} else {
  return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
       </div>
    );
}
}
}
````

#### Use && for a More Concise Conditional

the same as before but more concise

````react
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         // here is the conditional {condition && <p>markpup</p>}
         {this.state.display && <h1>Displayed!</h1>}
       </div>
    );
  }
};
````

#### Use a Ternary Expression for Conditional Rendering

Before moving on to dynamic rendering techniques, there's one last way to use built-in JavaScript conditionals to render what you want: the ternary operator. The ternary operator is often utilized as a shortcut for `if/else` statements in JavaScript. They're not quite as robust as traditional `if/else` statements, but they are very popular among React developers. One reason for this is because of how JSX is compiled, `if/else` statements can't be inserted directly into JSX code. You might have noticed this a couple challenges ago — when an `if/else` statement was required, it was always *outside* the `return` statement. Ternary expressions can be an excellent alternative if you want to implement conditional logic within your JSX. Recall that a ternary operator has three parts, but you can combine several ternary expressions together. Here's the basic syntax:

```jsx
condition ? expressionIfTrue : expressionIfFalse;
```

````react
const inputStyle = {
  width: 235,
  margin: 5
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    // Change code below this line
    this.state = {
      input: '',
      userAge: ''
    }
    // Change code above this line
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {/* Change code below this line */}

          {
            this.state.userAge == '' ? buttonOne : this.state.userAge >= 18 ? buttonTwo : buttonThree}
        {/* Change code above this line */}
      </div>
    );
  }
}
````

#### render conditionally from Props

````react
class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    {/* Change code below this line */}
    return <h1>{this.props.fiftyFifty ? "You Win!" : "You Lose!"}</h1>;
    {/* Change code above this line */}
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      counter: this.state.counter + 1 // Change this line
    });
  }
  render() {
    const expression = Math.random() >= .5; // Change this line
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        {/* Change code below this line */}
          <Results fiftyFifty={expression} />
        {/* Change code above this line */}
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
}

````

#### Change Inline CSS Condionally Based on Component State

````react
class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
    // Change code below this line
      if(this.state.input.length > 15) {inputStyle.border = "3px solid red"}
    // Change code above this line
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );
  }
};

````

#### Use Array.map() to Dynamically Render Elements

````react
const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    // Change code below this line
    this.state = {
      userInput: '',
      toDoList: []
    }
    // Change code above this line
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = this.state.toDoList.map(item => {
      return <li>{item}</li>
    }); // Change this line
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder='Separate Items With Commas'
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}

````

#### Give Sibling Elements a Unique Key Attribute

````react
const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function Frameworks() {
  const renderFrameworks = frontEndFrameworks.map((item) => 
    <li key={item}>{item}</li>
  ); // Change this line
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
};
````

#### Use Array.filter() to Dynamically Filter an Array

````react
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    };
  }
  render() {
    const usersOnline = this.state.users.filter(item =>
    item.online == true
    ); // Change this line
    const renderOnline = usersOnline.map(item =>
    <li key={item.username}>{item.username}</li>
    ); // Change this line
    return (
      <div>
        <h1>Current Online Users:</h1>
        <ul>{renderOnline}</ul>
      </div>
    );
  }
}

````

#### Render React on the Server with renderToString

So far, you have been rendering React components on the client. Normally, this is what you will always do. However, there are some use cases where it makes sense to render a React component on the server. Since React is a JavaScript view library and you can run JavaScript on the server with Node, this is possible. In fact, React provides a `renderToString()` method you can use for this purpose.

There are two key reasons why rendering on the server may be used in a real world app. First, without doing this, your React apps would consist of a relatively empty HTML file and a large bundle of JavaScript when it's initially loaded to the browser. This may not be ideal for search engines that are trying to index the content of your pages so people can find you. If you render the initial HTML markup on the server and send this to the client, the initial page load contains all of the page's markup which can be crawled by search engines. Second, this creates a faster initial page load experience because the rendered HTML is smaller than the JavaScript code of the entire app. React will still be able to recognize your app and manage it after the initial load.

````react
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};

// Change code below this line
ReactDOMServer.renderToString(<App/>)
````

## Redux

### Create a redux Store

Redux is a state management framework that can be used with a number of different web technologies, including React. 

​                In Redux, there is a single state object that's responsible for the entire state of your application. This means if you had a React app with ten components, and each component had its own local state, the entire state of your app would be defined by a single state object housed in the Redux `store`. This is the first important principle to understand when learning Redux: the Redux store is the single source of truth when it comes to application state.

This also means that any time any piece of your app wants to update state, it **must** do so through the Redux store. The unidirectional data flow makes it easier to track state management in your app.

````react
const reducer = (state = 5) => {
  return state;
}

// define the Redux store
let store = Redux.createStore(reducer)
````

###	Get State from the Redux Store

The Redux store object provides several methods that allow you to interact with it. For example, you can retrieve the current <code>state</code> held in the Redux store object with the <code>getState()</code> method.

````react
// the same code as before but concisely
const store = Redux.createStore(
  (state = 5) => state
);

// get state from store
let currentState = store.getState();
````

 ### Define a Redux Action

Since Redux is a state management framework, updating state is one of its core tasks. In Redux, all state updates are triggered by dispatching actions. An action is simply a JavaScript object that contains information about an action event that has occurred. The Redux store receives these action objects, then updates its state accordingly. Sometimes a Redux action also carries some data. For example, the action carries a username after a user logs in. While the data is optional, actions must carry a `type` property that specifies the 'type' of action that occurred.

Think of Redux actions as messengers that deliver information about events happening in your app to the Redux store. The store then conducts the business of updating state based on the action that occurred.

````react
let action = {type: 'LOGIN'}
````

### Define an action creator

After creating an action, the next step is sending the action to the Redux store so it can update its state. In Redux, you define action creators to accomplish this. An action creator is simply a JavaScript function that returns an action. In other words, action creators create objects that represent action events.

````react
const action = {
  type: 'LOGIN'
}
// Define an action creator here:
function actionCreator(){
  return action;
}
````

### Dispatch an Action Event

`dispatch` method is what you use to dispatch actions to the Redux store. Calling `store.dispatch()` and passing the value returned from an action creator sends an action back to the store.

Recall that action creators return an object with a type property that specifies the action that has occurred. Then the method dispatches an action object to the Redux store. Based on the previous challenge's example, the following lines are equivalent, and both dispatch the action of type `LOGIN`:

```react
store.dispatch(actionCreator());
store.dispatch({ type: 'LOGIN' });
```

````js
const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:
store.dispatch(loginAction());
````

### Handle an Action in the Store

After an action is created and dispatched, the Redux store needs to know how to respond to that action. This is the job of a `reducer` function. Reducers in Redux are responsible for the state modifications that take place in response to actions. A `reducer` takes `state` and `action` as arguments, and it always returns a new `state`. It is important to see that this is the **only** role of the reducer. It has no side effects — it never calls an API endpoint and it never has any hidden surprises. The reducer is simply a pure function that takes state and action, then returns new state.

Another key principle in Redux is that `state` is read-only. In other words, the `reducer` function must **always** return a new copy of `state` and never modify state directly. Redux does not enforce state immutability, however, you are responsible for enforcing it in the code of your reducer functions. You'll practice this in later challenges.

````js
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // Change code below this line
  if(action.type == "LOGIN"){
    return {login:true}
  }

  return state;
  // Change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

````

### Use a switch statement to Handle Multiple Actions

You can tell the Redux store how to handle multiple action types. Say you are managing user authentication in your Redux store. You want to have a state representation for when users are logged in and when they are logged out. You represent this with a single state object with the property `authenticated`. You also need action creators that create actions corresponding to user login and user logout, along with the action objects themselves.

````js
const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  // Change code below this line
  switch (action.type) {
    case 'LOGIN':
    return {authenticated: true}
    case 'LOGOUT':
    return {authenticated: false}
    default:
    return state;
    }
  // Change code above this line
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};
````

### Use const for Action Types

A common practice when working with Redux is to assign action types as read-only constants, then reference these constants wherever they are used. You can refactor the code you're working with to write the action types as `const` declarations.

````js
// Change code below this line
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
// Change code above this line

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {

    case LOGIN:
      return {
        authenticated: true
      }

    case LOGOUT:
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT
  }
};
````

### Register a Store Listener

Another method you have access to on the Redux `store` object is `store.subscribe()`. This allows you to subscribe listener functions to the store, which are called whenever an action is dispatched against the store. One simple use for this method is to subscribe a function to your store that simply logs a message every time an action is received and the store is updated.

````js
const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

// Change code below this line
function incCount(){
  count++;
}
store.subscribe(incCount)
// Change code above this line

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
````

### Combine Multiple Reducers

When the state of your app begins to grow more complex, it may be tempting to divide state into multiple pieces. Instead, remember the first principle of Redux: all app state is held in a single state object in the store. Therefore, Redux provides reducer composition as a solution for a complex state model. You define multiple reducers to handle different pieces of your application's state, then compose these reducers together into one root reducer. The root reducer is then passed into the Redux `createStore()` method.

In order to let us combine multiple reducers together, Redux provides the `combineReducers()` method. This method accepts an object as an argument in which you define properties which associate keys to specific reducer functions. The name you give to the keys will be used by Redux as the name for the associated piece of state.

Typically, it is a good practice to create a reducer for each piece of application state when they are distinct or unique in some way. For example, in a note-taking app with user authentication, one reducer could handle authentication while another handles the text and notes that the user is submitting. For such an application, we might write the `combineReducers()` method like this:



```js
const rootReducer = Redux.combineReducers({
  auth: authenticationReducer,
  notes: notesReducer
});
```



Now, the key `notes` will contain all of the state associated with our notes and handled by our `notesReducer`. This is how multiple reducers can be composed to manage more complex application state. In this example, the state held in the Redux store would then be a single object containing `auth` and `notes` properties.

````js
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({
  count: counterReducer,
  auth: authReducer
}) // Define the root reducer here

const store = Redux.createStore(rootReducer);

````

### Send Action Data to the Store

You can also send specific data along with your actions. In fact, this is very common because actions usually originate from some user interaction and tend to carry some data with them. The Redux store often needs to know about this data.

````js
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // Change code below this line
    case 'ADD_NOTE':
    return action.text;
    // Change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // Change code below this line
  const action = {
    type: 'ADD_NOTE',
    text: note
  }
  return action;
  // Change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());
````

### Use Middleware to Handle Asynchronous Action

So far these challenges have avoided discussing asynchronous actions, but they are an unavoidable part of web development. At some point you'll need to call asynchronous endpoints in your Redux app, so how do you handle these types of requests? Redux provides middleware designed specifically for this purpose, called Redux Thunk middleware. Here's a brief description how to use this with Redux.

To include Redux Thunk middleware, you pass it as an argument to `Redux.applyMiddleware()`. This statement is then provided as a second optional parameter to the `createStore()` function. Take a look at the code at the bottom of the editor to see this. Then, to create an asynchronous action, you return a function in the action creator that takes `dispatch` as an argument. Within this function, you can dispatch actions and perform asynchronous requests.

In this example, an asynchronous request is simulated with a `setTimeout()` call. It's common to dispatch an action before initiating any asynchronous behavior so that your application state knows that some data is being requested (this state could display a loading icon, for instance). Then, once you receive the data, you dispatch another action which carries the data as a payload along with information that the action is completed.

Remember that you're passing `dispatch` as a parameter to this special action creator. This is what you'll use to dispatch your actions, you simply pass the action directly to dispatch and the middleware takes care of the rest.

````js
const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

const handleAsync = () => {
  return function(dispatch) {
    // Dispatch request action here
      store.dispatch(requestingData());

    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      // Dispatch received data action here
      store.dispatch(receivedData(data));

    }, 2500);
  }
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);
````

### Write a Counter with Redux EXAMPLE

````js
const INCREMENT = 'INCREMENT'; // Define a constant for increment action types
const DECREMENT = 'DECREMENT'; // Define a constant for decrement action types

const defaultState = 0;

const counterReducer = (state = defaultState, action) =>{
    switch(action.type) {
        case 'INCREMENT':
        return state + 1;

        case 'DECREMENT':
        return state - 1;

        default:
        return state;
    }
}; // Define the counter reducer which will increment or decrement the state based on the action it receives

const incAction = () => {
    const action = {type: 'INCREMENT'}
    return action;
}; // Define an action creator for incrementing

const decAction = () => {
    const action = {type: 'DECREMENT'}
    return action;
}; // Define an action creator for decrementing

const store = Redux.createStore(counterReducer); // Define the Redux store here, passing in your reducers
````

### State immutability : Never Mutate State

These final challenges describe several methods of enforcing the key principle of state immutability in Redux. Immutable state means that you never modify state directly, instead, you return a new copy of state.

If you took a snapshot of the state of a Redux app over time, you would see something like `state 1`, `state 2`, `state 3`,`state 4`, `...` and so on where each state may be similar to the last, but each is a distinct piece of data. This immutability, in fact, is what provides such features as time-travel debugging that you may have heard about.

Redux does not actively enforce state immutability in its store or reducers, that responsibility falls on the programmer. Fortunately, JavaScript (especially ES6) provides several useful tools you can use to enforce the immutability of your state, whether it is a `string`, `number`, `array`, or `object`. Note that strings and numbers are primitive values and are immutable by nature. In other words, 3 is always 3. You cannot change the value of the number 3. An `array` or `object`, however, is mutable. In practice, your state will probably consist of an `array` or `object`, as these are useful data structures for representing many types of information.

````js
const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      // Don't mutate state here or the tests will fail
      return [...state, action.todo]
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer); 
````

### State immutability : Use the Spread Operator on Arrays

One solution from ES6 to help enforce state immutability in Redux is the spread operator: `...`. The spread operator has a variety of applications, one of which is well-suited to the previous challenge of producing a new array from an existing array. This is relatively new, but commonly used syntax. For example, if you have an array `myArray` and write:

```
let newArray = [...myArray];
```

`newArray` is now a clone of `myArray`. Both arrays still exist separately in memory. If you perform a mutation like `newArray.push(5)`, `myArray` doesn't change. The `...` effectively *spreads* out the values in `myArray` into a new array. To clone an array but add additional values in the new array, you could write `[...myArray, 'new value']`. This would return a new array composed of the values in `myArray` and the string `'new value'` as the last value. The spread syntax can be used multiple times in array composition like this, but it's important to note that it only makes a shallow copy of the array. That is to say, it only provides immutable array operations for one-dimensional arrays.

````js
const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      // Don't mutate state here or the tests will fail
      let newState = [...state, action.todo]
      return newState;
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
    todo
  }
}

const store = Redux.createStore(immutableReducer);

````

### State immutability : Remove an Item from an Array

````js
const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      // Don't mutate state here or the tests will fail
      return state.slice(0, action.index).concat(state.slice(action.index + 1))
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

const store = Redux.createStore(immutableReducer);
````

### State immutability : Copy an Object with Object.assign

The last several challenges worked with arrays, but there are ways to help enforce state immutability when state is an `object`, too. A useful tool for handling objects is the `Object.assign()` utility. `Object.assign()` takes a target object and source objects and maps properties from the source objects to the target object. Any matching properties are overwritten by properties in the source objects. This behavior is commonly used to make shallow copies of objects by passing an empty object as the first argument followed by the object(s) you want to copy. Here's an example:

```
const newObject = Object.assign({}, obj1, obj2);
```

This creates `newObject` as a new `object`, which contains the properties that currently exist in `obj1` and `obj2`.

````js
const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      // Don't mutate state here or the tests will fail
      return Object.assign({}, state,{status: 'online'})
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);
````

## React and Redux

### Manage State Locally First

````react
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this)
  }
  // Add handleChange() and submitMessage() methods here


  handleChange(e) {
    this.setState({
      input: e.target.value,
    });
  }

  submitMessage() {
    this.setState({
      messages: [...this.state.messages, this.state.input],
      input: ''
    });
  }

  render() {
    const messages = this.state.messages.map(message =>{
      return <li>{message}</li>
    });

    return (
      <div>
        <h2>Type in a new Message:</h2>

        { /* Render an input, button, and ul below this line */ }
        <input 
        onChange={this.handleChange}
        value={this.state.input}
        >       
        </input>
        <button onClick={this.submitMessage}>Add message</button>
        <ul>{messages}</ul>

        { /* Change code above this line */ }
      </div>
    );
  }
};	
````

### Extract State Logic to Redux

````js
// Define ADD, addMessage(), messageReducer(), and store here:

// action 
const ADD = 'ADD';

// action Creator 
function addMessage(message){
    return {
        type: 'ADD',
        message
    };
}

// reducer 
const messageReducer = (defaultState = [], action) => {
    if(action.type == 'ADD'){
        return [...defaultState, action.message]
    }
    return defaultState;
}

// store
const store = Redux.createStore(messageReducer)
````

### Use Provider to Connect Redux to React

The `Provider` is a wrapper component from React Redux that wraps your React app. This wrapper then allows you to access the Redux `store` and `dispatch` functions throughout your component tree. `Provider` takes two props, the Redux store and the child components of your app. Defining the `Provider` for an App component might look like this:

```jsx
<Provider store={store}>
  <App/>
</Provider>
```

````js
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};



const store = Redux.createStore(messageReducer);

// React:

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {  
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  // Render the Provider below this line
  render(){
    return (
  <Provider store={store}>
  <DisplayMessages />
</Provider>
    )
  }

  // Change code above this line
};
````

### Map State to Props

The `Provider` component allows you to provide `state` and `dispatch` to your React components, but you must specify exactly what state and actions you want. This way, you make sure that each component only has access to the state it needs. You accomplish this by creating two functions: `mapStateToProps()` and `mapDispatchToProps()`.

In these functions, you declare what pieces of state you want to have access to and which action creators you need to be able to dispatch. Once these functions are in place, you'll see how to use the React Redux `connect` method to connect them to your components in another challenge.

**Note:** Behind the scenes, React Redux uses the `store.subscribe()` method to implement `mapStateToProps()`.

````jsx
const state = [];

// Change code below this line

function mapStateToProps(state){
return {messages: state}
}
````

### Map Dispatch to Props

The `mapDispatchToProps()` function is used to provide specific action creators to your React components so they can dispatch actions against the Redux store. It's similar in structure to the `mapStateToProps()` function you wrote in the last challenge. It returns an object that maps dispatch actions to property names, which become component `props`. However, instead of returning a piece of `state`, each property returns a function that calls `dispatch` with an action creator and any relevant action data. You have access to this `dispatch` because it's passed in to `mapDispatchToProps()` as a parameter when you define the function, just like you passed `state` to `mapStateToProps()`. Behind the scenes, React Redux is using Redux's `store.dispatch()` to conduct these dispatches with `mapDispatchToProps()`. This is similar to how it uses `store.subscribe()` for components that are mapped to `state`.

For example, you have a `loginUser()` action creator that takes a `username` as an action payload. The object returned from `mapDispatchToProps()` for this action creator would look something like:

```jsx
{
  submitLoginUser: function(username) {
    dispatch(loginUser(username));
  }
}
```

````jsx
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// Change code below this line

function mapDispatchToProps(dispatch){
  return {
    submitNewMessage: message => {
      dispatch(addMessage(message))
    }
  }
}
````

### Connect Redux to React

Now that you've written both the `mapStateToProps()` and the `mapDispatchToProps()` functions, you can use them to map `state` and `dispatch` to the `props` of one of your React components. The `connect` method from React Redux can handle this task. This method takes two optional arguments, `mapStateToProps()` and `mapDispatchToProps()`. They are optional because you may have a component that only needs access to `state` but doesn't need to dispatch any actions, or vice versa.

To use this method, pass in the functions as arguments, and immediately call the result with your component. This syntax is a little unusual and looks like:

```
connect(mapStateToProps, mapDispatchToProps)(MyComponent)
```

**Note:** If you want to omit one of the arguments to the `connect` method, you pass `null` in its place.

````jsx
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

const mapStateToProps = (state) => {
  return {
    messages: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    }
  }
};

class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h3>This is a Presentational Component</h3>
  }
};

const connect = ReactRedux.connect;
// Change code below this line

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Presentational)
````

### Connect Redux to the Messages App

Now that you understand how to use `connect` to connect React to Redux, you can apply what you've learned to your React component that handles messages.

In the last lesson, the component you connected to Redux was named `Presentational`, and this wasn't arbitrary. This term *generally* refers to React components that are not directly connected to Redux. They are simply responsible for the presentation of UI and do this as a function of the props they receive. By contrast, container components are connected to Redux. These are typically responsible for dispatching actions to the store and often pass store state to child components as props.

````jsx
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

// React-Redux:
const mapStateToProps = (state) => {
  return { messages: state }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (newMessage) => {
       dispatch(addMessage(newMessage))
    }
  }
};

const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// Define the Container component here:
const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Complete the return statement:
    
    return (
      <Provider store={store}>
      <Container />
    </Provider>
    );
  }
};
````

### Extract Local State into Redux

You're almost done! Recall that you wrote all the Redux code so that Redux could control the state management of your React messages app. Now that Redux is connected, you need to extract the state management out of the `Presentational` component and into Redux. Currently, you have Redux connected, but you are handling the state locally within the `Presentational` component.

````jsx
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// Change code below this line
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.props.submitNewMessage(this.state.input)
    this.setState((state) => ({
      input: '',
    }));
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.props.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};
// Change code above this line

const mapStateToProps = (state) => {
  return {messages: state}
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
};
````

### Moving Forward From Here

Congratulations! You finished the lessons on React and Redux. There's one last item worth pointing out before you move on. Typically, you won't write React apps in a code editor like this. This challenge gives you a glimpse of what the syntax looks like if you're working with npm and a file system on your own machine. The code should look similar, except for the use of `import` statements (these pull in all of the dependencies that have been provided for you in the challenges). The "Managing Packages with npm" section covers npm in more detail.

Finally, writing React and Redux code generally requires some configuration. This can get complicated quickly. If you are interested in experimenting on your own machine, the

[Create React App](https://github.com/facebookincubator/create-react-app) comes configured and ready to go.

Alternatively, you can enable Babel as a JavaScript Preprocessor in CodePen, add React and ReactDOM as external JavaScript resources, and work there as well.

````jsx
/*
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './redux/reducers'
import App from './components/App'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
*/
````

