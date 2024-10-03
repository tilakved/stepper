import React from 'react';
import {
  Form,
  Input,
  InputNumber,
  Select,
  Button
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { saveDetails } from '../redux/slices/step1.slice';

export const Step1 = ({ current, setCurrent }) => {
  const indianStates = ['Maharashtra', 'Karnataka', 'Tamil Nadu', 'Gujarat', 'Rajasthan'];
  const step1Data = useSelector((store) => store.step1);
  const dispatch = useDispatch()
  const [form] = Form.useForm();

  function handleSubmit(values) {
    // form.submit(
    if (!values) return;
    setCurrent(current + 1)
  }


  return (
    <>
      <Form form={form}
        onFinish={handleSubmit}
        layout="horizontal">
        <Form.Item label="First Name"
          name={'firstName'}
          initialValue={step1Data.firstName}
          rules={[
            {
              required: true,
              message: 'Please write your First name!',
            },
          ]}>
          <Input placeholder='Enter your First Name'  onChange={(e) => dispatch(saveDetails({ ...step1Data, firstName: e.target.value }))} />
        </Form.Item>
        <Form.Item label="Last Name"
          name={'lastName'}
          initialValue={step1Data.lastName}
          rules={[
            {
              required: true,
              message: 'Please write your Last name!',
            },
          ]}>
          <Input placeholder='Enter your Last Name'  onChange={(e) => dispatch(saveDetails({ ...step1Data, lastName: e.target.value }))} />
        </Form.Item>
        <Form.Item label="Email"
          name={'email'}
          initialValue={step1Data.email}
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}>
          <Input placeholder='Enter your Email'  onChange={(e) => dispatch(saveDetails({ ...step1Data, email: e.target.value }))} />
        </Form.Item>
        <Form.Item label="Company Name"
          name={'companyName'}
          initialValue={step1Data.companyName}
          rules={[
            {
              required: true,
              message: 'Please input your Company name!',
            },
          ]}>
          <Input placeholder='Enter Company Name'  onChange={(e) => dispatch(saveDetails({ ...step1Data, companyName: e.target.value }))} />
        </Form.Item>
        <Form.Item label="Company Website"
          name={'companyWebsite'}
          initialValue={step1Data.companyWebsite}
          rules={[
            {
              required: true,
              message: 'Please input your Company Website!',
            },
          ]}>
          <Input placeholder='Enter Company Website'  onChange={(e) => dispatch(saveDetails({ ...step1Data, companyWebsite: e.target.value }))} />
        </Form.Item>
        <Form.Item label="State"
          name={'state'}
          initialValue={step1Data.state} 
          rules={[
            {
              required: true,
              message: 'Please select your state!',
            },
          ]}>
          <Select placeholder='Select State'
            onChange={(e) => dispatch(saveDetails({ ...step1Data, state: e }))}>
            {indianStates.map((indianState) => { return <Select.Option key={indianState} value={indianState}>{indianState}</Select.Option> })}
          </Select>
        </Form.Item>
        <Form.Item label="ZipCode"
          name={'zipCode'}
          initialValue={step1Data.zipCode}
          rules={[
            {
              required: true,
              message: 'Please select your zip code!',
            },
            {
              type: 'number',
              min: 100000,
              max: 999999,
              message: 'Zip code must be a 6-digit number!',
            },
          ]}>
          <InputNumber 
            placeholder='XXXXXX'
            onChange={(e) => dispatch(saveDetails({ ...step1Data, zipCode: e }))}
            precision={0}
            min={0} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType='submit'>
            Next
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

