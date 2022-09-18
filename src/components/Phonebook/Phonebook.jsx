import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export default class Phonebook extends Component {
    state = {
        contacts: [],
        name: '',
        number: ''
        }
  
    addContact = (contact) => {
        this.setState((prev) => {
            const newContact = {
                id: nanoid(),
                ...contact
            }
            return {
                contacts: [...prev.contacts, newContact]
            }
        })
    }

    handleChange = (event) => {
        const { name, value } = event.currentTarget;
        this.setState({[name]: value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.reset();
    }

    reset = () => {
        this.state({ name: '', number: '' });
    }
  
    render() {
        // const { addContact, handleChange } = this;
    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input
                    id={nanoid()}
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                </label>
                <label>
                    Number
                    <input
                        type="tel"
                        name="number"
                        value={this.state.number}
                        onChange={this.handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        />
                </label>
                <button type="submit">Add contact</button>
            </form>
            <h2>Contacts</h2>

        </div>
    )
  }
}
