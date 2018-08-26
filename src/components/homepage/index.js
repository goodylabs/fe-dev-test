// @flow
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

type AppComponentPropsType = {};

/**
 * Home page component
 *
 * @class AppComponent
 * @extends {Component<AppComponentPropsType>}
 */
class AppComponent extends Component<AppComponentPropsType> {
  /**
   *
   *
   * @returns {React$Element<any>}
   * @memberof AppComponent
   */
  render(): React$Element<any> {
    const markdown = `### STACK:
      \n---
      \n+ yarn
      \n+ flow
      \n+ webpack
      \n+ react
      \n+ redux
      \n+ redux-thunk
      \n+ scss (bem methodology)
      \n+ es6
      \n\n### TODO:
      \n---
      \n#### JS/HTML Part:
      \n+ create users list page - using API endpoint
      \n+ create signup form (we preffer using redux-form module) with API integration. **FIELDS:**
        * first name (required),
        * last name (required),
        * email (required)
      \n+ fix: sass compilator doesn't work
      \n+ highlight current active navigation item

      \n#### CSS Part:
      \n+ stick page header to the top - independent on scroll position
      \n+ write a (scss) mixin that will calc & return font-size based on rem with px fallback for older browsers
      \n+ highlight current active
      \n+ prettify whole app as you want

      \n---
      \n### MOCKED API ROUTES:
      \n+ users list: http://fe-test.getsandbox.com/users [GET]
      \n+ user details:  http://fe-test.getsandbox.com/users/{username} [GET]
      \n+ signup: http://fe-test.getsandbox.com/sign-up [POST]

      \n---

      \n**Please pay attention to flow types and eslint warnings / errors.**`;

    return (
      <span>
        <h1 className="t-center header header--main">Simple react (redux) & webpack app</h1>
        <h2 className="t-center">
          { 'Want to become a goodymember, let\'s try to finish this simple app.' }
        </h2>

        <div className="section">
          <ReactMarkdown source={markdown} className="markdown-text" />
        </div>

        <h3 className="t-right t-separated">Good luck,<br/> <strong>GL Team</strong></h3>
      </span>
    );
  }
}

export default AppComponent;
