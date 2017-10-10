import React from 'react';
import styled from 'styled-components'
import 'whatwg-fetch';
import {FaArrowDown, FaArrowUp} from 'react-icons/lib/fa'
import moment from 'moment'

const rssURL = encodeURI("https://www.tidetimes.co.uk/rss/st-ives-tide-times?nocache=true");
const url = encodeURI('https://api.rss2json.com/v1/api.json?rss_url=') + rssURL;

const TideSpan = styled.span`
padding-left: 10px;
display: inline-block;
`;

function tideDataObj(data) {
  const dateRegEx = /for\s(.+)/;
  const dateString = data.items[0].title.match(dateRegEx)[1];
  const dateObj = moment(dateString);
  const date = dateObj.format('ddd Do MMM YYYY');
  const content = Object.assign(data.items[0].content);

  // noinspection LightningSingletonTags
  let tideDescription = content.split("<br>");
  const test = str => str.includes('High') || str.includes('Low');
  const filteredTides = tideDescription.filter(test);


  const tides = filteredTides.map(tide => {
      const tideTypeFull = tide.split(':', 1)[0];
      const tideType = tideTypeFull.split(" ")[0];

      const tideSplit = tide.split(' ');
      const tideTime = tideSplit[2];
      const tideHeight = tideSplit[3];
      return { tideType, tideTime, tideHeight }
    }
  );

  return {
    date,
    tides
  }
}

const TideItem = (props) => {
  let arrow;
  if (props.tideType === 'High') {
    arrow = <FaArrowUp/>
  }
  if (props.tideType === 'Low') {
    arrow = <FaArrowDown/>
  }

  return (
    <TideSpan>
      {arrow}
      {' ' + props.tideTime}
      {' ' + props.tideHeight + ' '}
    </TideSpan>);

};


export default class TideWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tideData: null };
  }

  componentDidMount() {
    fetch(url, {
      cache: 'no-cache',
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(response => response.json())
      .then(json => tideDataObj(json))
      .then(tideDataObj => this.setState({ tideData: tideDataObj }))
  }

  render() {
    if (this.state.tideData) {
      const { tideData } = this.state;
      const tideItems = tideData.tides.map(tide =>
        <TideItem key={tide.tideTime} tideType={tide.tideType} tideHeight={tide.tideHeight} tideTime={tide.tideTime}/>
      );
      return (
        <span id="todaysTideData" style={{ paddingLeft: '10px' }}>
        <span>Tides for {tideData.date}: </span>
          {tideItems}
        </span>
      )
    } else {
      return null;
    }
  }
}




