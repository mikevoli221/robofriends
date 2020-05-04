import React from "react";

class ErrorBoundary extends React.Component{
    
    constructor(){
        super();
        this.state = {
            hasError : false
        }
    }

    componentDidCatch(error, info){
        this.setState({hasError : true});
    }

    render(){
        return this.state.hasError ? 
               <h1>Opps! we are so sorry for any inconvenience</h1> :
               this.props.children;
    }


}

export default ErrorBoundary;