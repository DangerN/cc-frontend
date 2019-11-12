import React from 'react'

export const FLAG_KEY = {
  'media': ['img', 'webm', 'embed']
}

export const SVG = {
  'rings': () => {
    return (
      <svg className='curtain' width="45" height="45" viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg" stroke="#000">
          <g fill="none" fillRule="evenodd" transform="translate(1 1)" strokeWidth="2">
              <circle cx="22" cy="22" r="6" strokeOpacity="0">
                  <animate attributeName="r"
                       begin="1.5s" dur="3s"
                       values="6;22"
                       calcMode="linear"
                       repeatCount="indefinite" />
                  <animate attributeName="stroke-opacity"
                       begin="1.5s" dur="3s"
                       values="1;0" calcMode="linear"
                       repeatCount="indefinite" />
                  <animate attributeName="stroke-width"
                       begin="1.5s" dur="3s"
                       values="2;0" calcMode="linear"
                       repeatCount="indefinite" />
              </circle>
              <circle cx="22" cy="22" r="6" strokeOpacity="0">
                  <animate attributeName="r"
                       begin="3s" dur="3s"
                       values="6;22"
                       calcMode="linear"
                       repeatCount="indefinite" />
                  <animate attributeName="stroke-opacity"
                       begin="3s" dur="3s"
                       values="1;0" calcMode="linear"
                       repeatCount="indefinite" />
                  <animate attributeName="stroke-width"
                       begin="3s" dur="3s"
                       values="2;0" calcMode="linear"
                       repeatCount="indefinite" />
              </circle>
              <circle cx="22" cy="22" r="8">
                  <animate attributeName="r"
                       begin="0s" dur="1.5s"
                       values="6;1;2;3;4;5;6"
                       calcMode="linear"
                       repeatCount="indefinite" />
              </circle>
          </g>
      </svg>
    )
  },
  'ballTriangle': () => {
    return (
      <svg className='curtain' width="57" height="57" viewBox="0 0 57 57" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
          <g fill="none" fill-rule="evenodd">
              <g transform="translate(1 1)" stroke-width="2">
                  <circle cx="5" cy="50" r="5">
                      <animate attributeName="cy"
                           begin="0s" dur="2.2s"
                           values="50;5;50;50"
                           calcMode="linear"
                           repeatCount="indefinite" />
                      <animate attributeName="cx"
                           begin="0s" dur="2.2s"
                           values="5;27;49;5"
                           calcMode="linear"
                           repeatCount="indefinite" />
                  </circle>
                  <circle cx="27" cy="5" r="5">
                      <animate attributeName="cy"
                           begin="0s" dur="2.2s"
                           from="5" to="5"
                           values="5;50;50;5"
                           calcMode="linear"
                           repeatCount="indefinite" />
                      <animate attributeName="cx"
                           begin="0s" dur="2.2s"
                           from="27" to="27"
                           values="27;49;5;27"
                           calcMode="linear"
                           repeatCount="indefinite" />
                  </circle>
                  <circle cx="49" cy="50" r="5">
                      <animate attributeName="cy"
                           begin="0s" dur="2.2s"
                           values="50;50;5;50"
                           calcMode="linear"
                           repeatCount="indefinite" />
                      <animate attributeName="cx"
                           from="49" to="49"
                           begin="0s" dur="2.2s"
                           values="49;5;27;49"
                           calcMode="linear"
                           repeatCount="indefinite" />
                  </circle>
              </g>
          </g>
      </svg>
    )
  }
}
