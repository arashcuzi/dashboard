import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Card, CardHeader, CardText} from 'material-ui/Card';

const PostAnything = ({ title, style, subtitle, image, text, message }) => (
  <Card style={ style ? style : {margin: 10} } containerStyle={{borderRadius: 0, backgroundColor: '#7d0000'}}>
    <CardHeader
      titleColor="#cecece"
      subtitleColor="#cecece"
      title={title}
      subtitle={subtitle}
      avatar={image}
    />
    <CardText
      color="#cecece"
    >
      {text}
    </CardText>
  </Card>
);

const mapStateToProps = state => ({
  message: state.postAnything.message,
})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostAnything)
