import { AppRegistry } from 'react-native'

import App from '@reactnativemonorepo/core/src/App'

AppRegistry.registerComponent('myprojectname', () => App)
AppRegistry.runApplication('myprojectname', {
    rootTag: document.getElementById('root'),
})