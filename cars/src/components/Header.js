// import libraries 
import React from "react";
import {Text, View} from "react-native";


//create component
const Header = (props) => {
    const {textStyling, viewStyle} = styles;  // destruction?

    return (
        <View style={viewStyle}>
            <Text style={textStyling}>{props.title}</Text>
        </View>
    );
    
}

const styles = {
    textStyling:{
        fontSize: 22,
    },

    viewStyle: {
        backgroundColor: 'gainsboro',
        height: 70,
        justifyContent: 'center',  // normalde sağa sola, react native'de aşağı yukarı.
        alignItems: 'center',  // normalde aşağı yukarı, react native'de sağa sola.
        paddingTop: 25,
    }
}

// make component available to other components
export default Header;
