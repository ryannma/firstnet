import React, {
  Component,
} from 'react';

import {
  LayoutAnimation,
  UIManager,
  View,
} from 'react-native';

import FoldView from 'react-native-foldview';

import InfoCard from './InfoCard';
import PhotoCard from './PhotoCard';
import ProfileCard from './ProfileCard';

// Enable LayoutAnimation on Android
if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const ROW_HEIGHT = 180;

const Spacer = ({ height }) => (
  <View
    pointerEvents="none"
    style={{
      height,
    }}
  />
);

export default class Row extends Component {

  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      isHidden: false,
      height: ROW_HEIGHT,
    };
  }

  componentWillMount() {
    this.flip = this.flip.bind(this);
    this.handleAnimationStart = this.handleAnimationStart.bind(this);
    this.renderFrontface = this.renderFrontface.bind(this);
    this.renderBackface = this.renderBackface.bind(this);
    this.acceptIncident = this.acceptIncident.bind(this);
  }

  flip() {
    this.setState({
      expanded: !this.state.expanded,
    });
  }

  acceptIncident() {
    this.flip();
    this.state.isHidden = true;
  }

  handleAnimationStart(duration, height) {
    const isExpanding = this.state.expanded;

    const animationConfig = {
      duration,
      update: {
        type: isExpanding ? LayoutAnimation.Types.easeOut : LayoutAnimation.Types.easeIn,
        property: LayoutAnimation.Properties.height,
      },
    };

    LayoutAnimation.configureNext(animationConfig);

    this.setState({
      height,
    });
  }

  renderFrontface() {
    return (
      <InfoCard onPress={this.flip}
                incident={this.props.data}/>
    );
  }

  renderBackface() {
    return (
      <ProfileCard onPress={this.acceptIncident}
                incident={this.props.data}/>
    );
  }

  render() {
    const { height } = this.state;
    const { zIndex } = this.props.zIndex;
    const incident = this.props.data;

    const spacerHeight = height - ROW_HEIGHT;

    return (
      <View
        style={{
          flex: 1,
          zIndex,
        }}
      >
        <View
          style={{
            height: ROW_HEIGHT,
            margin: 10,
          }}
        >
          <FoldView
            expanded={this.state.expanded}
            onAnimationStart={this.handleAnimationStart}
            perspective={1000}
            renderBackface={this.renderBackface}
            renderFrontface={this.renderFrontface}
            incident = {incident}
          >
            <PhotoCard onPress={this.flip}
                       incident={incident} />
          </FoldView>

        </View>

        <Spacer height={spacerHeight} />
      </View>
    );
  }
}
