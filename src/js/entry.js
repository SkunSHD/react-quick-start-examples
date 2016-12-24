import React from 'react'
import ReactDOM from 'react-dom'

import Clock from './components/Clock'
import Toggle from './components/Toggle'
import LoginControl from './components/LoginControl'
// Keys used within arrays should be unique among their siblings. However they don't need to be globally unique
import { Blog, posts } from './components/Blog'
import CoolForm from './components/CoolForm'
import SelectFlavor from './components/SelectFlavor'
import UncontrolledForm from './components/UncontrolledForm'


ReactDOM.render(
  <div>
    <h2>LoginControl</h2>
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
    <Clock />
    <hr />
    <Toggle />
    <hr />
    <Blog posts={posts} />
  </div>,
  document.getElementById('root')
);