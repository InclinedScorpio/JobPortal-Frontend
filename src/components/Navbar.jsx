import React, { Component } from 'react'
import { Typography, Layout } from 'antd';
import { Link } from 'react-router-dom'
import {signout} from "../redux/actions/auth";
import { Redirect } from 'react-router';
import { connect } from 'react-redux'


const { Title } = Typography;

class Navbar extends React.Component {
   
  state = {
    current: 'mail',
    redirect:false,
    path:"/signin"
  };


  handleClick = (e,to) => {
      if(to=="/signout"){
      e.preventDefault();
      this.props.signout();
      this.setState({
        redirect:true
      })
    }else{
        return;
    }
  };



  render() {
    if (this.state.redirect) {
        return <Redirect to='/signin'/>;
      }
    
    const { text , to, history } = this.props;

    
      if(this.props.userData.auth.userdetails.role=="0")
      {
          this.state.path="/candidate/jobs";
      }else if(this.props.userData.auth.userdetails.role=="1")
      {
        this.state.path="/recruiter";
      }else if(this.props.userData.auth.userdetails.role=="2")
      {
        this.state.path="/admin";
      }
    


    return (
    //   <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
      
<nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <Link to={this.state.path}><img height="60" width="70"  src="https://cdn.iconscout.com/icon/premium/png-256-thumb/online-job-portal-1546095-1310728.png"/></Link> 
      </div>
        <ul class=" navbar-right fixright nav"><h1><i>
          <li><Link  onClick={(e) => this.handleClick(e,to)} to={to}>{text}</Link></li>
          </i></h1></ul>

    </div>
  </nav>

   
    )
}

}

const mapStateToProps=(store)=>{
  return({
      userData:store
  })
}  

export default connect(mapStateToProps, { signout })(Navbar);






// <Layout
// style={{
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '5px 10px'
// }}
// >

//     <Title level={2}key="mail">
//     <Link to={this.state.path}>Job portal</Link> 
//     </Title>
//     <Title level={4} key="mail">
//     <Link onClick={(e) => this.handleClick(e,to)} to={to}>{text}</Link>
//     </Title>
// </Layout>