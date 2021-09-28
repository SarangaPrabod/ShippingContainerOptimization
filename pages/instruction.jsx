import Header from "./header";
import Footer from "./footer";
import 'antd/dist/antd.css';
import styles from '../styles/instruction.module.css';
import { Col, Row } from "antd";
import Link from "next/dist/client/link";
import Image from "next/dist/client/image";
// import { Link as Lnk } from 'react-scroll'
import { FaChevronRight } from 'react-icons/fa'

import pro from "../public/instruction/pro.png"
import one from "../public/one.png"
import two from "../public/two.png"
import three from "../public/three.png"


export default function Instruction() {

    return (
        <>
            <Header />

            <Row style={{ backgroundColor: '#F0F2F5' }}>

                <Col span={18} offset={3} className={styles.full}>

                    <section id='top'>
                        <Row>
                            <Col span={24}>

                                <Row>
                                    <Col className={styles.topic}>
                                        INSTRUCTION
                                    </Col>
                                </Row>

                                <Row>
                                    <Col style={{ padding: '0 0 20px 0' }}>
                                        The instructions include:
                                    </Col>
                                </Row>

                                <Row>
                                    <Col offset={1} style={{ padding: '0 0 20px 0' }}>

                                        <h4 className={styles.h4}>
                                            <Link href="#registration">
                                                <a style={{ color: '#242425' }}>
                                                    <FaChevronRight style={{ color: '#0076BE' }} /> logging in and registration
                                                </a>
                                            </Link>
                                        </h4>

                                        <h4 className={styles.h4}>
                                            <Link href="#selection">
                                                <a style={{ color: '#242425' }}>
                                                    <FaChevronRight style={{ color: '#0076BE' }} /> selection of loading space
                                                </a>
                                            </Link>
                                        </h4>

                                        <h4 className={styles.h4}>
                                            <Link href="#axel">
                                                <a style={{ color: '#242425' }}>
                                                    <FaChevronRight style={{ color: '#0076BE' }} /> adding axle loads
                                                </a>
                                            </Link>
                                        </h4>

                                        {/* <h4 className={styles.h4}>
                                            <Lnk to="selection" smooth={true} style={{ color: '#242425' }} >
                                                <FaChevronRight style={{ color: '#0076BE' }} /> selection of loading space
                                            </Lnk>
                                        </h4>

                                        <h4 className={styles.h4}>
                                            <Lnk to="axel" smooth={true} style={{ color: '#242425' }} >
                                                <FaChevronRight style={{ color: '#0076BE' }} /> adding axle loads
                                            </Lnk>
                                        </h4> */}

                                        <h4 className={styles.h4}>
                                            <FaChevronRight style={{ color: '#0076BE' }} /> management of several semi-trailers
                                        </h4>

                                        <h4 className={styles.h4}>
                                            <FaChevronRight style={{ color: '#0076BE' }} /> adding loads
                                        </h4>

                                        <h4 className={styles.h4}>
                                            <FaChevronRight style={{ color: '#0076BE' }} /> managing the list of added loads
                                        </h4>

                                        <h4 className={styles.h4}>
                                            <FaChevronRight style={{ color: '#0076BE' }} /> editing project on visualization
                                        </h4>

                                        <h4 className={styles.h4}>
                                            <FaChevronRight style={{ color: '#0076BE' }} /> functions of the side panel
                                        </h4>

                                        <h4 className={styles.h4}>
                                            <FaChevronRight style={{ color: '#0076BE' }} /> my profile
                                        </h4>

                                        <h4 className={styles.h4}>
                                            <FaChevronRight style={{ color: '#0076BE' }} /> payments and adding users to PRO
                                        </h4>

                                    </Col>

                                </Row>

                                <Row>
                                    <Col style={{ padding: '0 0 30px 0' }}>
                                        Functionalities available only in the PRO version are marked with the  <Image src={pro} />  icon.
                                    </Col>
                                </Row>

                            </Col>
                        </Row>
                    </section>

                    <section id='registration'>
                        <Row>
                            <Col span={24} style={{ padding: '80px 0 30px 0' }}>
                                <h2 style={{ fontWeight: 'bold', padding: '0 0 20px 0' }}>
                                    Registration
                                </h2>
                                <p>
                                    If you want to use ShippingOpt, logging in is required.
                                    If you do not have an account, please register.
                                    The registration is necessary to create an individual user profile.
                                </p>
                                <p>
                                    <b> Registration and use of the basic version of the application are free of charge.</b>
                                </p>

                                <p>
                                    In order to register, click the Go button at ShippingOpt.com.
                                    You will be redirected to the logon page.
                                    Click Register to start the registration process.
                                </p>

                                <Row>
                                    <Col style={{ padding: '20px 0 20px 0' }}>
                                        <Image src={one} />
                                    </Col>
                                </Row>

                                <p>
                                    You can register to the application via Google, Facebook,
                                    TransID account or by providing an e-mail address.
                                    During the registration you will be asked if you are a forwarder,
                                    transport company or manufacturer.
                                </p>

                                <p>
                                    In the case of registration by e-mail,
                                    you will receive a message with an activation link to your mailbox.
                                    When the link is confirmed, you can start working with the application.
                                </p>

                            </Col>
                        </Row>

                    </section>

                    <section id='selection'>
                        <Row>
                            <Col span={24} style={{ padding: '80px 0 30px 0' }}>
                                <h2 style={{ fontWeight: 'bold', padding: '0 0 20px 0' }}>
                                    Selection of loading space
                                </h2>

                                <Row align='middle'>
                                    <Col span={1} className={styles.numb}>1.</Col>
                                    <Col span={23}>
                                        In the application select a loading space,
                                        that is, a vehicle, container or another type (e.g., pallet).
                                    </Col>
                                </Row>

                                <Row align='middle'>
                                    <Col span={1} className={styles.numb}>2.</Col>
                                    <Col span={23}>
                                        Loading space can be selected from the list.
                                    </Col>
                                </Row>

                                <Row align='top'>
                                    <Col span={1} className={styles.numb}>3.</Col>
                                    <Col span={23}>
                                        <Image src={pro} /> &nbsp;
                                        If the list does not contain spaces you would like to work with,
                                        enter their dimensions manually. If you want the load to take axle load of the vehicle into account,
                                        complete all the required data.
                                    </Col>
                                </Row>

                                <Row align='middle'>
                                    <Col span={1} className={styles.numb}>4.</Col>
                                    <Col span={23}>
                                        Select the set option if you want to work on a two-part vehicle.
                                    </Col>
                                </Row>

                                <Row align='middle'>
                                    <Col span={1} className={styles.numb}>5.</Col>
                                    <Col span={23}>
                                        <Image src={pro} />
                                        &nbsp;
                                        If you have more than one vehicle,
                                        you can distribute the loads to all of them at once.
                                        Just fill in the amount field.
                                    </Col>
                                </Row>

                                <Row align='middle'>
                                    <Col span={1} className={styles.numb}>6.</Col>
                                    <Col span={23}>
                                        <Image src={pro} />
                                        &nbsp;
                                        If you regularly use the space which is not present on the list,
                                        you can add it in the application by ticking the ,,Remember’’ option.
                                    </Col>
                                </Row>


                                <Row>
                                    <Col style={{ padding: '20px 0 20px 0' }}>
                                        <Image src={two} />
                                    </Col>
                                </Row>

                                <p>
                                    You can add more than one loading space to the application,
                                    just add more in the same way after the first space has been added.
                                </p>

                            </Col>
                        </Row>

                    </section>

                    <section id='axel'>
                        <Row>
                            <Col span={24} style={{ padding: '80px 0 30px 0' }}>
                                <h2 style={{ fontWeight: 'bold', padding: '0 0 20px 0' }}>
                                    <Image src={pro} />
                                    &nbsp; Axel loads
                                </h2>

                                <Row align='middle'>
                                    <Col span={1} className={styles.numb}>1.</Col>
                                    <Col span={23}>
                                        In the application select a loading space,
                                        that is, a vehicle, container or another type (e.g., pallet).
                                    </Col>
                                </Row>

                                <Row align='middle'>
                                    <Col span={1} className={styles.numb}>2.</Col>
                                    <Col span={23}>
                                        Loading space can be selected from the list.
                                    </Col>
                                </Row>

                                <Row align='top'>
                                    <Col span={1} className={styles.numb}>3.</Col>
                                    <Col span={23}>
                                        <Image src={pro} /> &nbsp;
                                        If the list does not contain spaces you would like to work with,
                                        enter their dimensions manually. If you want the load to take axle load of the vehicle into account,
                                        complete all the required data.
                                    </Col>
                                </Row>

                                <Row align='middle'>
                                    <Col span={1} className={styles.numb}>4.</Col>
                                    <Col span={23}>
                                        Select the set option if you want to work on a two-part vehicle.
                                    </Col>
                                </Row>

                                <Row align='middle'>
                                    <Col span={1} className={styles.numb}>5.</Col>
                                    <Col span={23}>
                                        <Image src={pro} />
                                        &nbsp;
                                        If you have more than one vehicle,
                                        you can distribute the loads to all of them at once.
                                        Just fill in the amount field.
                                    </Col>
                                </Row>

                                <Row align='middle'>
                                    <Col span={1} className={styles.numb}>6.</Col>
                                    <Col span={23}>
                                        <Image src={pro} />
                                        &nbsp;
                                        If you regularly use the space which is not present on the list,
                                        you can add it in the application by ticking the ,,Remember’’ option.
                                    </Col>
                                </Row>


                                <Row>
                                    <Col style={{ padding: '20px 0 20px 0' }}>
                                        <Image src={three} />
                                    </Col>
                                </Row>

                                <p>
                                    You can add more than one loading space to the application,
                                    just add more in the same way after the first space has been added.
                                </p>

                            </Col>
                        </Row>

                    </section>


                </Col>
            </Row>

            <Footer />


        </>
    );

}