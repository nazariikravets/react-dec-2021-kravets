

const Post = ({posts}) => {
    const {id,userId,title,body}=posts
    return (
        <div>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <p>{body}</p>

        </div>
    );
};

export  {Post}