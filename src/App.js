import React, { useState } from 'react';
import {  Steps, theme } from 'antd';
import { Step1 } from './components/Step1';
import { Step2 } from './components/Step2';
import { Step3 } from './components/Step3';

const App = () => {
  const { token } = theme.useToken();

  const [current, setCurrent] = useState(0);
 
  const steps = [
    {
      title: 'First',
      content: <Step1 current={current} setCurrent={setCurrent}/>,
    },
    {
      title: 'Second',
      content: <Step2 current={current} setCurrent={setCurrent}/>,
    },
    {
      title: 'Last',
      content: <Step3 current={current} setCurrent={setCurrent}/>,
    },
  ];

  const contentStyle = {
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
    marginBottom: 16,
    padding: '20px'
  };

  return (
    <div style={{ padding: '120px' }}>
      <Steps current={current} items={steps} />
      <div style={contentStyle}>{steps[current].content}</div>
    </div>
  );
};
export default App;