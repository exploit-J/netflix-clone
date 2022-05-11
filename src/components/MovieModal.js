import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const MovieModal = ({ modal, setModal, setVideoKey }) => {
  return (
    <div
      className={modal ? "modal-background open" : "modal-background close"}
      onClick={() => setModal(false)}
    >
      <div className="modal-container">
        <div className="controller">
          <button onClick={() => setModal(false)}>
            <FontAwesomeIcon icon={faX} />
          </button>
        </div>
        <iframe
          className="iframe"
          src={`https://www.youtube.com/embed/${setVideoKey}`}
        />
      </div>
    </div>
  );
};

export default MovieModal;