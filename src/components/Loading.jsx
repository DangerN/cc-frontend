import React from 'react'

export default props => {
  const {type} = props
  const loading = {
    'thread': () => {
      return (
        <div>
          tis loadin ah hupe
        </div>
      )
    }
  }[type]()
  return loading
}
