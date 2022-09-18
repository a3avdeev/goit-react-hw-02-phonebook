
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
        }
