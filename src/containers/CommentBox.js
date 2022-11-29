import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";
import {useState} from 'react';

const CommentBox = () => {

    const [comments, setComments] = useState([
        {id:6, author:"Vanessa", text:"Best ever, honestly scarily so."},
        {id:5, author:"Rick", text:"I have been changed forever."},
        {id:4, author:"Beatrice", text:"Greatest. Day. Ever."},
        {id:3, author:"Dominic", text:"Meh."},
        {id:2, author:"Chris", text:"I don't even know where to begin"},
        {id:1, author:"Marge", text:"Indescribable"},

    ]
    )

        const addComment = (newComment) => {
            newComment.id = comments.length + 1;
            const updatedComments = [newComment, ...comments];
            setComments(updatedComments);
        }

    return(
        <>
        <CommentForm addComment={addComment}/>
        <CommentList allComments={comments} title="Comments"/>
        </>
    );
}

export default CommentBox;