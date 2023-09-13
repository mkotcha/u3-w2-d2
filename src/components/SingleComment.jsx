import { Button, ListGroup } from "react-bootstrap";

const SingleComment = ({ comment, setModded }) => {
  const deleteComment = async (comment, setModded) => {
    const url = "https://striveschool-api.herokuapp.com/api/comments/";
    const options = {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTIyMGMwMzRmZjAwMTQwM2Y0Y2QiLCJpYXQiOjE2OTQwODk3MTgsImV4cCI6MTY5NTI5OTMxOH0.yy5_J1EHIdfBE0x6pZgPJ2RrplUDZE2vU6TvoY2MdDM",
      },
    };

    try {
      const response = await fetch(url + comment._id, options);
      if (response.ok) {
        setModded(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ListGroup.Item className="d-flex align-items-center">
      <span className="me-auto">{comment.comment}</span>
      <Button variant="danger" size="sm" onClick={() => deleteComment(comment, setModded)}>
        <i className="bi bi-trash"></i>
      </Button>
    </ListGroup.Item>
  );
};

export default SingleComment;
