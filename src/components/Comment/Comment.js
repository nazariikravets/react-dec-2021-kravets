

const Comment = ({comments}) => {
    const {id, body}=comments
    return (
        <div>
            <div>{id}</div>
            <div>{body}</div>
            <hr/>
        </div>
    );
};

export default Comment;