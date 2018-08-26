// @flow
import React from 'react';
import { Row, Col, Card } from 'antd';

// styles
import 'antd/lib/card/style/css';

/**
 * Contact container.
 */
const ContactPage = (): ?React$Element<any> => (
  <div>
    <h1>Contact</h1>
    <Row type="flex" align="center" justify="center">
      <Col xs={24} lg={12}>
        <Card style={{ padding: window.innerWidth < 768 ? 0 : 30 }}>
          <Row gutter={16}>
            <Col xs={24} lg={12}>
              +48 604 190 441<br/>
              +48 501 035 180<br/>
              +48 507 033 369<br/><br/>
            </Col>
            <Col xs={24} lg={12}>
              goodylabs sp. z o.o.<br/>
              Andrzeja Struga 78<br/>
              90-557 Łódź, Polska<br/>
              <a href="mailto:goodies@goodylabs.com">goodies@goodylabs.com</a>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  </div>
);

export default ContactPage;

