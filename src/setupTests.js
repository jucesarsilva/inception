import React from "react"
import { shallow, render, mount } from 'enzyme'
import 'jest-enzyme'
import 'regenerator-runtime/runtime'
import 'jest-canvas-mock'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'

configure({ adapter: new Adapter() })

// Fix Material-UI components issues with Jest.
React.useLayoutEffect = React.useEffect
// Optimize use of imports
global.React = React
global.shallow = shallow
global.render = render
global.mount = mount
global.sinon = sinon
