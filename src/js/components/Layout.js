import React from "react";

import Clock from './Clock'
import Toggle from './Toggle'
import LoginControl from './LoginControl'
// Keys used within arrays should be unique among their siblings. However they don't need to be globally unique
import { Blog, posts } from './Blog'
import CoolForm from './CoolForm'
import SelectFlavor from './SelectFlavor'
import UncontrolledForm from './UncontrolledForm'
import Calculator from './Calculator'

export default class Layout extends React.Component {

  render() {
    return(
       <div>
        <Clock />
        <h2>LoginControl</h2>
        <hr />

        <Calculator />
        <hr />

        <LoginControl />
        <h2>Controlled component</h2>
        <hr />

        <CoolForm />
        <h2>Uncontrolled component</h2>
        <hr />

        <UncontrolledForm />
        <hr />

        <SelectFlavor />
        <hr />

        <Toggle />
        <hr />
        <Blog posts={posts} />
      </div>
    );
  }
}