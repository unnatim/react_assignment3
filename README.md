# react_assignment3
Happy Birthday Card React Assignment 3

This assignment makes use of Props.

Some information about Props in React :
Props help you to pass values from a parent component to a child component so that they can be accessed within the child component.

Props in a functional component:
A functional component accepts a parameter called props from the parent component. This parameter is an object that holds all the properties passed from the parent component to the child component. In place of props, you can use any other parameter name too.
Example:
const Organization = function(props) {
   return (
      <div>
         <h1>{props.name}</h1>
	 <h3>{props.tagline}</h3>
     </div>
   )
}

<Organization name="UpGrad" tagline="Building Careers of Tomorrow"/>

Props in a class component:
The properties passed from the parent component can be accessed using this.props keyword. Note that in class components, you need to use the keyword props only, unlike the case in functional components where any parameter name can be used to represent the props of the component.
Example :
class Organization extends Component {
   render() {
      return (
         <div>
            <h1>{this.props.name}</h1>
            <h3>{this.props.tagline}</h3>
         </div>
       )
   }
}

<Organization name="UpGrad" tagline="Building Careers of Tomorrow"/>
