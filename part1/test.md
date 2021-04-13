## React interview questions

1. What is state and props in reactjs?
-State is an object that holds some information that may change over the lifetime of the component.
-Props” is a special keyword in React, which stands for properties and is being used for passing data from one component to another. 

2. What is high order component? How do you use it?
- Higher-order component is a function that takes a component and returns a new component.

3. What is context? What are the benefits of it?
-React's context allows you to share information to any component, by storing it in a central place.
-It's benifit is that it allows access data to any component that requests it (usually you are only able to pass data from parent to child via props).

4. How to assign and change the value of state in a component?
-we assign value as an object [state,setState] = useState();
-To change our state, we use this. setState() and pass in an object.

5. Could you explain the life-cycle of a react component?
-Life-cycle of a react component are: Mounting, Updating, and Unmounting.

6. What is fragment in react?
-Fragments let you group a list of children without adding extra nodes to the DOM.

7. What is ref in react?
-Refs provide a way to access DOM nodes or React elements created in the render method.

8. What is container component? What is presentational component?
-Container components are components that specify the data a presentational component should render.
-Presentational component is a component that just renders HTML.

9. How to pass a function to a component?
-Pass event handlers and other functions as props to child components
eg:-<button onClick={this.handleClick}>

10. What is portal?
-Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. 

11. How to share state between parent component and child component? How to share state between sibling components?

-To achieve the child-parent communication, you can send a function as a Prop to the child component. 
-First, send value from child to parent. Once data is received in the parent component. Send again to the child.
-The second way is to share between the siblings is use the redux store. Redux stores can share data among any component. Creating store, action, and reducer. Store state is immutable.
-The third way is to share data using RxJs observable. Object holds the current value and if subscribe immediately notified to the source.
