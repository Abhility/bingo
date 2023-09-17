import { Button as AntButton } from 'antd';

function Button({label, type }) {
  return (
    <AntButton type={type} block>
      {label}
    </AntButton>
  );
}

export default Button;