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
		return (
			<div className="tab-group">
				{ Children.map( this.props.children, ( child, i ) => cloneElement( child, {
					selected: this.state.selected === i,
					onClick: () => this.onClick( i )
				} ) ) }
			</div>
		)
	}
}

export default TabGroup;
