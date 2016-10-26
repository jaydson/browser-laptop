/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

const React = require('react')

class siteRemovalNotification extends React.Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return <div className='siteRemovalNotification'>
      <span className='notification' data-l10n-id='thumbRemoved' />
      <a className='siteRemovalAction' href='#' data-l10n-id='undoRemoved' />
      <a className='siteRemovalAction' href='#' data-l10n-id='restoreAll' />
      <a className='fa fa-close' href='#' data-l10n-id='close' />
    </div>
  }
}
module.exports = siteRemovalNotification
