

const User = ({users, details,setPostUserId} ) => {
const click=()=>{
    setPostUserId(false)
    details(users)
}
    return (
        <div>
            <div>{users.id}.) {users.name} <input type={"button"} value={'GetDetails'} onClick={click}/></div>

        </div>
    );
};
export default User;