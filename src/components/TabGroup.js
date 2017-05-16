import React, { Children, cloneElement } from 'react';

class TabGroup extends React.Component {
	constructor( props ) {
		super( props )
		this.state = {
			selected: null
		};
	}

	onClick( i ) {
		this.setState( { selected: i } )
	}

	render() {

		// DO ERROR CHECKS!!

		return (
			<div className="tab-group">
				{ Children.map( this.props.children, ( child, index ) => cloneElement( child, {
					selected: this.state.selected === index,
					onClick: this.onClick.bind( this ),
					index
				} ) ) }
			</div>
		)
	}
}

export default TabGroup;
