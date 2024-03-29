import React, { Component } from 'react'
import {
    Form,
    Input,
    Tooltip,
    Button,
    AutoComplete,
    Icon,
    Radio,
  } from 'antd';
  import Navbar from "../components/Navbar";
  import { signup } from "./../redux/actions/auth"
  import { connect } from 'react-redux'
  import { AVAILABLE_JOBS,RECRUITER_HOME,SIGNIN } from './../constants/Routes';

  const AutoCompleteOption = AutoComplete.Option;
  
  class SignupForm extends React.Component {
    state = { 
      loading: false
    }

    state = {
      confirmDirty: false,
      autoCompleteResult: [],
      nameFieldText: "Name",
      isVisible:false
    };
  
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          this.setState({
            loading: true
          })
          this.props.signup(values).then((data)=>{
            this.setState({
              loading: false
            })
              if(data.role=="0"){
                  this.props.history.push(AVAILABLE_JOBS);
              }
              else if(data.role=="1"){
                this.props.history.push(RECRUITER_HOME);
              }
        
          }).catch(err=>{
            this.setState({
              loading: false
            })
          })
        }
      });
    };
  
    handleConfirmBlur = e => {
      const { value } = e.target;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };
  
    compareToFirstPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    };
  
    validateToNextPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    };
  
    handleWebsiteChange = value => {
      let autoCompleteResult;
      if (!value) {
        autoCompleteResult = [];
      } else {
        autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
      }
      this.setState({ autoCompleteResult });
    };

    recruiterClicked=()=>{
      this.state.nameFieldText="Company Name";
      this.state.isVisible=true
    }
    candidateClicked=()=>{
      this.state.nameFieldText="Your  Name"
      this.state.isVisible=true
    }
  
    render() {
      const { loading } = this.state;

      document.title = "Sign up";

      const { getFieldDecorator } = this.props.form;
      const { autoCompleteResult } = this.state;
  
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };
   
      const websiteOptions = autoCompleteResult.map(website => (
        <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
      ));

    
  
      return (
        <div >
          
        <Navbar text="Sign in" to="/signin"/>
        <h3 align="center"><span  className="h2WrapperSignup">Sign up for a New Account</span></h3>

        <Form {...formItemLayout} onSubmit={this.handleSubmit} className="wrapperFormSignup">



        <Form.Item label="Your Profile">
            {getFieldDecorator('role',{
                rules:[{required: true,message: "Please select your role!"}]
            })(
                <Radio.Group>
                <Radio.Button value="0" onClick={this.candidateClicked}>I am a Candidate</Radio.Button>
                <Radio.Button value="1" onClick={this.recruiterClicked}>I am a Recruiter</Radio.Button>
                </Radio.Group>,
            )}
          </Form.Item>


          <Form.Item style={{display: this.state.isVisible ? 'block' : 'none' }}
            label={
              <span>
                { this.state.nameFieldText}&nbsp;
                <Tooltip title="Please write official name seperated with spaces">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            }
          >
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Please input your name!', whitespace: true }],
            })(<Input />)}
          </Form.Item>

          <Form.Item label="E-Mail">
            {getFieldDecorator('email', { //check
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ],
            })(<Input />)}
          </Form.Item>     
              {/* kdsfkjdsf *********************************************************************************************************/}

          <Form.Item label="Password" hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                validator: this.validateToNextPassword,
              },
              {
                min:6,
                message:"Password should be minimum of 6 character"
            }
            ],
          })(<Input.Password />)}
        </Form.Item>
        <Form.Item label="Confirm Password" hasFeedback>
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: 'Please confirm your password!',
              },
              {
                validator: this.compareToFirstPassword,
              },
            ],
          })(<Input.Password onBlur={this.handleConfirmBlur} />)}
        </Form.Item>

       

          

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit"  loading={loading}>
              Sign up 
            </Button>
          </Form.Item>
        </Form>
       
          
       </div>
            
      );
    }
  }
  

  const mapStateToProps = ({auth}) => {
    return ({
      userdetails: auth.userdetails
    })
   }
   


SignupForm = connect(mapStateToProps, {signup})(SignupForm);



export const Signup = Form.create({ name: 'normal_signup' })(SignupForm);

  