import React from "react";
import { Link } from "react-router-dom";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faFolderOpen from "@fortawesome/fontawesome-free-solid/faFolderOpen";
import faEdit from "@fortawesome/fontawesome-free-solid/faEdit";
import faTrashAlt from "@fortawesome/fontawesome-free-solid/faTrashAlt";

import AdminOnly from "../containers/AdminOnly";

const TitleRow = ({ title }) => {
  return (
    <li
      className={
        "list-group-item d-flex justify-content-between align-items-center " +
        (title.production_title ? "" : "list-group-item-secondary")
      }
    >
      <Link to={`/titles/${title.id}`}>
        <FontAwesomeIcon icon={faFolderOpen} />
        &nbsp;{title.name}
        &nbsp;{title.production_title ? `(${title.production_title})` : ""}
      </Link>

      <AdminOnly>
        <div className="btn-group btn-group-sm" role="group">
          <Link
            className="btn btn-info"
            role="button"
            to={`/titles/${title.id}/edit`}
          >
            <FontAwesomeIcon icon={faEdit} />
          </Link>
          <button type="button" className="btn btn-danger">
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </div>
      </AdminOnly>
    </li>
  );
};

export default TitleRow;
