import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentList = props => {
  return (
    <>
      <ListGroup>
        {props.comments.map(comment => (
          <SingleComment comment={comment} key={comment._id} setModded={props.setModded} />
        ))}
      </ListGroup>
    </>
  );
};

export default CommentList;
