import { Col, Row, Button, Form, Checkbox, Select, Input } from "antd";
import Image from 'next/image'
import 'antd/dist/antd.css';
import styles from '../styles/login.module.css';
import Link from "next/dist/client/link";
import { FaGoogle, FaFacebookF, FaMaxcdn } from 'react-icons/fa';

import imgMain from '../public/container2.png'
import { BsFillInboxesFill } from 'react-icons/bs';

import { CountryDropdown } from 'react-country-region-selector';

import React, { useState } from 'react'




export default function LogIn() {

    const [country, setCountry] = useState("");

    const { Option } = Select;


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
                            You already have a goodloading account? 	&nbsp;
                            <Link href="/login">
                                <a>Log in</a>
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
                                <Row gutter={10}>

                                    <Col span={12}>

                                        <Form.Item
                                            name={['role']}
                                            rules={[{ required: true, message: 'Role is required' }]}>

                                            <Select placeholder="Role">
                                                <Option value="freightForwarding">Freight forwarding</Option>
                                                <Option value="transportCompany">Transport company</Option>
                                                <Option value="manufacturer">Manufacturer</Option>
                                                <Option value="student">Student</Option>
                                            </Select>

                                        </Form.Item>

                                    </Col>


                                    <Col span={12}>
                                        <Form.Item
                                            name={['country']}
                                            rules={[{ required: true, message: 'Country is required' }]}>

                                            <CountryDropdown
                                                className={styles.country}
                                                value={country}
                                                onChange={(val) => setCountry(val)} />

                                        </Form.Item>
                                    </Col>
                                </Row>

                                <Form.Item
                                    name={['user', 'email']}
                                    rules={[{
                                        type: 'email',
                                        required: true,
                                        message: 'Email is required'
                                    }]}>
                                    <Input placeholder="Your E-mail Address" />
                                </Form.Item>

                                <Row gutter={10}>
                                    <Col span={12}>
                                        <Form.Item
                                            name="password"
                                            rules={[{ required: true, message: 'Please input your password!' }]}
                                        >
                                            <Input.Password placeholder="Password" />
                                        </Form.Item>
                                    </Col>

                                    <Col span={12}>
                                        <Form.Item
                                            name="re-password"
                                            rules={[{ required: true, message: 'Please input your password!' }]}
                                        >
                                            <Input.Password placeholder="Password re-enter" />
                                        </Form.Item>
                                    </Col>
                                </Row>



                                <Form.Item name="remember" >
                                    <Checkbox style={{ color: '#6C6C6C' }}>By creating an account you agree to
                                        <a href="#"> Terms of service </a> and
                                        <a href="#"> Privacy policy. </a></Checkbox>
                                </Form.Item>


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