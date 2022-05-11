import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const MovieModal = ({ modal, setModal, videoKey }) => {
  const trailer =
    videoKey &&
    videoKey.results.find((item) => item.type.includes("Trailer")).key;

  console.log("trailer", trailer);
  console.log("videoKey", videoKey.results);

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
          src={`https://www.youtube.com/embed/${trailer}`}
        />
      </div>
    </div>
  );
};

export default MovieModal;
