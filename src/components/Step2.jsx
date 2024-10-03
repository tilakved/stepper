import React from 'react';
import {
    Checkbox,
    Select,
    Form,
    Radio,
    Button
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { saveDetails } from '../redux/slices/step2.slice';

export const Step2 = ({ current, setCurrent }) => {
    const companyOptions = ['Frontend', 'Backend', 'AI/ML', 'Full Stack'];
    const employees = ['0-10', '10-20', '20-30', '30-40', '40+'];
    const step2Data = useSelector((store) => store.step2);
    const dispatch = useDispatch()

    const [form] = Form.useForm();

    function handleSubmit(values) {
        // form.submit(
        if (!values) return;
        setCurrent(current + 1)
    }
    return (
        <>
            <Form
                form={form}
                onFinish={handleSubmit}
                layout="horizontal"
            >
                <Form.Item label="Company Fields"
                    name={'companyFields'}
                    rules={[
                        {
                            required: true,
                            message: 'Please atleast select one field!',
                        },
                    ]}
                    initialValue={step2Data.companyFields} >
                    <Checkbox.Group options={companyOptions} onChange={(checkedValues) => dispatch(saveDetails({ ...step2Data, companyFields: checkedValues }))} />
                </Form.Item>
                <Form.Item label="Total Employees"
                    name={'totalEmployees'}
                    rules={[
                        {
                            required: true,
                            message: 'Please select your number of employees!',
                        },
                    ]}
                    initialValue={step2Data.totalEmployees}>
                    <Select onChange={(e) => dispatch(saveDetails({ ...step2Data, totalEmployees: e }))} >
                        {employees.map((employee) => { return <Select.Option key={employee} value={employee}>{employee}</Select.Option> })}
                    </Select>
                </Form.Item>
                <Form.Item label="Does the company have a WFH policy?"
                    name={'wfhPolicy'}
                    rules={[
                        {
                            required: true,
                            message: 'Please select your answer!',
                        },
                    ]}
                    initialValue={step2Data.wfhPolicy}>
                    <Radio.Group onChange={(e) => dispatch(saveDetails({ ...step2Data, wfhPolicy: e.target.value }))} >
                        <Radio value={true}> Yes  </Radio>
                        <Radio value={false}> No </Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType='submit'>
                        Next
                    </Button>
                    <Button
                        style={{
                            margin: '0 8px',
                        }}
                        onClick={() => setCurrent(current - 1)}
                    >
                        Previous
                    </Button>
                </Form.Item>
            </Form>

        </>
    )
}