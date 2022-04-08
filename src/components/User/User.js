

const User = ({user1}) => {
    return (
        <div>
            {user1.id} --- {user1.name} --- {user1.username}
        </div>
    );
};

export default User;