import React from "react";

import TitleRow from "./TitleRow";

const TitleList = props => {
  const titleRows = props.titles.map(t => {
    return <TitleRow title={t} key={t.id} />;
  });

  return <ul className="list-group">{titleRows}</ul>;
};

export default TitleList;
