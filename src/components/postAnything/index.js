import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { postAnything } from '../../modules/postAnything';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const PostAnything = (props) => (
  <div style={{margin: 10}}>
    <Card>
      <CardHeader
        title="Jenkins"
        subtitle="Your build status, sir..."
        avatar="images/jenkins.jpeg"
      />
      <CardText>
        { props.message }
      </CardText>
    </Card>
  </div>
);

const mapStateToProps = state => ({
  message: state.postAnything.message,
})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostAnything)
