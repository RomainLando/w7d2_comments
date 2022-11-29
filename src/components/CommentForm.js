import {useState} from 'react';
import "./CommentForm.css";

const CommentForm = ({addComment}) => {
    const [author, setAuthor] = useState("");
    const [text, setText] = useState("");

    const handleFormSubmit = (evt) => {

        if(!author || !text) return;

        evt.preventDefault();
        const comment = {author:author, text:text}
        addComment(comment);
        setAuthor("");
        setText("");
    }

    const handleAuthorChange = (evt) => {
        setAuthor(evt.target.value);
      }
    
      const handleTextChange = (evt) => {
        setText(evt.target.value);
      }

    return(
        <form className="comment-form"
        onSubmit={handleFormSubmit}>
            <input
                type="text"
                placeholder="Your name"
                value={author} 
                onChange={handleAuthorChange}
            />
            <input
                type="text"
                placeholder="Say something..."
                value={text} 
                onChange={handleTextChange}
            />
            <input type="submit" value="Post" className='button'/>
        </form>
    )
}

export default CommentForm;