import { Image } from 'antd';
import { isEmpty } from 'lodash';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Logo from '../../assets/img/default.png';
import { appActions } from '../../config/actions';
import RoutePaths from '../../config/routes/RoutePaths';
import Login from '../../containers/Auth/Login';
import ResetPassword from '../../containers/Auth/ResetPassword';
import DataSpinner from '../common/DataSpinner';

const AuthLayout = () => {
  const [currentPage, setCurrentPage] = useState('login');

  return (
    <div className="text-primary overflow-auto">
      <Container fluid>
        <Row className="min-vh-100 justify-content-center py-4 g-0">
          <Col md={4} lg={3} sm={6} className="my-auto mx-center">
            <div className="mx-auto text-center">
              <Image
                src={`${process.env.REACT_APP_INSTITUTION_LOGO_PATH}/logo.png`}
                alt="System Logo"
                style={{ maxWidth: '200px' }}
                className="text-center"
                fallback={Logo}
                preview={false}
                draggable={false}
              />
            </div>
            <div className="align-centre mt-1 font600 text-uppercase text-md mb-4 mt-3">
              ADMIN PORTAL
            </div>
            {(currentPage === RoutePaths.login.path && (
              <Login setCurrentPage={setCurrentPage} />
            )) ||
              (currentPage === RoutePaths.resetPassword.path && (
                <ResetPassword setCurrentPage={setCurrentPage} />
              )) || <div>PAGE NOT FOUND</div>}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AuthLayout;
