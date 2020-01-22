import React from 'react';

export default class About extends React.Component {
  render() {
    return (<div className="about">
      <div>
        <h3>We build stuff together.</h3>
        <p>Join a community of entrepreneurs that are passionate for building beautiful, usefull, passionate products.</p>
      </div>
      <div className="content">
        <div>
          <div>
            <p>img</p>
          </div>
          <div>
            <h4>Track your progress</h4>
            <p>Share what you're working on and track your progress by using simple To Do lists to organize your goals.</p>
          </div>
        </div>
        <div>
          <div>
            <h4>Discover</h4>
            <p>See what others are working on and check out their progress, discover projects that need a cofounder or just get in touch with like-minded makers.</p>
          </div>
          <div>
            <p>img</p>
          </div>
        </div>
        <div>
          <div>
            <p>img</p>
          </div>
          <div>
            <h4>Launch together</h4>
            <p>Use Indie Makers to keep you accountable and motivated when making products, join a community focused on FINISHING and launching beautiful products.</p>
          </div>
        </div>
      </div>
    </div>);
  }
}
