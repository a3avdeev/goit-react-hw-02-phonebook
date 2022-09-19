import PropTypes from "prop-types";

export const ContactItemList = ({ contacts, onClick }) => {

    const elements = contacts.map(({ name, number, id }) => {
        return <li key={id} onClick={onClick}>
            <p>{name}: {number}</p>
            <button type="button" onClick={() => onClick(id)}>Delete</button>
        </li>
    })
    return (
        <>
            <ul>{elements}</ul>
        </>
    )
};

ContactItemList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    onClick: PropTypes.func,
}