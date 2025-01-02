import React, { useState, useEffect } from "react";
import "../styles/Comments.css";

const Comments = ({ projectId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    // Simula obtener comentarios para el proyecto actual
    fetchComments(projectId);
  }, [projectId]);

  const fetchComments = (projectId) => {
    // Simulación de comentarios iniciales por proyecto
    const exampleComments = [
      { id: 1, user: "Juan", text: "Gran trabajo en el proyecto.", projectId: 1 },
      { id: 2, user: "Ana", text: "Necesitamos mejorar el diseño.", projectId: 2 },
    ];

    setComments(exampleComments.filter((c) => c.projectId === projectId));
  };

  const addComment = () => {
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now(),
      user: "Usuario actual", // Cambiar con datos reales de usuario
      text: newComment,
      projectId,
    };

    setComments((prev) => [...prev, comment]);
    setNewComment("");
  };

  return (
    <div className="comments-section">
      <h4>Comentarios</h4>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.user}:</strong> {comment.text}
          </li>
        ))}
      </ul>
      <div className="comment-input">
        <input
          type="text"
          placeholder="Escribe un comentario..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={addComment}>Enviar</button>
      </div>
    </div>
  );
};

export default Comments;
