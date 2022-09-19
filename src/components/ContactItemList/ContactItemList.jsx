import PropTypes from "prop-types";
import {ContactList} from "./ContactItemList.Styled"
import { BsFillPersonFill } from 'react-icons/bs';

export const ContactItemList = ({ contacts, onClick }) => {

    const elements = contacts.map(({ name, number, id }) => {
        return <li key={id} onClick={onClick}>
            <BsFillPersonFill />
            <p>{name}: {number}</p>
            <button type="button" onClick={() => onClick(id)}>Delete</button>
        </li>
    })
    return (
        <>
            <ContactList>{elements}</ContactList>
        </>
    )
};

ContactItemList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    onClick: PropTypes.func,
}