import { Col, Row, Button, Form, Input, Checkbox } from "antd";
import Image from 'next/image'
import 'antd/dist/antd.css';
import styles from '../styles/login.module.css';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import Link from "next/dist/client/link";
import imgMain from '../public/container2.png'
import { BsFillInboxesFill } from 'react-icons/bs';


export default function LogIn() {


    return (

        <>


            <Row className={styles.asd}>

                <Col span={12} style={{ backgroundColor: '#2278AD', color: '#F0F2F5' }} className={styles.div1}>
                    <Row>
                        <Col span={20} offset={2} className={styles.logo}>

                            <BsFillInboxesFill /> Goodloading


                        </Col>
                    </Row>
                    <Row>
                        <Col span={20} offset={2} className={styles.title}>

                            Welcome to Goodloading

                        </Col>
                    </Row>

                    <Row>
                        <Col span={20} offset={2} className={styles.title2}>

                            Free demo version. <br />
                            Test the full functionality for 2$.

                        </Col>
                    </Row>


                    <Row>
                        <Col span={20} offset={2} style={{ padding: "20px 0 40px 0" }}>
                            <Image src={imgMain} />
                        </Col>
                    </Row>

                </Col>



                <Col span={12} style={{ backgroundColor: '#F0F2F5', color: '#6C6C6C' }}>
                    <Row>
                        <Col span={12} offset={6} className={styles.login}>
                            Log in
                        </Col>
                    </Row>

                    <Row>
                        <Col span={12} offset={6} className={styles.text}>
                            You do not have an account? 	&nbsp;
                            <Link href="/register">
                                <a>Sign up</a>
                            </Link>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={12} offset={6}>
                            <Form
                                name="basic"
                                initialValues={{ remember: true }}
                                autoComplete="off"

                            >
                                <Form.Item

                                    name="username"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Input placeholder="User name" />
                                </Form.Item>

                                <Form.Item
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input.Password placeholder="Password" />
                                </Form.Item>

                                <Row>
                                    <Col span={12}>
                                        <Form.Item name="remember" >
                                            <Checkbox style={{ color: '#6C6C6C' }}>Remember me</Checkbox>
                                        </Form.Item>
                                    </Col>

                                    <Col span={12} style={{ alignItems: 'end' }}>
                                        <Form.Item name="forgotPassword" >
                                            <a href="#" style={{ float: 'right' }}>
                                                <u> Forgot password ?</u>
                                            </a>
                                        </Form.Item>
                                    </Col>
                                </Row>

                                <Form.Item >
                                    <Button type="primary" shape="round" style={{ width: '100%' }} >Log in </Button>
                                </Form.Item>

                                <Form.Item style={{ color: '#6C6C6C' }}>
                                    Other login methods
                                </Form.Item>

                                <Form.Item >
                                    <Button type="primary" shape="round"
                                        className={styles.btngoogle} >
                                        <FaGoogle /> &nbsp;&nbsp;&nbsp;&nbsp; Log in via Google
                                    </Button>
                                </Form.Item>

                                <Form.Item >
                                    <Button type="primary" shape="round"
                                        className={styles.btnfb} >
                                        <FaFacebookF /> &nbsp; Log in via Facebook
                                    </Button>
                                </Form.Item>



                            </Form>

                        </Col>

                    </Row>




                </Col>

            </Row>





        </>
    )
}