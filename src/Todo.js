import React, { Component } from 'react'

export default class Todo extends Component {

    state = {
        element : '',
        date    : '',
        items   : [] 
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.setState({
            element : '',
            date    : '',
            items   : [...this.state.items, {element : this.state.element, date : this.state.date}]
        })
    }

    deleteItem = (index) => {
        const arr = this.state.items
        arr.splice(index, 1)
        this.setState({
            items : arr
        })
    }

    renderTask = () => {
        return this.state.items.map((item, index) => {
            return (
                <div className="card mb-3" key={index}>
                    <div className="card-body">
                        <h4>{item.element} : {item.date}
                            <i className="fas fa-times"
                                style={{cursor : 'pointer', float : 'right', color : 'red'}}
                                onClick={() => this.deleteItem(index)}></i>
                        </h4>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="card my-3">
                    <div className="card-header">To-Do List
                        <div className="card-body">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="element">Thing to do</label>
                                    <div className="row">
                                        <div className="col-md-10">
                                            <input type="text"
                                                className="form-control form-control-lg"
                                                name="element"
                                                onChange={this.onChange}
                                                value={this.state.element}/>
                                        </div>
                                        <div className="col-md-2">
                                            <input type="date"
                                                className="form-control form-control-sm"
                                                name="date"
                                                onChange={this.onChange}
                                                value={this.state.date}/>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-success btn-block">Add a task !</button>
                            </form>
                        </div>
                    </div>
                </div>
                {this.renderTask()}
            </React.Fragment>
        )
    }
}
