'use strict';

import * as React from 'react/addons';
import * as Icon from 'react-svg-icons';
import { $, Expression, Executor, Dataset } from 'plywood';
import { Filter, Dimension, Measure } from '../../models/index';
// import { SomeComp } from '../some-comp/some-comp';

interface DropIndicatorProps {
}

interface DropIndicatorState {
}

export class DropIndicator extends React.Component<DropIndicatorProps, DropIndicatorState> {

  constructor() {
    super();
    // this.state = {};

  }

  render() {
    return JSX(`
      <div className="drop-indicator">
        <div className="white-out"></div>
        <div className="action">
          <Icon name="split-replace"/>
        </div>
      </div>
    `);
  }
}
