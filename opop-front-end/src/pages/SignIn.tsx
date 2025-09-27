import React, {FC} from "react";
import {Button, Checkbox, Divider, Form, Input, Layout, Typography} from "antd";
import "../index.css";
import {FcGoogle} from "react-icons/fc";
import {FaFacebook} from "react-icons/fa";

const {Content} = Layout;
const {Title, Text, Link} = Typography;
const GoogleIcon = FcGoogle as unknown as FC;
const FacebookIcon = FaFacebook as unknown as FC;

const SignIn: React.FC = () => {
    const onFinish = (values: any) => {
        console.log("Success:", values);
    };

    return (
        <Layout className="signin-layout">
            <Content className="signin-container">
                <div className="signin-box">
                    {/* Logo */}
                    <img
                        src="http://res.cloudinary.com/dzpuwvvil/image/upload/v1758861409/jeccucc2ekk0icbznlek.png"
                        alt="opop-logo"
                        className="signin-logo"
                    />

                    <Title level={3} className="signin-title">
                        Sign in to OpOp
                    </Title>

                    {/* Social Buttons */}
                    <Button block icon={<GoogleIcon/>} className="signin-social">
                        Continue with Google
                    </Button>

                    <Button block icon={<FacebookIcon/>} className="signin-social">
                        Continue with Facebook
                    </Button>

                    <Divider className="signin-divider"/>

                    {/* Form */}
                    <Form name="login" layout="vertical" onFinish={onFinish}>
                        <Form.Item
                            label={<span className="signin-label">Email</span>}
                            name="username"
                            rules={[{required: true, message: "Please input your email!"}]}
                        >
                            <Input placeholder="Email" type="email"/>
                        </Form.Item>
                        <Form.Item
                            label={<span className="signin-label">Password</span>}
                            name="password"
                            rules={[{required: true, message: "Please input your password!"}]}
                        >
                            <Input.Password placeholder="Password"/>
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked">
                            <Checkbox className="signin-checkbox">Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" block className="signin-submit">
                                Continue
                            </Button>
                        </Form.Item>
                    </Form>

                    <Text className="signin-text">
                        Don’t have an account?{" "}
                        <Link href="/signup" className="signin-link">
                            Sign up for OpOp
                        </Link>
                    </Text>
                </div>
            </Content>
        </Layout>
    );
};

export default SignIn;
