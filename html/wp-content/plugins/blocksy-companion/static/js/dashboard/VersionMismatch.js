import { createElement, render, useState } from '@wordpress/element'
import * as check from '@wordpress/element'
import { __ } from 'ct-i18n'

const VersionMismatch = () => {
	const [isLoading, setIsLoading] = useState(false)

	return (
		<div className="ct-theme-required">
			<h2>
				<span>
					<svg viewBox="0 0 24 24">
						<path d="M12,23.6c-1.4,0-2.6-1-2.8-2.3L8.9,20h6.2l-0.3,1.3C14.6,22.6,13.4,23.6,12,23.6z M24,17.8H0l3.1-2c0.5-0.3,0.9-0.7,1.1-1.3c0.5-1,0.5-2.2,0.5-3.2V7.6c0-4.1,3.2-7.3,7.3-7.3s7.3,3.2,7.3,7.3v3.6c0,1.1,0.1,2.3,0.5,3.2c0.3,0.5,0.6,1,1.1,1.3L24,17.8zM6.1,15.6h11.8c0,0-0.1-0.1-0.1-0.2c-0.7-1.3-0.7-2.9-0.7-4.2V7.6c0-2.8-2.2-5.1-5.1-5.1c-2.8,0-5.1,2.2-5.1,5.1v3.6c0,1.3-0.1,2.9-0.7,4.2C6.1,15.5,6.1,15.6,6.1,15.6z" />
					</svg>
				</span>
				{__(
					'Action Required - Blocksy Theme and Companion version mismatch',
					'blocksy-companion'
				)}
			</h2>
			<p>
				{__(
					'We detected that you are using an outdated version of Blocksy Theme. Please update it to the latest version.',
					'blocksy-companion'
				)}
			</p>

			<p>
				{__(
					'In order to take full advantage of all features it has to offer - please install and activate the latest versions of both Blocksy theme and Blocksy Companion plugin.',
					'blocksy-companion'
				)}
			</p>

			<button
				className="button button-primary"
				onClick={(e) => {
					e.preventDefault()
					location = ctDashboardLocalizations.run_updates
				}}>
				{__('Update Now', 'blocksy-companion')}
			</button>
		</div>
	)
}

export default VersionMismatch
