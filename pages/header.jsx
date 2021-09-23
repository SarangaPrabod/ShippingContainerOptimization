import { Col, Layout, Row, Button, Affix } from "antd";
import 'antd/dist/antd.css';
import styles from "../styles/home.module.css";
import { BsFillInboxesFill } from 'react-icons/bs';
import Link from "next/link";
import { Link as Lnk, animateScroll as scroll } from 'react-scroll'


const { Header } = Layout;

export default function Head() {
    return (
        <Affix offsetTop>
            <Layout className={styles.body} style={{ boxShadow: ' 0 2px 8px 0 rgba(0,0,0,.2)' }}>
                <Header className={styles.header}>

                    <Row style={{ textAlign: "center" }}>

                        <Col span={6} onClick={() => scroll.scrollToTop()}>
                            <Link href="/" >
                                <a style={{ color: '#0090D1' }}> <BsFillInboxesFill /> Goodloading </a>
                            </Link>
                        </Col>

                        <Col span={2} offset={4} >
                            <Lnk to="priceList" smooth={true} className={styles.pages}>
                                price list</Lnk>
                        </Col>

                        <Col span={2} >
                            <Link href="/instruction" >
                                <Lnk to="/instruction" smooth={true} className={styles.pages} onClick={() => scroll.scrollToTop()}>
                                    instruction</Lnk>
                            </Link>

                        </Col>

                        <Col span={2} className={styles.pages}>blog</Col>

                        <Col span={2} className={styles.pages}>integration</Col>

                        <Col span={2} className={styles.pages}>faq</Col>

                        <Col span={2} >
                            <Lnk to="contact" smooth={true} className={styles.pages}>
                                contact
                            </Lnk>
                        </Col>

                        <Col span={2}><Button shape="round" className={styles.btn}>
                            <Link href="/login">
                                <a target="_blank">Log in</a>
                            </Link>
                        </Button>
                        </Col>

                    </Row>
                </Header>
            </Layout>
        </Affix>

    );
}