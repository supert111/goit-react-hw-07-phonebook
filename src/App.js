import React, { Component } from "react";
import { connect } from 'react-redux';
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import { fetchContacts } from './redux/contacts/contacts-operations';
import styles from "./App.module.css"

class App extends Component { 
    componentDidMount() {
        this.props.fetchContacts();
    }

    handleFilter = (element) => {
        const { value } = element.target;
        this.setState ({ filter: value });  
    };

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <h1>Phonebook</h1>
                    <ContactForm /> 
                    <h2>Contacts</h2>
                    <Filter /> 
                    <ContactList />
                </div>
            </div>
        )
    }
}
  
  const mapDispatchToProps = dispatch => ({
    fetchContacts: () => dispatch(fetchContacts()),
  });

export default connect(null, mapDispatchToProps)(App);
//export default App;