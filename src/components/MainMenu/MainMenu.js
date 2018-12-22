import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../../styles/MenuEntryStyle';
import MenuEntry from './MenuEntry';
import styles from '../../styles/MenuStyle';
import { MenuEntries } from '../../static/MenuEntries';

export default class MainMenu extends Component {

    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: 0
        };
    }

    _renderItem ({item, index}) {
        return <MenuEntry data={item}/>;
    }

    render () {
        //The pictures are from MenuEntries
        const { slider1ActiveSlide } = this.state;
        return (
            <View style={styles.exampleContainer}>
                <Carousel
                  ref={c => this._slider1Ref = c}
                  data={MenuEntries}
                  renderItem={this._renderItem}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  firstItem={this.state.slider1ActiveSlide}
                  inactiveSlideScale={0.94}
                  inactiveSlideOpacity={0.7}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  loop={false}
                  loopClonesPerSide={2}
                  onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                />
                <Pagination
                  dotsLength={MenuEntries.length}
                  activeDotIndex={slider1ActiveSlide}
                  containerStyle={styles.paginationContainer}
                  dotColor={"white"}
                  dotStyle={styles.paginationDot}
                  inactiveDotColor={"white"}
                  inactiveDotOpacity={0.4}
                  inactiveDotScale={0.6}
                  carouselRef={this._slider1Ref}
                  tappableDots={!!this._slider1Ref}
                />
            </View>
        );
    }
}
