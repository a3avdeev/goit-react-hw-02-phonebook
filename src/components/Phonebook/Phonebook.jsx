import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactAddForm from "../ContactAddForm/ContactAddForm"
import { ContactItemList } from "../ContactItemList/ContactItemList"
import {Filter} from "../Filter/Filter"

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
        this.setState((prev) => {
            const newContact = prev.contacts.filter(item => item.id !== id);
            return {contacts: newContact}
        })
    }

    getFilteredContacts() {
        const { contacts, filter } = this.state;

        if (!filter) {
            return contacts;
        }
        
        return contacts.filter(({name}) => name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
    }

    render() {
        return <div>
            <h2>Phonebook</h2>
            <ContactAddForm onSubmit={this.addContact}/>

            <h2>Contacts</h2>
            <Filter />
            <ContactItemList contacts={this.getFilteredContacts()} onClick={this.removeContact}/>
        </div>
    }



}
