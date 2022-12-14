import React from 'react';
import { Col, Row } from 'react-bootstrap';

import appstore from '../../../assets/appstore.png';
import gplay from '../../../assets/android.png';
import Logo from '../../../assets/logo.png';
import SubscriptionForm from '../SubscriptionForm/SubscriptionForm';

const FooterColumns = ({ data }) => (
    <Row className="d-none d-md-flex d-lg-flex">
        <Col>
            <ul className="main-footer-list">
                <li className="main-footer-list-first-item">
                    <img src={Logo} alt="" />
                </li>
                <li>
                    <strong>
                        Download
                        <br />
                        Tiramisu App
                    </strong>
                </li>
                <li>
                    <a
                        target="_blank"
                        href={data.google_play_url}
                        rel="noreferrer"
                    >
                        <img src={gplay} alt="" className="store-img" />
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        href={data.app_store_url}
                        rel="noreferrer"
                    >
                        <img src={appstore} alt="" className="store-img" />
                    </a>
                </li>
            </ul>
        </Col>
        <Col>
            <ul className="main-footer-list">
                <li className="main-footer-list-first-item">
                    {data.footer_1_column_header}
                </li>
                {data.footer_1_column.map((item) => (
                    <li key={item.text}>
                        <a target="_blank" href={item.url} rel="noreferrer">
                            {item.text}
                        </a>
                    </li>
                ))}
            </ul>
        </Col>
        <Col>
            <ul className="main-footer-list">
                <li className="main-footer-list-first-item">
                    {data.footer_2_column_header}
                </li>
                {data.footer_2_column.map((item) => (
                    <li key={item.text}>
                        <a target="_blank" href={item.url} rel="noreferrer">
                            {item.text}
                        </a>
                    </li>
                ))}
            </ul>
        </Col>
        <Col>
            <ul className="main-footer-list">
                <li className="main-footer-list-first-item">
                    {data.footer_3_column_header}
                </li>
                {data.footer_3_column.map((item) => (
                    <li key={item.text}>
                        <a target="_blank" href={item.url} rel="noreferrer">
                            {item.text}
                        </a>
                    </li>
                ))}
            </ul>
        </Col>
        <Col lg={4}>
            <ul className="main-footer-list">
                <li className="main-footer-list-first-item">Subscribe</li>
                <SubscriptionForm />
            </ul>
        </Col>
    </Row>
);

export default FooterColumns;
