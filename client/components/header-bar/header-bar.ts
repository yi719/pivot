'use strict';

import * as React from 'react/addons';
import * as Icon from 'react-svg-icons';
import { $, Expression, Datum, Dataset } from 'plywood';
import { Essence } from "../../models/index";

interface HeaderBarProps {
  essence: Essence;
  onNavClick: Function;
}

interface HeaderBarState {
}

export class HeaderBar extends React.Component<HeaderBarProps, HeaderBarState> {

  constructor() {
    super();
    //this.state = {}
  }

  render() {
    var { essence, onNavClick } = this.props;

    return JSX(`
      <header className="header-bar">
        <div className="burger-bar" onClick={onNavClick}>
          <Icon className="menu" name="menu" color="white"/>
          <div className="dataset-title">{essence.dataSource.title}</div>
        </div>
        <div className="right-bar">
          <a className="icon-button" href="https://groups.google.com/forum/#!forum/imply-user-group" target="_blank">
            <Icon className="help-icon" name="help" color="white"/>
          </a>
        </div>
      </header>
    `);
  }
}
