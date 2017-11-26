import React, {Component} from 'react';


class Filter extends Component {
  constructor(props, context) {
    super(props, context);
  }


  render() {

    const categories = this.props.data.edges[0].node.categories;
    const filters = categories.map((category) =>
      <div key={category}>
        <label>
          <input checked={this.props.visibility_filter[category]}
                 type="checkbox" name={category} onChange={this.props.toggleCategoryFilter}/>
          {` ${category}`}
        </label>
      </div>
    );
    return (
      <form>
        <div style={{marginBottom: '20px'}}>
        <label style={{marginRight: '20px'}}>
        <input checked={this.props.allSet}
               type="checkbox" name="selectAll" onChange={this.props.selectAll}/>
          <strong> Select All</strong>
        </label>
        <label>
          <input checked={this.props.noneSet}
                 type="checkbox" name="deselectAll" onChange={this.props.deselectAll}/>
          <strong> Deselect All</strong>
        </label>
        </div>
        {filters}
      </form>
    );
  }
}


export default Filter;
