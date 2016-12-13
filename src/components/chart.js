import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const Chart = (props) => {
  const { data, color } = props;

  function avg(data) {
    return _.round(_.sum(data) / data.length);
  }

  return(
    <div>
      <Sparklines width={100} height={20} data= {data} >
          <SparklinesLine color={color} />
          <SparklinesReferenceLine type={'mean'}/>
      </Sparklines>
      <div>{avg(data)}</div>
    </div>
  )
}

export default Chart