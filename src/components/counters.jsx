import React, { Component } from 'react'
import Counter from './counter'
class Counters extends Component {
    state = { 
        counters: [
            {id: 1,value: 4},
            {id: 2,value: 0},
            {id: 3,value: 0},
            {id: 4,value: 0}


        ]
    } 
    
    handleIncrement = counter => {
        console.log('ON Increment')
        const counters = [...this.state.counters]
        const index = counters.indexOf(counter)
        counters[index] = {...counter}
        counters[index].value++;
        this.setState({counters})
        console.log(counters[index])
        console.log(this.state.counters[index])

    }
    
    handleDecrement = counter => {
        if (counter.value === 0){
            console.log('decrement cant be done')
        }
        
        const counters = [...this.state.counters]
        const index = counters.indexOf(counter)
        counters[index] = {...counter}
        counters[index].value--
        console.log(counters[index])

        this.setState({counters})
    }

    handleDelete = (counterId) => {
        console.log("Event Handler Called",counterId)
        const counters = this.state.counters.filter(counter => counter.id !== counterId)
        this.setState({counters})
    }
    handleReset = () => {
        const counters = this.state.counters.map(
            counter => {
                counter.value=0 
                return counter
            }
            )
        this.setState(counters)
    }
    render() { 
        return (
            <div>
                <button 
                 onClick={this.handleReset} 
                 className="btn btn-primary btn-sm m-2">
                    Reset
                </button>
                {this.state.counters.map(counter => 
                <Counter 
                   key={counter.id} 
                   onDelete={this.handleDelete} 
                   onIncrement = {this.handleIncrement}
                   onDecrement = {this.handleDecrement}
                   counter = {counter}
                />
                 )}
            
            </div>
        );
    }
}
 
export default Counters
