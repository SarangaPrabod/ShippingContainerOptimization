import Head from "./header";
import 'antd/dist/antd.css';
import styles from '../styles/instruction.module.css';
import { Col, Row } from "antd";


export default function Instruction() {

    return (
        <>
            <Head />


            <Row style={{ backgroundColor: '#F0F2F5' }}>
                <Col span={18} offset={3} className={styles.full}>

                    <section id='top'>
                        <Row>
                            <Col>

                                <Row>
                                    <Col className={styles.topic}>
                                        INSTRUCTION
                                    </Col>
                                </Row>

                                <Row>
                                    <Col style={{ padding: '0 0 30px 0' }}>
                                        The instructions include:
                                    </Col>
                                </Row>

                            </Col>
                        </Row>
                    </section>


                </Col>
            </Row>


        </>
    );

}