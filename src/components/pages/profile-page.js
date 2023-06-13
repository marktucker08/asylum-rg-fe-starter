import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

export const ProfilePage = () => {
  const { user } = useAuth0();

  if (!user) {
    return null;
  }

  return (
    <div className="content-layout" style={{ textAlign: 'center' }}>
      <h1 id="page-title" className="content__title">
        Profile Page
      </h1>
      <div className="content__body">
        <p id="page-description">
          <span>
            You can use the <strong>ID Token</strong> to get the profile
            information of an authenticated user.
          </span>
        </p>
        <p>
          <span>
            <strong>Only authenticated users can access this page.</strong>
          </span>
        </p>
        <div className="profile-grid">
          <div className="profile__header">
            <img src={user.picture} alt="Profile" className="profile__avatar" />
            <div className="profile__headline">
              <h2 className="profile__title">{user.name}</h2>
              <span className="profile__description">{user.email}</span>
            </div>
          </div>
          {/* <div className="profile__details">
            <div className="code-snippet">
                <span className="code-snippet__title">{user.title}</span>
                    <div className="code-snippet__container">
                        <div className="code-snippet__wrapper">
                            <pre className="code-snippet__body">{user.code}</pre>
                        </div>
                    </div>
                </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};