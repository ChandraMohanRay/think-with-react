// const container = document.getElementById('react-container');
// ReactDOM.render("Hello! Welcome to React",container);


// // Functional Components :
// const Container = () =>{
//     return React.createElement(`div`,null,`welcome to react games`,
//     React.createElement(`div`,null,`lets rock n roll`)
//     );
// }


// //Render the container 


// const container = document.getElementById('react-container');
// ReactDOM.render(React.createElement(Container),container);

// Rect 3 || NOW IT'S CLASS TIME \


// class ReactContainer extends React.Component{
//     // constructor - to initialize the state 
  
//     // render method to render the react dom 
//       render(){
//           return React.createElement(`div`,null,`Hey ProGrads`,
//           React.createElement(`div`,null,`Let's rock and roll`)
//           );
//       }
    
//   }
//   const container = document.getElementById('react-container');
//   ReactDOM.render(React.createElement(ReactContainer),container);
class ReactContainer extends React.Component{
    // JSX tags
    // JSX there should be one parent element
      render(){
          return (
          <div>Hello! Welcome to ProGrads   
             <div>Let's rock and roll </div>
         </div> )
      };  
  }

const container = document.getElementById('react-container');
// Direclty pass the component to render
ReactDOM.render(<ReactContainer/>,container);    
