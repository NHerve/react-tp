import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Contact from './Contact'

export default class ContactList extends Component {

    render() {
        return this.props.contactList.map(elem =>{
            return (
                    <Contact contact={elem}></Contact>
            );
        })
    }
}

ContactList.propTypes = {
    contactList: PropTypes.object.isRequired
}

