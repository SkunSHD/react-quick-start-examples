import React from "react";
import { Link } from  "react-router";

import Header from "./Header";
import Footer from "./Layout/Footer";
import Nav from "./Layout/Nav";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {title: "Jack of Spades"}
  }

  render() {
    return(
      <div>
        <Nav />
        
        <div class="container">
          {/* start */}
          <Header title={this.state.title} />
          {this.props.children}
          <Link to="about" class="btn btn-success" activeClassName="test">About</Link>
          <Link to="archives" class="btn btn-default">Archives</Link>
          {/* end */}

          <div class="col-lg-12">
            <h3>Example body text</h3>
            <p>Nullam quis risus eget <a href="#">urna mollis ornare</a> vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
            <a href="#" class="btn btn-default btn-sm">More...</a>

            <h3>Example body text</h3>
            <p>Nullam quis risus eget <a href="#">urna mollis ornare</a> vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
            <a href="#" class="btn btn-default btn-sm">More...</a>

            <h3>Example body text</h3>
            <p>Nullam quis risus eget <a href="#">urna mollis ornare</a> vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
            <a href="#" class="btn btn-default btn-sm">More...</a>
          </div>

        </div>
      </div>
    );
  }
}