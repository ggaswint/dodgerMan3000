import { Dimensions } from 'react-native';

export default Constants = {
    MAX_WIDTH: Dimensions.get('window').width > Dimensions.get('window').height ? Dimensions.get('window').width : Dimensions.get('window').height,
    MAX_HEIGHT: Dimensions.get('window').width > Dimensions.get('window').height ? Dimensions.get('window').height : Dimensions.get('window').width,
    GAP_SIZE: 200,
    PIPE_WIDTH: 100,
}