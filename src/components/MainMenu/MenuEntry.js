import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, Platform } from 'react-native';
import PropTypes from 'prop-types';
import styles from './MenuStyle';
import LevelButton from "./LevelButton";
import Wave from '../Wave/Wave';
import Profile from "./Profile";


const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default class MenuEntry extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
    };

    levelButtonProps = {
        columns: 2,
        widthPercentage: 95,
        heightPercentage: 50,
        buttonMargin: 5,
    };

    generateButtons(){
        const { data: { levels }} = this.props;
        return (levels.map(
            (level) => {
                combinedProps = {...this.levelButtonProps, ...level};
                return [
                      <LevelButton {...combinedProps}/>
                ]
            }
        ))
    }


    levelButtonsStyling(){
        return {
            width: viewportWidth * this.levelButtonProps.widthPercentage * 0.01,
            height: viewportHeight * this.levelButtonProps.heightPercentage * 0.01,
            transform: [
                {translateY: viewportHeight * 0.2}
            ],
            flexDirection: "row",
            flexWrap: "wrap",
        }
    }


    render () {
        const { data: { title, subtitle, levels, waveCount }} = this.props;
        if(title === undefined){
            return (<Profile/>)
        }
        return (
            <View style = {styles.slideInnerContainer}>
                <View style = {styles.waveBackground}>
                    <Wave startAnimation={true} stopAnimation={false}
                            waveColor={'#000000'}
                            backgroundColor={'#ffffff'}
                            numberOfWaves={2}
                            primaryWaveLineWidth={Platform.OS === 'ios' ? 0.25 : 100}
                            amplitude={0.25}
                            height={100}/>
                </View>
                <View style = {this.levelButtonsStyling()}>
                    { this.generateButtons() }
                </View>
                <View style = {styles.titles}>
                    <Text style = {styles.titleText}>{ title.toUpperCase() }</Text>
                    <Text style = {styles.subtitleText}>{ subtitle.toLowerCase() }</Text>
                </View>
            </View>

        );
    }
}
