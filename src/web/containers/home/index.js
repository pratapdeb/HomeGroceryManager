import React from 'react'
import { withRouter } from 'react-router-dom'
import { Layout } from 'antd'
import { connect } from 'react-redux'
import './index.css'
import logo from '../../../assets/logo.svg'

const { Header, Content, Footer } = Layout


class Home extends React.Component {
    render () {
      return (
        <Layout className='layout'>
          <Header className='header'><div className='logo' /><img src={logo} alt='Logo' /></Header>
          <Content className='content'>
          </Content>
          <Footer className='footer' style={{ textAlign: 'center' }}> ©2021  Finding AI Falcon</Footer>
        </Layout>
      )
    }
}

const mapStateToProps = () => {
  return {
    }
}

const mapDispatchToProps = {
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
