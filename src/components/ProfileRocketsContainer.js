/* eslint max-len: 0 */
import React from 'react';
import { useSelector } from 'react-redux';
import {
  Tab, Row, Col, ListGroup,
} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import ProfileRocketsTop from './ProfileRocketsTop';
import ProfileRocketsBottom from './ProfileRocketsBottom';

const ProfileRocketsContainer = () => {
  const rockets = useSelector((state) => state.spaceReducer.rockets);
  return (
    <div>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#">
        <Row>
          <Col sm={4} className="mx-5">
            <ListGroup mx={4}>
              {rockets.map((rocket) => (
                rocket.reserved ? <ProfileRocketsTop rocket={rocket} key={uuidv4()} /> : null
              ))}
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={4} className="mx-5">
            <Tab.Content>
              {rockets.map((rocket) => (
                rocket.reserved ? <ProfileRocketsBottom rocket={rocket} key={uuidv4()} /> : null
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>

    </div>
  );
};

export default ProfileRocketsContainer;
