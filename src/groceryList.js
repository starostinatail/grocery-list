import { Component } from 'react';

export class GroceryList extends Component {
    state = {
        userInput: '',
        groseryList: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
        console.log(e)
    }

    addItem(yourItem) {
        if (yourItem === '') {
            alert ("Add an item :)")
        } else {
        let listArray = this.state.groseryList;
        listArray.push(yourItem);
        this.setState({groseryList: listArray, userInput: ''})
    }
    }

    deleteItem(yourItem) {
        let listArray = this.state.groseryList;
        listArray = [];
        this.setState({groseryList: listArray})
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
            <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input type="text"
                placeholder="Input your item"
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}/>
            </div>
            <div className="container">
                <button onClick={() => this.addItem(this.state.userInput)} className="btn add">ADD</button>
            </div>
                <ul>
                    {this.state.groseryList.map((item, index) => (
                        <li onClick={this.crossedWord} key={index}>{item}</li>
                    ))}
                </ul>
            <div className="container">
                <button onClick={() => this.deleteItem()} className="btn delete">DELETE</button>
            </div>
            </form>
            </div>
        )
    }
}