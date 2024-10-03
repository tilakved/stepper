import React from 'react';
import {
    Form,
    DatePicker,
    Card,
    Radio,
    Button,
    message
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { resetStep1 } from '../redux/slices/step1.slice';
import { resetStep2 } from '../redux/slices/step2.slice';
import { saveDetails, resetStep3 } from '../redux/slices/step3.slice';
import moment from 'moment';

export const Step3 = ({ current, setCurrent }) => {

    const prices = {
        goldMonthly: 10,
        goldYearly: 100,
        titaniumMonthly: 20,
        titaniumYearly: 200,
    };

    const employeeCount = {
        '0-10': 10,
        '10-20': 20,
        '20-30': 30,
        '30-40': 40,
        '40+': 100
    };

    const planNames = {
        goldMonthly: 'Gold Monthly',
        goldYearly: 'Gold Yearly',
        titaniumMonthly: 'Titanium Monthly',
        titaniumYearly: 'Titanium Yearly',
    }
    const step2Data = useSelector((store) => store.step2);
    const step3Data = useSelector((store) => store.step3);
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    function handleSubmit(values) {
        if (!values) return;
        message.success('Processing complete!');
        setTimeout(() => {
            dispatch(resetStep1())
            dispatch(resetStep2())
            dispatch(resetStep3())
            setCurrent(1)
        }, 10000);
    }

    const calculatePrice = (users = employeeCount[step2Data.totalEmployees], plan = prices[step3Data.plan]) => {
        return users * plan
    };

    const onPlanChange = (e) => {
        dispatch(saveDetails({ ...step3Data, plan: e }))
    };
    console.log(step3Data);

    return (
        <>
            <Form
                form={form}
                onFinish={handleSubmit}
                layout="horizontal"
            >
                <Form.Item label="Select Date" name={'date'}
                    initialValue={step3Data.date ? moment(step3Data.date, 'YYYY/MM/DD') : null}
                    rules={[
                        {
                            required: true,
                            message: 'Please select date to start your plan!',
                        },
                    ]}>
                    <DatePicker
                        format={'YYYY/MM/DD'}
                        onChange={(e) => dispatch(saveDetails({ ...step3Data, date: e ? e.format('YYYY/MM/DD') : null }))} />
                </Form.Item>
                <Form.Item
                    label="Plans"
                    name="plan"
                    rules={[
                        {
                            required: true,
                            message: 'Please select one plan to continue!',
                        },
                    ]}
                >
                    <Radio.Group style={{width:"100%"}}
                        onChange={(e) => {
                            onPlanChange(e.target.value); 
                            form.setFieldsValue({ plan: e.target.value }); 
                        }}
                        value={step3Data.plan}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', width: "100%", marginBottom:"20px"}}>
                            <Card
                                title="Gold Plan Monthly"
                                style={{ width: "100%"}}
                                hoverable
                                onClick={() => {
                                    form.setFieldsValue({ plan: 'goldMonthly' });
                                    onPlanChange('goldMonthly');
                                }}
                            >
                                <p>Monthly:<b> $10</b></p>
                                <Radio value="goldMonthly">Select Monthly Gold Plan</Radio>
                            </Card>

                            <Card
                                title="Gold Plan Yearly"
                                style={{ width: "100%"}}
                                hoverable
                                onClick={() => {
                                    form.setFieldsValue({ plan: 'goldYearly' });
                                    onPlanChange('goldYearly');
                                }}
                            >
                                <p>Yearly:<b> $100</b></p>
                                <Radio value="goldYearly">Select Yearly Gold Plan</Radio>
                            </Card>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', width: "100%", marginBottom:"20px"}}>
                            <Card
                                title="Titanium Plan Monthly"
                                style={{ width: "100%"}}
                                hoverable
                                onClick={() => {
                                    form.setFieldsValue({ plan: 'titaniumMonthly' });
                                    onPlanChange('titaniumMonthly');
                                }}
                            >
                                <p>Monthly:<b> $20</b></p>
                                <Radio value="titaniumMonthly">Select Monthly Titanium Plan</Radio>
                            </Card>

                            <Card
                                title="Titanium Plan Yearly"
                                style={{ width: "100%"}}
                                hoverable
                                onClick={() => {
                                    form.setFieldsValue({ plan: 'titaniumYearly' });
                                    onPlanChange('titaniumYearly');
                                }}
                            >
                                <p>Yearly:<b> $200</b></p>
                                <Radio value="titaniumYearly">Select Yearly Titanium Plan</Radio>
                            </Card>
                        </div>
                    </Radio.Group>
                </Form.Item>

                {step2Data.totalEmployees && step3Data.plan &&
                    <Form.Item>
                        Summary:
                        <p><b>Total Employees Count :</b> {step2Data.totalEmployees}</p>
                        <p><b>Selected Plan :</b> {planNames[step3Data.plan]}</p>
                        <p><b>Total cost :</b> {calculatePrice()}</p>
                    </Form.Item>}
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