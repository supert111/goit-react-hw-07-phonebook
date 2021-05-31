import React, { Component } from "react";
//import { connect } from 'react-redux';
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
//import { fetchContacts } from './redux/contacts/contacts-operations';
import styles from "./App.module.css"

class App extends Component { 

    state = {};

    // componentDidMount() {
    //     this.props.fetchContact();
    //     console.log(this.props);
    //     console.log(this.props.fetchContact);
    //     console.log(this.props.fetchContact())
    // }

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
                    {/* {this.props.isLoading && <h1>Загружаем...</h1>} */}
                    <ContactList />
                </div>
            </div>
        )
    }
}
  
// const mapStateToProps = state => ({
//     isLoading: state.loading,
// });

// const mapDispatchToProps = dispatch => ({
//     fetchContact: () => dispatch(fetchContacts()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;