import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes} className="light">
      <script
        dangerouslySetInnerHTML={{ 
          __html: `
            (function(){
              if (typeof(window) !== 'undefined') {
                const themeName = window.localStorage.getItem('dkBlogTheme');
                if (!themeName || (themeName !== 'light' && themeName !=='dark')) {
                  window.localStorage.setItem('dkBlogTheme', 'light');
                  document.body.className = 'light';
                  window.__dkBlogTheme = 'light';
                  return 'light';
                }
                window.__dkBlogTheme = themeName;
                document.body.className = themeName;
              }
            })()`
          }} />
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
      <script dangerouslySetInnerHTML={{
        __html:`
          (function() {
            if (document.location.hostname.includes('dhilipkmr')) {
              const script = document.createElement('script');
              script.src = 'https://www.googletagmanager.com/gtag/js?id=UA-137704645-1';
              script.async = true;
              document.body.appendChild(script);
              window.dataLayer = window.dataLayer || [];
              function gtag(){
                dataLayer.push(arguments);
              }
              gtag('js', new Date());
              gtag('config', 'UA-137704645-1');
            }
          })()
        `
      }}/>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
