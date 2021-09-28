import Header from "./header";
import Footer from "./footer";
import 'antd/dist/antd.css';
import styles from '../styles/faq.module.css';
import { Col, Row, Collapse } from "antd";

const { Panel } = Collapse;


export default function Faq() {

    return (
        <>
            <Header />

            <Row style={{ backgroundColor: '#F0F2F5' }}>
                <Col span={18} offset={3} style={{ padding: '0 0 50px' }}>

                    <h1 className={styles.header}>
                        Frequently asked questions
                    </h1>

                    <Collapse bordered={false} ghost >

                        <Panel header="Learn more about ShippingOpt" className={styles.panel}>

                            <h3 className={styles.h}> What is ShippingOpt?</h3>
                            <p className={styles.p}>
                                ShippingOpt is an application that helps you plan
                                the arrangement of loads in any cargo space.
                            </p>

                            <h3 className={styles.h}> How does the application work?</h3>
                            <p className={styles.p}>
                                After logging in to the system, there will appear windows for
                                entering data and visualization.The work in the program starts with
                                choosing the cargo space – it can be a vehicle, container or another type.
                                You can select the space from the list or enter its dimensions manually.
                                Subsequently, loads are added – by selecting from the list, entering
                                dimensions manually or by importing loads from a CSV file. In result,
                                the best and optimal arrangement of the loads identified by
                                the user appears on the visualization. The detailed
                                instructions are available at our website: www.ShippingOpt.com/en/instruction/
                            </p>

                            <h3 className={styles.h}> What are the technical requirements of the application?</h3>
                            <p className={styles.p}>
                                The application works in the browser, on every computer
                                (also linux and MacOS) with Internet access. All you need to do is visit
                                www.ShippingOpt.com. The minimum screen width is 1260 px.
                            </p>

                            <h3 className={styles.h}> What is the difference between the freemium and PRO version
                                of ShippingOpt?</h3>
                            <p className={styles.p}>
                                In the freemium version the user can work with dimensions of loads
                                and cargo space available in the application. In the PRO version the
                                user can add custom dimensions of vehicles, containers, pallets or loads.
                            </p>


                            <h3 className={styles.h}> Is it possible to download the application on a
                                computer to use it offline?</h3>
                            <p className={styles.p}>
                                Unfortunately, no. At this point it is only possible to use the application
                                via a browser. To use the program, you also need internet access
                            </p>

                        </Panel>

                        <Panel header="Payments" className={styles.panel}>

                            <h3 className={styles.h}> What is ShippingOpt?</h3>
                            <p className={styles.p}>
                                ShippingOpt is an application that helps you plan
                                the arrangement of loads in any cargo space.
                            </p>

                            <h3 className={styles.h}> How does the application work?</h3>
                            <p className={styles.p}>
                                After logging in to the system, there will appear windows for
                                entering data and visualization.The work in the program starts with
                                choosing the cargo space – it can be a vehicle, container or another type.
                                You can select the space from the list or enter its dimensions manually.
                                Subsequently, loads are added – by selecting from the list, entering
                                dimensions manually or by importing loads from a CSV file. In result,
                                the best and optimal arrangement of the loads identified by
                                the user appears on the visualization. The detailed
                                instructions are available at our website: www.ShippingOpt.com/en/instruction/
                            </p>

                            <h3 className={styles.h}> What are the technical requirements of the application?</h3>
                            <p className={styles.p}>
                                The application works in the browser, on every computer
                                (also linux and MacOS) with Internet access. All you need to do is visit
                                www.ShippingOpt.com. The minimum screen width is 1260 px.
                            </p>

                            <h3 className={styles.h}> What is the difference between the freemium and PRO version
                                of ShippingOpt?</h3>
                            <p className={styles.p}>
                                In the freemium version the user can work with dimensions of loads
                                and cargo space available in the application. In the PRO version the
                                user can add custom dimensions of vehicles, containers, pallets or loads.
                            </p>


                            <h3 className={styles.h}> Is it possible to download the application on a
                                computer to use it offline?</h3>
                            <p className={styles.p}>
                                Unfortunately, no. At this point it is only possible to use the application
                                via a browser. To use the program, you also need internet access
                            </p>

                        </Panel>

                        <Panel header="Troubleshooting" className={styles.panel}>

                            <h3 className={styles.h}> What is ShippingOpt?</h3>
                            <p className={styles.p}>
                                ShippingOpt is an application that helps you plan
                                the arrangement of loads in any cargo space.
                            </p>

                            <h3 className={styles.h}> How does the application work?</h3>
                            <p className={styles.p}>
                                After logging in to the system, there will appear windows for
                                entering data and visualization.The work in the program starts with
                                choosing the cargo space – it can be a vehicle, container or another type.
                                You can select the space from the list or enter its dimensions manually.
                                Subsequently, loads are added – by selecting from the list, entering
                                dimensions manually or by importing loads from a CSV file. In result,
                                the best and optimal arrangement of the loads identified by
                                the user appears on the visualization. The detailed
                                instructions are available at our website: www.ShippingOpt.com/en/instruction/
                            </p>

                            <h3 className={styles.h}> What are the technical requirements of the application?</h3>
                            <p className={styles.p}>
                                The application works in the browser, on every computer
                                (also linux and MacOS) with Internet access. All you need to do is visit
                                www.ShippingOpt.com. The minimum screen width is 1260 px.
                            </p>

                            <h3 className={styles.h}> What is the difference between the freemium and PRO version
                                of ShippingOpt?</h3>
                            <p className={styles.p}>
                                In the freemium version the user can work with dimensions of loads
                                and cargo space available in the application. In the PRO version the
                                user can add custom dimensions of vehicles, containers, pallets or loads.
                            </p>


                            <h3 className={styles.h}> Is it possible to download the application on a
                                computer to use it offline?</h3>
                            <p className={styles.p}>
                                Unfortunately, no. At this point it is only possible to use the application
                                via a browser. To use the program, you also need internet access
                            </p>

                        </Panel>

                        <Panel header="Application functionality regarding the cargo" className={styles.panel}></Panel>

                        <Panel header="Application functionality regarding cargo space" className={styles.panel}></Panel>

                        <Panel header="Application functionality regarding sharing and printing" className={styles.panel}></Panel>

                        <Panel header="Other questions about the program functionalities" className={styles.panel}></Panel>

                        <Panel header="Do you want to learn more about ShippingOpt API?" className={styles.panel}></Panel>



                    </Collapse>




                </Col>
            </Row>



            <Footer />

        </>
    )

}