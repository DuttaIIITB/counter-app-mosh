import React, { Component } from 'react';
class Counter extends Component {
    state = { 
        value:this.props.counter.value,
        //tags: ['tag1','tag2','tag3']
    };
//    constructor(){
//        super()
//        this.handleIncrement = this.handleIncrement.bind(this)
 //   }
    renderTags(){
        if(this.state.tags.length === 0){
            return <p>There are no tags!</p>
        }
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    handleIncrement = () => {
        this.setState({value: this.state.value + 1})
    }
    handleDecrement = () => {
        this.setState({value: this.state.value - 1})
    }


    render() {
        console.log("props",this.props);
        return (
        <div>
            <span className={this.getBadgeClasses()}>
                {this.formatCount()}</span>
            <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm'>Increment</button>
            <button disabled={this.state.value === 0} onClick={this.handleDecrement} className='btn btn-secondary btn-sm'>Decrement</button>
            <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
        </div>

        );
    }
    getBadgeClasses(){
        let classes = "badge m-2 badge-"
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes
    }
    formatCount() {
        const {value} = this.state;
        return value === 0? "Zero":value;
    }
}
 
export default Counter;