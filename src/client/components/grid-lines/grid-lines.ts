'use strict';

import * as React from 'react/addons';
// import * as Icon from 'react-svg-icons';
import { Stage } from '../../models/index';
// import { SomeComp } from '../some-comp/some-comp';

interface GridLinesProps {
  orientation: string;
  stage: Stage;
  ticks: any[];
  scale: any;
}

interface GridLinesState {
}

export class GridLines extends React.Component<GridLinesProps, GridLinesState> {

  constructor() {
    super();
    // this.state = {};

  }

  render() {
    var { orientation, stage, ticks, scale } = this.props;

    var lines = ticks.map((tick: any) => {
      var lineProps: any = {
        key: String(tick)
      };

      if (orientation === 'horizontal') {
        var y = scale(tick);
        lineProps.x1 = 0;
        lineProps.x2 = stage.width;
        lineProps.y1 = y;
        lineProps.y2 = y;
      } else {
        var x = scale(tick);
        lineProps.x1 = x;
        lineProps.x2 = x;
        lineProps.y1 = 0;
        lineProps.y2 = stage.height;
      }

      return React.createElement('line', lineProps);
    });

    return JSX(`
      <g className={'grid-lines ' + orientation} transform={stage.getTransform()}>
        {lines}
      </g>
    `);
  }
}
