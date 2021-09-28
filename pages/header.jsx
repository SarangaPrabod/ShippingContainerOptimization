import { Col, Layout, Row, Button, Affix } from "antd";
import 'antd/dist/antd.css';
import styles from "../styles/home.module.css";
import { BsFillInboxesFill } from 'react-icons/bs';
import Link from "next/link";


const { Header } = Layout;

export default function Head() {
    return (
        <Affix offsetTop>
            <Layout className={styles.body} style={{ boxShadow: ' 0 2px 8px 0 rgba(0,0,0,.2)' }}>
                <Header className={styles.header}>

                    <Row style={{ textAlign: "center" }}>

                        <Col span={6} >
                            {/* onClick={() => scroll.scrollToTop()} */}
                            <Link href="/" >
                                <a style={{ color: '#0090D1' }}> <BsFillInboxesFill /> ShippingOpt </a>
                            </Link>
                        </Col>

                        <Col span={2} offset={8} >
                            <Link href='/#priceList'>
                                <a className={styles.pages}>price list</a>
                            </Link>
                        </Col>

                        <Col span={2} >
                            <Link href="/instruction" >
                                <a className={styles.pages}>instruction</a>
                            </Link>
                        </Col>

                        {/*<Col span={2} className={styles.pages}>blog</Col>

                        <Col span={2} className={styles.pages}>integration</Col> */}

                        <Col span={2} >
                            <Link href="/faq" >
                                <a className={styles.pages}>faq</a>
                            </Link>
                        </Col>

                        <Col span={2} >
                            <Link href='/#contact'>
                                <a className={styles.pages}>contact</a>
                            </Link>
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