import React from "react";

class ProdcutsBySubType extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
    return (
      <div>
          {console.log(this.props.match.params.type)}
      </div>
    );
  }
}

export default ProdcutsBySubType;
