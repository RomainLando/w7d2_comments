const Comment = ({commentObj}) => {

    return(
        <li><strong>{commentObj.author}:</strong> {commentObj.text}</li>
    )
}

export default Comment;