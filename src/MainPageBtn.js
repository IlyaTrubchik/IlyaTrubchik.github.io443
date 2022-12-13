import React from "react";
import ReactDOM from "react-dom";

import { FormattedMessage } from "react-intl";

class Back_button extends React.Component {
    onclick () {
      window.location.assign('http://localhost:3000/');
      sessionStorage.setItem("currx",sessionStorage.getItem("Ident"));
    }

    render() {
      return (<button  onClick={(e) => this.onclick(e)}><a href = "#"><FormattedMessage id="HomeBtn">Главная страница</FormattedMessage></a> </button>);
    }
  }
export default Back_button;
