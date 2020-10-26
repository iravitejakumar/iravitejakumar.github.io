import React from 'react';
import PropTypes from 'prop-types';
import FadeIn from './FadeIn';
import { FaTwitter, FaMedium, FaGithub, FaLinkedinIn, FaGlobe, FaStackOverflow } from 'react-icons/fa';

let CONTACT_DETAILS = [];
CONTACT_DETAILS.push(['https://github.com/iravitejakumar', <FaGithub />, 'Github']);             // GITHUB_URL
CONTACT_DETAILS.push(['https://linkedin.com/in/iravitejakumar/', <FaLinkedinIn />, 'LinkedIn']);           // LINKEDIN_URL
CONTACT_DETAILS.push(['https://stackoverflow.com/users/6701984/isetty-ravitejakumar', <FaStackOverflow />, 'StackOverflow']);           // LINKEDIN_URL
CONTACT_DETAILS.push(['https://medium.com/@iravitejakumar', <FaMedium />, 'Medium']);           // Medium URL
CONTACT_DETAILS.push(['https://twitter.com/iravitejakumar', <FaTwitter />, 'Twitter']);            // TWITTER_URL
CONTACT_DETAILS.push(['https://iravitejakumar.github.io', <FaGlobe />, 'Website']);            // WEB_URL

const ContactMe = ({ theme }) => {
  return (
    <div className="width100 textcenter padT10 oh ">
      <FadeIn style={{ animationDelay: '0.25s' }}>
        {CONTACT_DETAILS.map((contactItem) => {
          const url = contactItem[0];
          const ICON = contactItem[1];
          const title = contactItem[2];
          return (
            <div key={title} className=" marginLR15 inbl scaleOnHover ico25">
              <a href={url} title={title} target="_blank" rel="noopener noreferrer">
                {ICON}
              </a>
            </div>
          )
        })}
      </FadeIn>
    </div>
  );
}

ContactMe.propTypes = {
  theme: PropTypes.string
};

export default ContactMe;