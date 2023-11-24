function Employee(props) {
    return (
        <>
            <h3>Employee Component Created {props.name}</h3>
            {
                props.role ? (
                <p class="role">{props.role}</p>
                ) : (
                <p class="norole">No Role</p>
                )
            }
        </>
    )
}

export default Employee;