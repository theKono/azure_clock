import React from "react";

class TitleFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.props.onTitleFilterChange(event.target.value);
  }

  render() {
    return (
      <input
        type="text"
        className="form-control"
        placeholder="Search titles..."
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}

export default TitleFilter;
