

const Post = ({posts}) => {

    return (
        <div>
            <div>{posts.id}</div>
            <div>{posts.title}</div>
            <hr/>

        </div>
    );
};

export default Post;