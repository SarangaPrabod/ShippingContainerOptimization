import { Col, Layout, Row, } from "antd";
import 'antd/dist/antd.css';
import styles from "../styles/home.module.css";

export default function Foot() {


    return (

        <Layout>
            <Row className={styles.footer}>
                <Col span={3} offset={2}>
                    <a href="#" className={styles.link2}>Privacy policy</a>
                </Col>
                <Col span={3} >
                    <a href="#" className={styles.link2}>Terms of service</a>
                </Col>
                <Col span={3} >
                    <a href="#" className={styles.link2}>Discount program</a>
                </Col>
                <Col span={3} >
                    <a href="#" className={styles.link2}>Project</a>
                </Col>
                <Col span={3} >
                    <a href="#" className={styles.link2}>Regulations of the API</a>
                </Col>
                <Col span={3} offset={2}>
                    &copy; Inoovalab.org
                </Col>

            </Row>

        </Layout>

    );
}