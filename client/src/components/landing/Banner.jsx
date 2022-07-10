import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import { Button } from 'antd';
import BannerImage from './BannerImage';
import { USER_TOKEN } from '../../constants';
import "./styles.css"

class Banner extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
  };
  static defaultProps = {
    className: 'home-banner',
  };
  render() {
    const { className } = this.props;
    const token = localStorage.getItem(USER_TOKEN);
    return (
      <div className={`home-layout-wrapper ${className}`}>
        <div className="home-layout">
          <QueueAnim
            className={`${className}-content-wrapper`}
            delay={300}
            ease="easeOutQuart"
          >
            <h1 key="h2">Treasury</h1>
            <p key="p">
              Insightful Financial Decisions
            </p>
            <span key="button">
              <Link to="/register">
                <Button
                  type="primary"
                  shape="round"
                  onClick={() => {
                    window.location.href = '/register';
                  }}
                >
                  Sign up
                </Button>
              </Link>
              {token ? (
                <Link to="/login">
                  <Button
                    type="primary"
                    shape="round"
                    onClick={() => {
                      window.location.href = '/dashboard';
                    }}
                  >
                    Dashboard
                  </Button>
                </Link>
              ) : (
                <Link to="/login">
                  <Button
                    type="primary"
                    shape="round"
                    onClick={() => {
                      window.location.href = '/login';
                    }}
                  >
                    Login
                  </Button>
                </Link>
              )}
            </span>
          </QueueAnim>
          <div className={`${className}-image-wrapper`}>
            <img className="image" src={require('./image.svg')} />
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
