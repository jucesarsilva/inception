import { default as App } from '../App'
import { Header, Layout } from '../components'

describe('App component', () => {

  describe('App prop query testing', () => {
    it('renders correctly without pass query prop', () => {
      const wrapper = mount(<App />)
      expect(wrapper).toBeDefined()
    })

    it('renders correctly passing undefined/null on query prop', () => {
      const wrapper = mount(<App />)
      wrapper.setProps({ query: undefined })
      expect(wrapper.state().query).not.toBeDefined()
      wrapper.setProps({ query: null })
      expect(wrapper.state().query).not.toBeDefined()
    })

    it('renders correctly passing value on query prop', () => {
      const value = 'react'
      const wrapper = mount(<App query={value}/>)
      expect(wrapper.props().query).toEqual(value)
    })
  })

  describe('App renders correctly childrens', () => {
    it('render Header', () => {
      const wrapper = mount(<App />)
      expect(wrapper.find(Header)).toBeDefined()
    })

    it('render Layout', () => {
      const wrapper = mount(<App />)
      expect(wrapper.find(Layout)).toBeDefined()
    })
  })

  describe('App handleSearch function ', () => {
    it('simulate search', () => {
      const wrapper = mount(<App />)
      wrapper.instance().handleSearch('react')
      expect(wrapper.state().query).toEqual('react')
    })
  })
})
