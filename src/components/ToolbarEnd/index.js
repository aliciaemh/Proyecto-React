import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import Container from '@material-ui/core/Container';
import React from 'react';

class ToolbarEnd extends React.Component {
    render() {
        return (
            <Container  className ="toolbarEndStyle"  arrow placement="bottom">
                <Container className ="toolbarEndButton" align = "center" height= "50px">
                    <SkipPreviousIcon  />
                    <PlayCircleFilledIcon />
                    <SkipNextIcon />
                </Container>
            </Container>
        )
    }
};

export default ToolbarEnd