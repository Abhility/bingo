import { Row } from "antd";
import { UserOutlined } from '@ant-design/icons';
import InputBox from "../components/InputBox";
import Avatars from "../components/Avatars";
import Button from "../components/Button";
import Title from "../components/Title";

function JoinScreen() {
    return (
        <Row>
            <Title content="Start playing Bingo" />
            <InputBox
                label="Your Name"
                placeholder="Enter your name"
                icon={<UserOutlined />} />
            <Avatars />
            <Button
               label="Create Game"
               type="primary"
            />
            <Button
               label="Join Game"
               type="primary"
            />
        </Row>
    );
}

export default JoinScreen;