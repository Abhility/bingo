import { Input, Layout } from "antd";

function InputBox({ label, placeholder, icon }) {
    return (
        <Layout>
            <label>{label}</label>
            <Input
                placeholder={placeholder}
                size="large"
                prefix={icon}
            />
        </Layout>
    );
}

export default InputBox;