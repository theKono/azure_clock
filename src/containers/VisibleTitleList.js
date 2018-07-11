import React from "react";
import { connect } from "react-redux";

import TitleList from "../presentations/TitleList";

import loader from "./ajax-loader.gif";

const mapStateToProps = state => {
  return { titleList: state.titleList };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTitleList: () => {
      dispatch({ type: "FETCH_TITLE_LIST" });
    }
  };
};

class VisibleTitleList extends React.Component {
  componentDidMount() {
    this.props.fetchTitleList();
  }

  reject(titles) {
    // \b sometimes happens when input method is used
    const query = this.props.titleFilter.trim().replace("\b", "");

    if (!query) {
      return titles;
    }

    return titles.filter(
      title =>
        (title.name || "").search(query) > -1 ||
        (title.production_title || "").search(query) > -1
    );
  }

  sort(titles) {
    let copied = titles.slice();

    copied.sort((t1, t2) => {
      const pt1 = t1.production_title || "";
      const pt2 = t2.production_title || "";
      return pt1 < pt2 ? -1 : pt1 > pt2 ? 1 : 0;
    });

    return copied;
  }

  render() {
    if (!this.props.titleList) {
      return (
        <p className="text-center">
          <img alt="loading..." src={loader} />
        </p>
      );
    }

    return <TitleList titles={this.sort(this.reject(this.props.titleList))} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VisibleTitleList);
