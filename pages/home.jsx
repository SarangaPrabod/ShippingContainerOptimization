import { Col, Layout, Row, Button, Form, Input, Select } from "antd";
import 'antd/dist/antd.css';
import styles from "../styles/home.module.css";
import { BsFillInboxesFill } from 'react-icons/bs';
import { FaCheck, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi'
import { IoLocationOutline } from 'react-icons/io5'
import Typewriter from 'typewriter-effect';
import Image from "next/image";
import ReactPlayer from "react-player/youtube";
import Text from "antd/lib/typography/Text";

import img1 from "../public/1.png"
import img2 from "../public/2.png"
import cont1 from "../public/cont1.png"
import cont2 from "../public/cont2.png"
import cont3 from "../public/cont3.png"
import cont4 from "../public/cont4.png"

import one from "../public/one.png"
import two from "../public/two.png"
import three from "../public/three.png"
import four from "../public/four.png"

const { Content } = Layout;


const validateMessages = {
    required: '${name} is required!',
    types: {
        email: '${name} is not a valid !',
    },
};

const { Option } = Select;



export default function Home() {

    const onFinish = (values) => {
        console.log(values);
    };

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    return (
        <>
            <Layout className={styles.body}>


                <Content >
                    <div className={styles.sec}>
                        {/* Section 1 */}
                        <section id='top'>
                            <div className={styles.div1}>
                                <Row>
                                    <Col span={10} offset={3}>
                                        <div className={styles.title1}><p>
                                            Optimal planing of cargo space</p>
                                        </div>
                                    </Col>
                                </Row>

                                <Row>

                                    <Col span={10} offset={3}>
                                        <div className={styles.type1}>
                                            Find out how to best arrange loads
                                        </div>
                                    </Col>

                                </Row>

                                <Row>
                                    <Col span={10} offset={3}>
                                        <div className={styles.type1}>
                                            <Typewriter
                                                options={{
                                                    strings: [
                                                        'on a truck',
                                                        'in a container',
                                                        'on a pallet or other space'
                                                    ],
                                                    autoStart: true,
                                                    loop: true,
                                                    delay: 100,
                                                }}
                                            />
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col span={10} offset={3}>
                                        <div style={{ padding: '50px 0px 70px 0px' }}>
                                            <Button shape="round" className={styles.btnReg}>
                                                Free registration
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </section>

                        {/* Section 2 */}
                        <section id='sponsor'>

                            <div style={{ padding: '15px 0px 5px 0px' }}>
                                <Row>

                                    <Col span={6} offset={4}>
                                        <div >
                                            {/* <Image src={img1} height={270} /> */}
                                        </div>
                                    </Col>

                                    <Col span={6} offset={4}>
                                        <div >
                                            {/* <Image src={img2} /> */}
                                        </div>
                                    </Col>

                                </Row>
                            </div>
                        </section>

                        {/* Section 3 */}
                        <section id='clients'>

                            <div style={{ backgroundColor: '#0090D1' }}>
                                <Row >
                                    <Col span={24}>
                                        <div className={styles.hedingBlue}>
                                            ShippingOpt clients
                                        </div>
                                    </Col>
                                </Row>

                                <Row  >
                                    <Col span={20} offset={2}>
                                        <Row gutter={[30]}>
                                            <Col lg={{ span: 6 }} md={{ span: 12 }}>
                                                <div >
                                                    <Row className={styles.contImg}>
                                                        <Image src={cont1} />
                                                    </Row>
                                                    <Row>
                                                        <div style={{ color: "white", textAlign: 'center', padding: '10px' }} >
                                                            <h2 style={{ color: "white", fontSize: "20px" }}>FORWARDERS</h2>
                                                            <p style={{ textAlign: 'justify' }}>An option giving big savings is the possibility of checking
                                                                which smaller vehicle or container will carry a given load
                                                                and how much free cargo space is left.</p>
                                                        </div>
                                                    </Row>
                                                </div>
                                            </Col>

                                            <Col lg={{ span: 6 }} md={{ span: 12 }}>
                                                <div >
                                                    <Row className={styles.contImg}>
                                                        <Image src={cont2} />
                                                    </Row>
                                                    <Row>
                                                        <div style={{ color: "white", textAlign: 'center', padding: '10px' }} >
                                                            <h2 style={{ color: "white", fontSize: "20px" }}>CRRRIERS</h2>
                                                            <p style={{ textAlign: 'justify' }}>Information about free space and axle loads helps plan
                                                                an added load. What is more, it can assist the person
                                                                responsible for loading with choosing the way of arranging
                                                                cargo.</p>
                                                        </div>
                                                    </Row>
                                                </div>
                                            </Col>

                                            <Col lg={{ span: 6 }} md={{ span: 12 }}>
                                                <div >
                                                    <Row className={styles.contImg}>
                                                        <Image src={cont3} />
                                                    </Row>
                                                    <Row>
                                                        <div style={{ color: "white", textAlign: 'center', padding: '10px' }} >
                                                            <h2 style={{ color: "white", fontSize: "20px" }}>MANUFACTURES</h2>
                                                            <p style={{ textAlign: 'justify' }}>With ShippingOpt you can choose an optimal way of loading and
                                                                send a PDF presenting its arrangement. Additionally, to
                                                                avoid “transporting air”, it is possible to check
                                                                how much load a given cargo space can accommodate.</p>
                                                        </div>
                                                    </Row>
                                                </div>
                                            </Col>

                                            <Col lg={{ span: 6 }} md={{ span: 12 }}>
                                                <div style={{ padding: '0 0 40px 0' }} >
                                                    <Row className={styles.contImg}>
                                                        <Image src={cont4} />
                                                    </Row>
                                                    <Row>
                                                        <div style={{ color: "white", textAlign: 'center', padding: '10px' }} >
                                                            <h2 style={{ color: "white", fontSize: "20px" }}>WAREHOUSE</h2>
                                                            <p style={{ textAlign: 'justify' }}>When working with various dimensions of loads, it
                                                                is worth checking how to arrange them in
                                                                order to make the most of the available space.
                                                                It is also good to see how to best arrange cargo
                                                                on the pallet.</p>
                                                        </div>
                                                    </Row>
                                                </div>
                                            </Col>


                                        </Row>


                                    </Col>


                                </Row>
                            </div>
                        </section>

                        {/* Section 4 */}
                        <section id='features'>
                            <div>
                                <Row>
                                    <Col span={24}>
                                        <div className={styles.hedingWhite}>
                                            Main features of the application
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <Row >
                                <Col span={18} offset={3}>
                                    <div style={{ padding: '50px 0px 50px 0px' }}>
                                        <Row gutter={30}>
                                            <Col lg={{ span: 12 }} md={{ span: 24 }}>
                                                <div className={styles.divFeature} >
                                                    <h2 style={{ color: "#5B5B5B", fontSize: "20px", fontWeight: 'bolder' }}>Calculation of
                                                        free and occupied cargo space</h2>
                                                    <p style={{ textAlign: 'justify' }}>You can quickly verify that a load fits the space,
                                                        and if there is any space left, plan an added load.
                                                    </p>
                                                    <a className={styles.hoverUnderlineAnimation} href="#">
                                                        <b>Try ShippingOpt</b></a>
                                                </div>

                                            </Col>
                                            <Col lg={{ span: 12 }} md={{ span: 24 }}>
                                                <Image src={one} />
                                            </Col>
                                        </Row>
                                    </div>

                                    <div style={{ padding: '50px 0px 50px 0px' }}>
                                        <Row gutter={30}>

                                            <Col lg={{ span: 12 }} md={{ span: 24 }}>
                                                <Image src={two} />
                                            </Col>
                                            <Col lg={{ span: 12 }} md={{ span: 24 }}>
                                                <div className={styles.divFeature} >
                                                    <h2 style={{ color: "#5B5B5B", fontSize: "20px", fontWeight: 'bolder' }}>Optimal arrangement of
                                                        loads within the space</h2>
                                                    <p style={{ textAlign: 'justify' }}>The program distributes loads by making the most of the space.
                                                        The application may suggest selecting a smaller vehicle or container
                                                    </p>
                                                    <a className={styles.hoverUnderlineAnimation} href="#">
                                                        <b>Try ShippingOpt</b></a>
                                                </div>

                                            </Col>
                                        </Row>
                                    </div>

                                    <div style={{ padding: '50px 0px 50px 0px' }}>
                                        <Row gutter={30}>
                                            <Col lg={{ span: 12 }} md={{ span: 24 }}>
                                                <div className={styles.divFeature} >
                                                    <h2 style={{ color: "#5B5B5B", fontSize: "20px", fontWeight: 'bolder' }}>Possibility of sharing a load project</h2>
                                                    <p style={{ textAlign: 'justify' }}>Sending a project to the person responsible for loading will help speed up the process and minimize
                                                        the risk of errors.
                                                    </p>
                                                    <a className={styles.hoverUnderlineAnimation} href="#">
                                                        <b>Try ShippingOpt</b></a>
                                                </div>

                                            </Col>
                                            <Col lg={{ span: 12 }} md={{ span: 24 }}>
                                                <Image src={three} />
                                            </Col>
                                        </Row>
                                    </div>

                                    <div style={{ padding: '50px 0px 50px 0px' }}>
                                        <Row gutter={30}>

                                            <Col lg={{ span: 12 }} md={{ span: 24 }}>
                                                <Image src={four} />
                                            </Col>
                                            <Col lg={{ span: 12 }} md={{ span: 24 }} >
                                                <div className={styles.divFeature} >
                                                    <h2 style={{ color: "#5B5B5B", fontSize: "20px", fontWeight: 'bolder' }}>Axle loads</h2>
                                                    <p style={{ textAlign: 'justify' }}>It is easy to plan arrangement of loads without overloading vehicle axles.
                                                    </p>
                                                    <a className={styles.hoverUnderlineAnimation} href="#">
                                                        <b>Try ShippingOpt</b></a>
                                                </div>

                                            </Col>
                                        </Row>
                                    </div>

                                </Col>

                            </Row>

                        </section>

                        {/* Section 5 */}
                        <section id='demo'>
                            <div style={{ backgroundColor: "#0090D1" }}>
                                <Row >
                                    <Col span={24}>
                                        <div className={styles.hedingBlue}>
                                            See how ShippingOpt works
                                        </div>
                                    </Col>
                                </Row>

                                <div style={{ padding: '30px 0px 80px 0px' }}>
                                    <Row>
                                        <Col span={12} offset={6}>
                                            <ReactPlayer
                                                width="100%" url="https://youtu.be/kj7ixi2lqF4" />
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </section>

                        {/* Section 6 */}
                        <section id='versions'>
                            <div style={{ padding: '0px 0px 100px 0px' }}>
                                <div style={{ padding: '0px 0px 50px 0px' }}>
                                    <Row>
                                        <Col span={20} offset={2}>
                                            <div className={styles.hedingWhite} >
                                                Differences between demo and PRO version
                                            </div>
                                        </Col>
                                    </Row>
                                </div>




                                <div >
                                    <Row>
                                        <Col span={16} offset={4}>
                                            <Row gutter={50} style={{ textAlign: "center" }}>
                                                <Col lg={{ span: 12 }} md={{ span: 24 }} style={{ padding: '0 0px 40px 0' }}>
                                                    <div class={styles.card1}>
                                                        <div>
                                                            <Row>
                                                                <Col span={24}>
                                                                    <div className={styles.card1Header}>
                                                                        <BsFillInboxesFill /> ShippingOpt
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </div>

                                                        <div style={{ padding: '0 0px 30px 0' }}>
                                                            <Row >
                                                                <Col span={20} offset={2}>
                                                                    <div style={{ padding: '20px 0px 30px 0' }} >
                                                                        <h3 className={styles.h3}>
                                                                            Use the free version to decide if you
                                                                            want to buy the PRO version.</h3>
                                                                    </div>
                                                                </Col>

                                                                <Col span={20} offset={2}>
                                                                    <div >
                                                                        <Row>

                                                                            <Col span={4}>
                                                                                <div style={{ alignItems: 'center' }}>
                                                                                    <FaCheck color={'#0090D1'} size={20} />
                                                                                </div>
                                                                            </Col>
                                                                            <Col span={20}>
                                                                                <div className={styles.versions}>
                                                                                    Loading of many semi-trailers at the same time
                                                                                </div>
                                                                            </Col>
                                                                        </Row>
                                                                        <hr className={styles.hr} />
                                                                    </div>

                                                                    <div >
                                                                        <Row>

                                                                            <Col span={4}>
                                                                                <div style={{ alignItems: 'center' }}>
                                                                                    <FaCheck color={'#0090D1'} size={20} />
                                                                                </div>
                                                                            </Col>
                                                                            <Col span={20}>
                                                                                <div className={styles.versions}>
                                                                                    LDM calculation
                                                                                </div>
                                                                            </Col>
                                                                        </Row>
                                                                        <hr className={styles.hr} />
                                                                    </div>

                                                                    <div >
                                                                        <Row>

                                                                            <Col span={4}>
                                                                                <div style={{ alignItems: 'center' }}>
                                                                                    <FaCheck color={'#0090D1'} size={20} />
                                                                                </div>
                                                                            </Col>
                                                                            <Col span={20}>
                                                                                <div className={styles.versions}>
                                                                                    Project in PDF file
                                                                                </div>
                                                                            </Col>
                                                                        </Row>
                                                                        <hr className={styles.hr} />
                                                                    </div>

                                                                    <div >
                                                                        <Row>

                                                                            <Col span={4}>
                                                                                <div style={{ alignItems: 'center' }}>
                                                                                    <FaCheck color={'#0090D1'} size={20} />
                                                                                </div>
                                                                            </Col>
                                                                            <Col span={20}>
                                                                                <div className={styles.versions}>
                                                                                    Axle loads
                                                                                </div>
                                                                            </Col>
                                                                        </Row>
                                                                        <hr className={styles.hr} />
                                                                    </div>


                                                                    <div style={{ padding: '111px 0px 20px 0px' }}>
                                                                        <Button shape="round" className={styles.btn} >
                                                                            Sign up
                                                                        </Button>
                                                                    </div>
                                                                </Col>

                                                            </Row>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col lg={{ span: 12 }} md={{ span: 24 }}>
                                                    <div class={styles.card2}>
                                                        <div>
                                                            <Row>
                                                                <Col span={24}>
                                                                    <div className={styles.card2Header}>
                                                                        <BsFillInboxesFill /> ShippingOpt Pro
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </div>

                                                        <div style={{ padding: '0 0px 30px 0' }}>
                                                            <Row >
                                                                <Col span={20} offset={2}>
                                                                    <div style={{ padding: '20px 0px 30px 0' }} >
                                                                        <h3 className={styles.h3} style={{ color: "#F0F2F5" }}>
                                                                            Choose the PRO version if you want to work
                                                                            with your own loads and vehicles.</h3>
                                                                    </div>
                                                                </Col>

                                                                <Col span={20} offset={2}>
                                                                    <div >
                                                                        <Row>

                                                                            <Col span={4}>
                                                                                <div style={{ alignItems: 'center' }}>
                                                                                    <FaCheck color={'#F0F2F5'} size={20} />
                                                                                </div>
                                                                            </Col>
                                                                            <Col span={20}>
                                                                                <div className={styles.versions2}>
                                                                                    Loading of many semi-trailers at the same time
                                                                                </div>
                                                                            </Col>
                                                                        </Row>
                                                                        <hr className={styles.hr2} />
                                                                    </div>

                                                                    <div >
                                                                        <Row>

                                                                            <Col span={4}>
                                                                                <div style={{ alignItems: 'center' }}>
                                                                                    <FaCheck color={'#F0F2F5'} size={20} />
                                                                                </div>
                                                                            </Col>
                                                                            <Col span={20}>
                                                                                <div className={styles.versions2}>
                                                                                    LDM calculation
                                                                                </div>
                                                                            </Col>
                                                                        </Row>
                                                                        <hr className={styles.hr2} />
                                                                    </div>

                                                                    <div >
                                                                        <Row>

                                                                            <Col span={4}>
                                                                                <div style={{ alignItems: 'center' }}>
                                                                                    <FaCheck color={'#F0F2F5'} size={20} />
                                                                                </div>
                                                                            </Col>
                                                                            <Col span={20}>
                                                                                <div className={styles.versions2}>
                                                                                    Project in PDF file
                                                                                </div>
                                                                            </Col>
                                                                        </Row>
                                                                        <hr className={styles.hr2} />
                                                                    </div>

                                                                    <div >
                                                                        <Row>

                                                                            <Col span={4}>
                                                                                <div style={{ alignItems: 'center' }}>
                                                                                    <FaCheck color={'#F0F2F5'} size={20} />
                                                                                </div>
                                                                            </Col>
                                                                            <Col span={20}>
                                                                                <div className={styles.versions2}>
                                                                                    Axle loads
                                                                                </div>
                                                                            </Col>
                                                                        </Row>
                                                                        <hr className={styles.hr2} />
                                                                    </div>

                                                                    <div >
                                                                        <Row>

                                                                            <Col span={4}>
                                                                                <div style={{ alignItems: 'center' }}>
                                                                                    <FaCheck color={'#F0F2F5'} size={20} />
                                                                                </div>
                                                                            </Col>
                                                                            <Col span={20}>
                                                                                <div className={styles.versions2}>
                                                                                    Own cargo spaces
                                                                                </div>
                                                                            </Col>
                                                                        </Row>
                                                                        <hr className={styles.hr2} />
                                                                    </div>

                                                                    <div >
                                                                        <Row>

                                                                            <Col span={4}>
                                                                                <div style={{ alignItems: 'center' }}>
                                                                                    <FaCheck color={'#F0F2F5'} size={20} />
                                                                                </div>
                                                                            </Col>
                                                                            <Col span={20}>
                                                                                <div className={styles.versions2}>
                                                                                    Own load dimensions
                                                                                </div>
                                                                            </Col>
                                                                        </Row>
                                                                        <hr className={styles.hr2} />
                                                                    </div>

                                                                    <div style={{ padding: '30px 0px 20px 0px' }}>
                                                                        <Button shape="round" className={styles.btnReg} >
                                                                            Go to pro version
                                                                        </Button>
                                                                    </div>
                                                                </Col>

                                                            </Row>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>

                                    </Row>

                                </div>
                            </div>
                        </section>

                        {/* Section 7 */}

                        <section id='priceList'>
                            <div style={{ backgroundColor: '#dbf9ff' }}>

                                <div style={{ padding: '0px 0px 20px 0' }}>
                                    <Row >
                                        <Col span={20} offset={2}>
                                            <div className={styles.hedingWhite} style={{ color: "#0076BE" }} >
                                                <p> Price list for version &nbsp;<BsFillInboxesFill /> ShippingOpt
                                                    <Text style={{ color: 'chocolate' }}> Pro </Text></p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>


                                <Row>
                                    <Col span={20} offset={2}>
                                        <div style={{ padding: '0px 0px 100px 0' }} >
                                            <Row gutter={15}>

                                                <Col lg={{ span: 6 }} md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}
                                                    style={{ padding: '0 0 20px' }}>

                                                    <div className={styles.sec7} >
                                                        <Row >
                                                            <Col span={24}>
                                                                <div style={{
                                                                    padding: '15px 0px 10px 0',
                                                                    backgroundColor: "#98C1D9",
                                                                    borderTopRightRadius: '10px',
                                                                    borderTopLeftRadius: '10px'
                                                                }} >
                                                                    <h3 className={styles.h3} style={{ color: "#F0F2F5" }}>
                                                                        Check if it is worth</h3>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                        <div >
                                                            <Row gutter={15} align="bottom" >
                                                                <Col span={24} style={{ fontSize: "70px", color: '#98C1D9' }}>
                                                                    0 <Text style={{ fontSize: "20px", color: "#98C1D9" }}>USD</Text>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col span="24" style={{ fontSize: '18px' }}>
                                                                    7 day trial
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col span={20} offset={2}>
                                                                    <div style={{ padding: '10px 0px 15px 0px' }}>
                                                                        <hr className={styles.hr2} style={{ backgroundColor: "#0076BE" }} />
                                                                    </div>
                                                                </Col>
                                                            </Row>

                                                            <Row>
                                                                <Col span={24} style={{ fontWeight: "bolder" }}>
                                                                    Number of Users
                                                                </Col>
                                                            </Row>
                                                            <Row>

                                                                <Col span={20} offset={2} style={{ padding: '40px 0px 0px 0px' }}>
                                                                    10 Users
                                                                </Col>
                                                            </Row>

                                                            <Row>
                                                                <Col span={24} style={{ padding: '30px 0px 50px 0px' }}>
                                                                    <Button shape="round" className={styles.btn} >
                                                                        Register
                                                                    </Button>
                                                                </Col>

                                                            </Row>

                                                        </div>
                                                    </div>

                                                </Col>

                                                <Col lg={{ span: 6 }} md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}
                                                    style={{ padding: '0 0 20px' }}>

                                                    <div className={styles.sec7} >
                                                        <Row >
                                                            <Col span={24}>
                                                                <div style={{
                                                                    padding: '15px 0px 10px 0',
                                                                    backgroundColor: "#3D5A80",
                                                                    borderTopRightRadius: '10px',
                                                                    borderTopLeftRadius: '10px'
                                                                }} >
                                                                    <h3 className={styles.h3} style={{ color: "#F0F2F5" }}>
                                                                        Subscription 1 months</h3>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                        <div >
                                                            <Row gutter={15} align="bottom" >
                                                                <Col span={24} style={{ fontSize: "70px", color: '#3D5A80' }}>
                                                                    0 <Text style={{ fontSize: "20px", color: "#3D5A80" }}>USD</Text>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col span="24" style={{ fontSize: '18px' }}>
                                                                    per month
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col span={20} offset={2}>
                                                                    <div style={{ padding: '10px 0px 15px 0px' }}>
                                                                        <hr className={styles.hr2} style={{ backgroundColor: "#0076BE" }} />
                                                                    </div>
                                                                </Col>
                                                            </Row>

                                                            <Row>
                                                                <Col span={24} style={{ fontWeight: "bolder" }}>
                                                                    Number of Users
                                                                </Col>
                                                            </Row>
                                                            <Row>

                                                                <Col span={20} offset={2} style={{ padding: '30px 0px 0px 0px' }}>
                                                                    <Select
                                                                        style={{ width: '100%' }}
                                                                        onChange={handleChange}
                                                                        placeholder="Select a plan"
                                                                        bordered={false}
                                                                        className={styles.select}

                                                                    >
                                                                        <Option value="jack" className={styles.select} >
                                                                            1 user + 0 USD/month</Option>
                                                                        <Option value="lucy" className={styles.select}>
                                                                            5 user + 0 USD/month</Option>
                                                                        <Option value="disabled" className={styles.select}>
                                                                            10 user + 0 USD/month</Option>
                                                                    </Select>
                                                                </Col>
                                                            </Row>

                                                            <Row>
                                                                <Col span={24} style={{ padding: '30px 0px 50px 0px' }}>
                                                                    <Button shape="round" className={styles.btn} >
                                                                        Register
                                                                    </Button>
                                                                </Col>

                                                            </Row>

                                                        </div>
                                                    </div>

                                                </Col>

                                                <Col lg={{ span: 6 }} md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}
                                                    style={{ padding: '0 0 20px' }}>

                                                    <div className={styles.sec7} >
                                                        <Row >
                                                            <Col span={24}>
                                                                <div style={{
                                                                    padding: '15px 0px 10px 0',
                                                                    backgroundColor: "#293241",
                                                                    borderTopRightRadius: '10px',
                                                                    borderTopLeftRadius: '10px'
                                                                }} >
                                                                    <h3 className={styles.h3} style={{ color: "#F0F2F5" }}>
                                                                        Subscription 3 months</h3>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                        <div >
                                                            <Row gutter={15} align="bottom" >
                                                                <Col span={24} style={{ fontSize: "70px", color: "#293241" }}>
                                                                    0 <Text style={{ fontSize: "20px", color: "#293241" }}>USD</Text>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col span="24" style={{ fontSize: '18px' }}>
                                                                    per month
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col span={20} offset={2}>
                                                                    <div style={{ padding: '10px 0px 15px 0px' }}>
                                                                        <hr className={styles.hr2} style={{ backgroundColor: "#0076BE" }} />
                                                                    </div>
                                                                </Col>
                                                            </Row>

                                                            <Row>
                                                                <Col span={24} style={{ fontWeight: "bolder" }}>
                                                                    Number of Users
                                                                </Col>
                                                            </Row>
                                                            <Row>

                                                                <Col span={20} offset={2} style={{ padding: '30px 0px 0px 0px' }}>
                                                                    <Select
                                                                        style={{ width: '100%' }}
                                                                        onChange={handleChange}
                                                                        placeholder="Select a plan"
                                                                        bordered={false}
                                                                        className={styles.select}

                                                                    >
                                                                        <Option value="jack" className={styles.select} >
                                                                            1 user + 0 USD/month</Option>
                                                                        <Option value="lucy" className={styles.select}>
                                                                            5 user + 0 USD/month</Option>
                                                                        <Option value="disabled" className={styles.select}>
                                                                            10 user + 0 USD/month</Option>
                                                                    </Select>
                                                                </Col>
                                                            </Row>

                                                            <Row>
                                                                <Col span={24} style={{ padding: '30px 0px 50px 0px' }}>
                                                                    <Button shape="round" className={styles.btn} >
                                                                        Register
                                                                    </Button>
                                                                </Col>

                                                            </Row>

                                                        </div>
                                                    </div>

                                                </Col>

                                                <Col lg={{ span: 6 }} md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}
                                                    style={{ padding: '0 0 20px' }}>

                                                    <div className={styles.sec7} >
                                                        <Row >
                                                            <Col span={24}>
                                                                <div style={{
                                                                    padding: '15px 0px 10px 0',
                                                                    backgroundColor: "#EE6C4D",
                                                                    borderTopRightRadius: '10px',
                                                                    borderTopLeftRadius: '10px'
                                                                }} >
                                                                    <h3 className={styles.h3} style={{ color: "#F0F2F5" }}>
                                                                        Subscription 12 months</h3>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                        <div >
                                                            <Row gutter={15} align="bottom" >
                                                                <Col span={24} style={{ fontSize: "70px", color: '#EE6C4D' }}>
                                                                    0 <Text style={{ fontSize: "20px", color: '#EE6C4D' }}>USD</Text>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col span="24" style={{ fontSize: '18px' }}>
                                                                    per month
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col span={20} offset={2}>
                                                                    <div style={{ padding: '10px 0px 15px 0px' }}>
                                                                        <hr className={styles.hr2} style={{ backgroundColor: "#0076BE" }} />
                                                                    </div>
                                                                </Col>
                                                            </Row>

                                                            <Row>
                                                                <Col span={24} style={{ fontWeight: "bolder" }}>
                                                                    Number of Users
                                                                </Col>
                                                            </Row>
                                                            <Row>

                                                                <Col span={20} offset={2} style={{ padding: '30px 0px 0px 0px' }}>
                                                                    <Select
                                                                        style={{ width: '100%' }}
                                                                        onChange={handleChange}
                                                                        placeholder="Select a plan"
                                                                        bordered={false}
                                                                        className={styles.select}

                                                                    >
                                                                        <Option value="jack" className={styles.select}>
                                                                            1 user + 0 USD/month</Option>
                                                                        <Option value="lucy" className={styles.select}>
                                                                            5 user + 0 USD/month</Option>
                                                                        <Option value="disabled" className={styles.select}>
                                                                            10 user + 0 USD/month</Option>
                                                                    </Select>
                                                                </Col>
                                                            </Row>

                                                            <Row>
                                                                <Col span={24} style={{ padding: '30px 0px 50px 0px' }}>
                                                                    <Button shape="round" className={styles.btn} >
                                                                        Register
                                                                    </Button>
                                                                </Col>

                                                            </Row>

                                                        </div>
                                                    </div>

                                                </Col>

                                            </Row>
                                        </div>
                                    </Col>
                                </Row>

                            </div>
                        </section>

                        {/* Section 8 */}
                        <section id='contact'>

                            <div className={styles.contact}>

                                <Row style={{ padding: '0px 0px 20px 0px' }}>
                                    <Col span={18} offset={4} style={{ fontSize: "30px" }}>
                                        Contact
                                    </Col>
                                </Row>

                                <Row >
                                    <Col span={16} offset={4}>
                                        <Row gutter={15}>

                                            <Col lg={{ span: 12 }} md={{ span: 24 }} xs={{ span: 24 }}
                                                style={{ padding: '0px 0px 30px 0px' }}>
                                                <Row align='middle' style={{ padding: '0px 0px 20px 0px' }}>

                                                    <Col span={3}>
                                                        <FiMail size={30} />
                                                    </Col>

                                                    <Col span={21}>
                                                        <a href="#" className={styles.link2}>info @inoovalab.org</a>
                                                    </Col>
                                                </Row>

                                                <Row style={{ padding: '0px 0px 30px 0px' }}>
                                                    <Col span={3}>
                                                        <IoLocationOutline size={30} />
                                                    </Col>

                                                    <Col span={21}>
                                                        Inoovalab Technologies (Pvt) Ltd, <br />
                                                        No.11, <br />
                                                        Castle Lane, <br />
                                                        Colombo 04, <br />
                                                        Sri Lanka<br />
                                                    </Col>
                                                </Row>

                                                <Row style={{ padding: '0px 0px 20px 0px' }} >

                                                    <Col span={3} >
                                                        <div className={styles.circle}>
                                                            <FaFacebookF size={20} />
                                                        </div>
                                                    </Col>
                                                    <Col span={3}>
                                                        <div className={styles.circle}>
                                                            <FaInstagram size={20} />
                                                        </div>
                                                    </Col>
                                                    <Col span={3}>
                                                        <div className={styles.circle}>
                                                            <FaLinkedinIn size={20} />
                                                        </div>
                                                    </Col>
                                                    <Col span={3}>
                                                        <div className={styles.circle}>
                                                            <FaTwitter size={20} />
                                                        </div>
                                                    </Col>

                                                </Row>
                                            </Col>

                                            <Col lg={{ span: 12 }} md={{ span: 24 }} xs={{ span: 24 }}>
                                                <Row style={{ padding: '0px 0px 20px 0px' }}>
                                                    Do you need more information?<br />
                                                    Fill out the form, we will contact you soon.
                                                </Row>

                                                <Row >
                                                    <Col span={24} >
                                                        <Form onFinish={onFinish} validateMessages={validateMessages}>
                                                            <Form.Item
                                                                name={['name']}
                                                                rules={[{ required: true, },]}>
                                                                <Input placeholder="Name and surname *" />
                                                            </Form.Item>
                                                            <Form.Item
                                                                name={['email']}
                                                                rules={[{
                                                                    required: true,
                                                                    type: 'email'
                                                                }]}>
                                                                <Input placeholder="Email address *" />
                                                            </Form.Item>
                                                            <Form.Item
                                                                name={['contact']}>
                                                                <Input placeholder="Phone to call back (optional)" />
                                                            </Form.Item>
                                                            <Form.Item
                                                                name={['Message']}
                                                                rules={[
                                                                    { required: true, },
                                                                ]}>
                                                                <Input.TextArea placeholder="Message content *" />
                                                            </Form.Item>
                                                            <Form.Item style={{ color: '#F0F2F5' }}>
                                                                By providing your data in the above form,
                                                                you agree to having your personal data processed.
                                                                More information can be found in the Privacy Policy.
                                                            </Form.Item>
                                                            <Form.Item style={{ textAlign: 'end' }}>
                                                                <Button shape="round" className={styles.btnReg} htmlType="submit" >
                                                                    Go to pro version
                                                                </Button>
                                                            </Form.Item>


                                                        </Form>
                                                    </Col>
                                                </Row>

                                            </Col>


                                        </Row>

                                    </Col>
                                </Row>

                            </div>
                        </section>
                    </div>

                </Content>

            </Layout >


        </>
    )
}