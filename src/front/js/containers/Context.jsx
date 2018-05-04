import React, { Component } from 'react';

// first we will make a new context
export const MyContext = React.createContext();

// Then create a provider Component
class MyProvider extends Component {
    constructor(props){
        super(props);
        this.state = {
            width: '100%',
            home_url: "",
            logo_url: "",
            plugin_url: "",
            projects: []
        }
    }

    componentDidMount() {
        fetch("./wp-json/mbwp-topbar/v1/api")
            .then(res => res.json())
            .then((result) => {
                this.setState({ is_loaded: true, projects: result.projects, logo_url: result.logo_url, plugin_url: result.plugin_url, home_url: result.home_url });
            },
                // Note: it's important to handle errors here instead of a catch() block so that
                // we don't swallow exceptions from actual bugs in components.
                (error) => {
                    this.setState({ is_loaded: true, error });
                })
    }

    render() {
        return (
            <MyContext.Provider value={{
                wp_api: this.state,
                changeWidth: (width) => this.setState({
                    width: width
                })
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}
export default MyProvider;