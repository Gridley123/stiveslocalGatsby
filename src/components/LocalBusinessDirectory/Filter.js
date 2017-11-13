import React, {Component} from 'react';


class Filter extends Component {
  constructor(props, context) {
    super(props, context);
  }


  render() {

    const edges = this.props.data.edges;
    const filters = edges.map((edge) =>
      <div key={edge.node.id}>
        <label>
          <input checked={this.props.visibility_filter[edge.node.id]}
                 type="checkbox" name={edge.node.id} onChange={this.props.toggleCategoryFilter}/>
          {` ${edge.node.name}`}
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
