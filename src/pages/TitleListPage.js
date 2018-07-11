import React from "react";
import { Link } from "react-router-dom";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faBook from "@fortawesome/fontawesome-free-solid/faBook";

import TitleFilter from "../presentations/TitleFilter";
import VisibleTitleList from "../containers/VisibleTitleList";
import AdminOnly from "../containers/AdminOnly";

class TitleListPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { titleFilter: "" };
    this.onTitleFilterChange = this.onTitleFilterChange.bind(this);
  }

  onTitleFilterChange(newVal) {
    this.setState({ titleFilter: newVal.trim() });
  }

  render() {
    return (
      <div className="container" style={{ marginTop: "1rem" }}>
        <div className="form-row">
          <div className="col-6">
            <TitleFilter onTitleFilterChange={this.onTitleFilterChange} />
          </div>
          <div className="col-6">
            <AdminOnly>
              <Link className="btn btn-success float-right" to="/titles/new">
                <FontAwesomeIcon icon={faBook} /> New
              </Link>
            </AdminOnly>
          </div>
        </div>

        <hr />

        <VisibleTitleList titleFilter={this.state.titleFilter} />
      </div>
    );
  }
}

export default TitleListPage;
