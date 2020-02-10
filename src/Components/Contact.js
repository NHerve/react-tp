import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Contact extends Component {
    render() {
        return (
            <div className='person-item'>
                <img src={this.props.contact.avatar}></img>
                <label> {this.props.contact.name}</label>
                <label> {this.props.contact.online?'online':'offline'}</label>
            </div>
        )
    };
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
}

export default Contact;
