'use strict';

import { List } from 'immutable';
import * as React from 'react/addons';
import * as Icon from 'react-svg-icons';
import { $, Expression, Executor, Dataset } from 'plywood';
// import { ... } from '../../config/constants';
import { Stage, Clicker, Essence, DataSource, Filter, Dimension, Measure, TimePreset } from '../../models/index';
// import { SomeComp } from '../some-comp/some-comp';

function stopEvent(e: MouseEvent): void {
  e.stopPropagation();
}

interface HighlightControlsProps {
  clicker: Clicker;
  onClose?: Function;
}

interface HighlightControlsState {
}

export class HighlightControls extends React.Component<HighlightControlsProps, HighlightControlsState> {

  constructor() {
    super();
    // this.state = {};

  }

  onAccept() {
    var { onClose, clicker } = this.props;
    clicker.acceptHighlight();
    if (onClose) onClose();
  }

  onCancel() {
    var { onClose, clicker } = this.props;
    clicker.dropHighlight();
    if (onClose) onClose();
  }

  render() {
    return JSX(`
      <div className="highlight-controls" onMouseDown={stopEvent}>
        <div className="button accept" onClick={this.onAccept.bind(this)} >
          <Icon name="check"/>
        </div>
        <div className="button cancel" onClick={this.onCancel.bind(this)}>
          <Icon name="x"/>
        </div>
      </div>
    `);
  }
}