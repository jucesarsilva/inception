import { Home } from '../views'
import { Card, CardHeader, CardFooter, FilterOrder, Loading, Paginator, Toast } from '../components'

describe('Home component', () => {

  describe('Home prop query testing', () => {
    it('renders correctly without pass query prop', () => {
      const wrapper = mount(<Home />)
      expect(wrapper).toBeDefined()
    })

    it('renders correctly passing undefined/null on query prop', () => {
      const wrapper = mount(<Home />)
      wrapper.setProps({ query: undefined })
      expect(wrapper.state().query).not.toBeDefined()
      wrapper.setProps({ query: null })
      expect(wrapper.state().query).not.toBeDefined()
    })

    it('renders correctly passing value on query prop', () => {
      const value = 'react'
      const wrapper = mount(<Home query={value}/>)
      expect(wrapper.props().query).toEqual(value)
    })
  })

  describe('Home requester testing', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.instance().requester).toBeDefined()
  })

  describe('Home renders correctly childrens', () => {
    it('render Card', () => {
      const wrapper = mount(<Home />)
      expect(wrapper.find(Card)).toBeDefined()
    })

    it('render CardHeader', () => {
      const wrapper = mount(<Home />)
      expect(wrapper.find(CardHeader)).toBeDefined()
    })

    it('render CardFooter', () => {
      const wrapper = mount(<Home />)
      expect(wrapper.find(CardFooter)).toBeDefined()
    })

    it('render FilterOrder', () => {
      const wrapper = mount(<Home />)
      expect(wrapper.find(FilterOrder)).toBeDefined()
    })

    it('render Loading', () => {
      const wrapper = mount(<Home />)
      expect(wrapper.find(Loading)).toBeDefined()
    })

    it('render Paginator', () => {
      const wrapper = mount(<Home />)
      expect(wrapper.find(Paginator)).toBeDefined()
    })

    it('render Toast', () => {
      const wrapper = mount(<Home />)
      expect(wrapper.find(Toast)).toBeDefined()
    })
  })

  describe('Home testing functions calls', () => {
    it('most have componentDidMount called', () => {
      jest.spyOn(Home.prototype, 'componentDidMount')
      mount(<Home />)
      expect(Home.prototype.componentDidMount).toHaveBeenCalledTimes(1)
    })

    it('when componentDidMount called most call getRepositories', () => {
      const wrapper = mount(<Home />)
      jest.spyOn(wrapper.instance(), 'getRepositories')
      wrapper.instance().componentDidMount()
      expect(wrapper.instance().getRepositories).toHaveBeenCalledTimes(1)
    })

    it('when getRepositories called', () => {
      const wrapper = mount(<Home />)
      jest.spyOn(wrapper.instance().requester, 'getRepositories')
      wrapper.instance().getRepositories()
      expect(wrapper.instance().state.fetching).toEqual(true)
      expect(wrapper.instance().requester.getRepositories).toHaveBeenCalledTimes(1)
    })

    it('when handleOrder called', () => {
      const wrapper = mount(<Home />)
      jest.spyOn(wrapper.instance(), 'handleOrder')
      jest.spyOn(wrapper.instance(), 'getRepositories')
      wrapper.instance().handleOrder({
        label: 'Seguidores',
        sort: 'followers',
        order: 'asc',
      })
      expect(wrapper.instance().state.sort).toEqual('followers')
      expect(wrapper.instance().getRepositories).toHaveBeenCalledTimes(1)
    })

    it('when handlePageChange called', () => {
      const wrapper = mount(<Home />)
      jest.spyOn(wrapper.instance(), 'handlePageChange')
      jest.spyOn(wrapper.instance(), 'getRepositories')
      wrapper.instance().handlePageChange(2)
      expect(wrapper.instance().state.page).toEqual(2)
      expect(wrapper.instance().getRepositories).toHaveBeenCalledTimes(1)
    })

    it('when handleTostClose called', () => {
      const wrapper = mount(<Home />)
      wrapper.instance().handleTostClose()
      expect(wrapper.instance().state.error).toEqual(false)
    })
  })

  describe('Home testing layout flow', () => {
    it('when error called most show Toast', () => {
      const errorMessage = 'Toast error'
      const wrapper = mount(<Home />)
      wrapper.setState({ error: true, errorMessage })
      expect(wrapper.find(Toast).text()).toEqual(errorMessage)
    })

    it('when no results', () => {
      const wrapper = mount(<Home />)
      wrapper.setState({ fetching: false })
      expect(wrapper.find('[data-test-id="no-results"]').text()).toEqual('Nenhum resultado.')
      expect(wrapper.find('[data-test-id="total"]').text()).toEqual('Total:0')
    })

    it('when results', () => {
      const repositories = [{
        full_name: 'react teste',
        description: 'react description',
        html_url: 'https://github.com/user/react',
        stargazers_count: 0,
        updated_at: new Date().toISOString(),
        language: 'javascript',
        languages_url: 'https://github.com/user/react/languages',
        owner: {
          avatar_url: undefined,
          html_url: 'https://github.com/user',
        },
        license: {
          name: 'Mit'
        }
      }]
      const wrapper = mount(<Home />)
      wrapper.setState({ fetching: false, total: 1, pageCount: 1, repositories: repositories })
      expect(wrapper.find('[data-test-id="description-0"]').text()).toEqual('react description')
      expect(wrapper.find('[data-test-id="paginator"]').text()).toEqual('1')
    })
  })
})
