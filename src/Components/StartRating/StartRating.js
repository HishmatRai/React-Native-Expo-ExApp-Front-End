//This is an example code to make a Star Rating Bar // 
import React, { Component } from 'react';
//import react in our code. 
import {
    StyleSheet,
    View,
    Platform,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
//import all the components we are going to use.

export default class Myapp extends Component<{}> {
    constructor() {
        super();
        this.state = {
            Default_Rating: 3,
            //To set the default Star Selected
            Max_Rating: 3,
            //To set the max number of Stars
        };
        //Filled Star. You can also give the path from local
        this.Star = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';

        //Empty Star. You can also give the path from local
        this.Star_With_Border = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';
    }
    UpdateRating(key) {
        this.setState({ Default_Rating: key });
        //Keeping the Rating Selected in state
    }
    render() {
        let React_Native_Rating_Bar = [];
        //Array to hold the filled or empty Stars
        for (var i = 1; i <= this.state.Max_Rating; i++) {
            React_Native_Rating_Bar.push(
                <TouchableOpacity
                    activeOpacity={0.7}
                    key={i}
                    onPress={this.UpdateRating.bind(this, i)}>
                    <Image
                        style={styles.StarImage}
                        source={
                            i <= this.state.Default_Rating
                                ? { uri: this.Star }
                                : { uri: this.Star_With_Border }
                        }
                    />
                </TouchableOpacity>
            );
        }
        return (
            <View style={styles.MainContainer}>
                {/*View to hold our Stars*/}
                <View style={{ flexDirection: "row", alignItems: "center"}}>
                    <View style={styles.childView}>{React_Native_Rating_Bar}</View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 20 : 0,
    },
    childView: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    StarImage: {
        width: 16,
        height: 16,
        resizeMode: 'cover',
        marginRight: 10
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 15,
        color: '#FFDD00',
        marginRight: 2
    },
    _rating_counter: {
        color: "#FFDD00",
        fontSize: 15,
        marginRight: 10
    }
});