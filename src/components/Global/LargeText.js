import {Text, Platform} from "react-native";
import React, {Component} from "react"
import {withMappedNavigationProps} from "react-navigation-props-mapper";

class LargeText extends Component {

    generateTextStyle() {
        const ios = Platform.OS === 'ios';
        let style = {
            fontFamily: 'System',
            color: "#000000",
        };
        if(!ios) {
            style = {
                fontFamily: 'Roboto',
                color: "#000000",
            }
        }
        return {...style, ...this.props.style, fontSize:50};
    }

    render() {
        return (
            <Text style={this.generateTextStyle()}>
                {this.props.children}
            </Text>
        );
    }
}

export default withMappedNavigationProps()(LargeText);
