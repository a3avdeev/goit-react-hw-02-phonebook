
export const ContactItemList = ({ data, contacts }) => {
    const { id, name, number } = contacts;
    return <ul>
        {contacts.map(contact => <li key={id} data={contact}>
            {name}: {number}
            <button type="button">Delete</button>
                </li>)}
            </ul>
        }