import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import BlankScreen74212182Navigator from '../features/BlankScreen74212182/navigator';
import BlankScreen71211727Navigator from '../features/BlankScreen71211727/navigator';
import UserProfile211067Navigator from '../features/UserProfile211067/navigator';
import Tutorial211066Navigator from '../features/Tutorial211066/navigator';
import NotificationList211038Navigator from '../features/NotificationList211038/navigator';
import Settings211037Navigator from '../features/Settings211037/navigator';
import Settings211029Navigator from '../features/Settings211029/navigator';
import UserProfile211027Navigator from '../features/UserProfile211027/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
BlankScreen74212182: { screen: BlankScreen74212182Navigator },
BlankScreen71211727: { screen: BlankScreen71211727Navigator },
UserProfile211067: { screen: UserProfile211067Navigator },
Tutorial211066: { screen: Tutorial211066Navigator },
NotificationList211038: { screen: NotificationList211038Navigator },
Settings211037: { screen: Settings211037Navigator },
Settings211029: { screen: Settings211029Navigator },
UserProfile211027: { screen: UserProfile211027Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
