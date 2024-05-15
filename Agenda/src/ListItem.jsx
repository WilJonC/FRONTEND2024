const ListItem = ({persona}) => {
    const {nombre, apellidos, email, telefono} = persona
    return (
        <li>
            {apellidos},{nombre}:
            <ul>
                <li>{email}</li>
                <li>{telefono}</li>
            </ul>
        </li>
    )
}
export default ListItem