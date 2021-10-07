import React, { useState } from 'react';
import { Col, Layout, Row, Button, Affix, Space, Drawer } from "antd";
import 'antd/dist/antd.css';
import styles from "../styles/home.module.css";
import styles1 from "../styles/header.module.css";
import { BsFillInboxesFill } from 'react-icons/bs';
import { TiThMenu } from 'react-icons/ti';
import Link from "next/link";



const { Header } = Layout;

export default function Head() {

    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    return (
        <Affix offsetTop>
            <Layout className={styles.body} style={{ boxShadow: ' 0 2px 8px 0 rgba(0,0,0,.2)' }}>
                <Header className={styles.header}>


                    <Row style={{ textAlign: "center" }} >


                        <Col span={8} >
                            {/* onClick={() => scroll.scrollToTop()} */}
                            <Link href="/" >
                                <a style={{ color: '#0090D1' }}> <BsFillInboxesFill /> ShippingOpt </a>
                            </Link>
                        </Col>


                        <Col span={16}  >
                            <div className={styles1.mobileHidden} style={{ float: 'right' }} >

                                <Space size={"large"}>
                                    <Link href='/#priceList'>
                                        <a className={styles.pages}>Price list</a>
                                    </Link>
                                    <Link href="/instruction" >
                                        <a className={styles.pages}>instruction</a>
                                    </Link>
                                    <Link href="/faq" >
                                        <a className={styles.pages}>faq</a>
                                    </Link>
                                    <Link href='/#contact'>
                                        <a className={styles.pages}>contact</a>
                                    </Link>
                                    <Button shape="round" className={styles.btn}>
                                        <Link href="/login">
                                            <a target="_blank">Log in</a>
                                        </Link>
                                    </Button>

                                </Space>



                                {/* <Row>

                                    <Col span={3} offset={9}>
                                        <Link href='/#priceList'>
                                            <a className={styles.pages}>Price list</a>
                                        </Link>

                                    </Col>

                                    <Col span={3} >
                                        <Link href="/instruction" >
                                            <a className={styles.pages}>instruction</a>
                                        </Link>
                                    </Col>

                                    <Col span={3} >
                                        <Link href="/faq" >
                                            <a className={styles.pages}>faq</a>
                                        </Link>
                                    </Col>

                                    <Col span={3} >
                                        <Link href='/#contact'>
                                            <a className={styles.pages}>contact</a>
                                        </Link>
                                    </Col>

                                    <Col span={3}>
                                        <Button shape="round" className={styles.btn}>
                                            <Link href="/login">
                                                <a target="_blank">Log in</a>
                                            </Link>
                                        </Button>
                                    </Col>

                                </Row> */}
                            </div>

                            <div className={styles1.mobileVisible} style={{ float: 'right' }}>
                                <Button className={styles1.btn} style={{ border: 'none' }}
                                    icon={<TiThMenu />} onClick={showDrawer} />
                                <Drawer placement="right"
                                    onClose={onClose}
                                    visible={visible}
                                    closable={false}>

                                    <Row>

                                        <Col span={24} className={styles1.col}
                                            style={{ padding: '30px 0 10px 0' }}>
                                            <Link href='/#priceList' >
                                                <a className={styles1.item}>Price list</a>
                                            </Link>
                                        </Col>

                                        <Col span={24} className={styles1.col} >
                                            <Link href="/instruction" >
                                                <a className={styles1.item}>instruction</a>
                                            </Link>
                                        </Col>

                                        <Col span={24} className={styles1.col}>
                                            <Link href="/faq" >
                                                <a className={styles1.item}>faq</a>
                                            </Link>
                                        </Col>

                                        <Col span={24} className={styles1.col} >
                                            <Link href='/#contact'>
                                                <a className={styles1.item}>contact</a>
                                            </Link>
                                        </Col>

                                        <Col span={24} className={styles1.col}
                                            style={{ padding: '30px' }}>
                                            <Button shape="round" className={styles.btn}>
                                                <Link href="/login">
                                                    <a target="_blank">Log in</a>
                                                </Link>
                                            </Button>
                                        </Col>
                                    </Row>
                                </Drawer>

                            </div>



                        </Col>




                    </Row>

                </Header>
            </Layout>
        </Affix >

    );
}