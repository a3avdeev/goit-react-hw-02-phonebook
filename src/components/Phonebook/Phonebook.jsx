import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactAddForm from "../ContactAddForm/ContactAddForm"
import {ContactItemList} from "../ContactItemList/ContactItemList"

export default class Phonebook extends Component {
    state = {
        contacts: [],
        filter: ''
    }

    handleChange = (event) => {
        const { name, value } = event.currentTarget;
        this.setState({[name]: value})
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

    removeContact = (id) => {
        this.state((prev) => {
            const newContact = prev.contacts.filter(item => item.id !== id);
            return {contacts: newContact}
        })
    }

    render() {
        return <div>
            <h2>Phonebook</h2>
            <ContactAddForm />

            <h2>Contacts</h2>
            <ContactItemList contacts={this.contacts} onClick={this.removeContact}/>
        </div>
    }



}
