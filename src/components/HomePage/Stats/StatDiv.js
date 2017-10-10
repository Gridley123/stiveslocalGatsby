import React from 'react'
import styled from 'styled-components'
import '../../../utils/global-styles';
import CountUp, {startAnimation} from 'react-countup';

const CountUpStyled = styled(CountUp)`
  font-size: 3.25em;
    color: #272727;
    font-weight: 300;
    
`;

const CountUpText = styled.p`
  margin-top: 8px;
  text-transform: uppercase;
  text-align: center;
  font-size: 15px;
   color: #848484;
    display: block;
    letter-spacing: 0.125em;
    line-height: 1.5;
`;


export default class StatDiv extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CountUpStyled
          innerRef={(countup) => {
            this.Countup = countup
          }}
          start={this.props.start}
          end={this.props.end}
          duration={4}
          useEasing={true}
          useGrouping={true}
          separator=""
        />
        <CountUpText>
          {this.props.text}
        </CountUpText>
      </div>
    )
  }
}
