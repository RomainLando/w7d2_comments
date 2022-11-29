import Comment from "./Comment";
import "./CommentList.css";

const CommentList = ({allComments, title}) => {

    const commentNodes =  allComments.map((comment) => {
        return <Comment key={comment.id} commentObj={comment}/>
    })

    return (
        <>
            <h2>{title}</h2>
            <ul>
                {commentNodes}
            </ul>
        </>
    )
}

export default CommentList;