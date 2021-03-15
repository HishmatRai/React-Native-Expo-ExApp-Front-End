import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ProgressBarAndroid,
} from "react-native";

let padToTwo = (number) => (number <= 9 ? `0${number}` : number);

class StopwatchContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            min: 0,
            sec: 0,
            msec: 0,
        };

        this.lapArr = [];

        this.interval = null;
    }

    handleToggle = () => {
        this.setState(
            {
                start: !this.state.start,
            },
            () => this.handleStart()
        );
    };
    handleStop = () => {
        this.setState({
            start: !this.state.start,
        });
        clearInterval(this.interval);
    };

    handleStart = () => {
        if (this.state.start) {
            this.interval = setInterval(() => {
                if (this.state.msec !== 99) {
                    this.setState({
                        msec: this.state.msec + 1,
                    });
                } else if (this.state.sec !== 59) {
                    this.setState({
                        msec: 0,
                        sec: ++this.state.sec,
                    });
                } else {
                    this.setState({
                        msec: 0,
                        sec: 0,
                        min: ++this.state.min,
                    });
                }
            }, 1);
        } else {
            clearInterval(this.interval);
        }
    };

    handleReset = () => {
        this.setState({
            min: 0,
            sec: 0,
            msec: 0,

            start: false,
        });

        clearInterval(this.interval);

        this.lapArr = [];
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.parent}>
                    <Text style={styles.child}>
                        {"   " + padToTwo(this.state.min) + " : "}
                    </Text>
                    <Text style={styles.child}>{padToTwo(this.state.sec) + " : "}</Text>
                    <Text style={styles.child}>{padToTwo(this.state.msec)}</Text>
                </View>
                <ProgressBarAndroid
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={0.7}
                />

                <View style={styles.buttonParent}>
                    <TouchableOpacity
                        style={styles.startButton}
                        onPress={this.handleToggle}
                    >
                        <Text style={styles.buttonText}>Start Run</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.resetButton}
                        onPress={this.handleReset}
                    >
                        <Text style={styles.buttonText}>Reset</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.stopButton}
                        disabled={!this.state.start}
                        onPress={() => this.handleStop()}
                    >
                        <Text style={styles.buttonText}>Stop Run</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    parent: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        // alignSelf: "center",
    },

    child: {
        fontSize: 54,
        color: "black",
        fontWeight: "bold",
        marginLeft:-32
    },

    buttonParent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: "5%",
        marginBottom: "16%",
    },

    resetButton: {
        backgroundColor: "#A7A7A7",
        borderRadius: 10,
        elevation: 5,
        width: "20%",
        height: 40,
        display: "flex",
        justifyContent: "center",
    },

    buttonText: {
        color: "black",
        alignSelf: "center",
        fontWeight: "bold",
    },
    title: {
        fontSize: 30,
        textAlign: "center",
    },
    subTitle: {
        fontSize: 20,
        textAlign: "center",
    },
    stopButton: {
        backgroundColor: "#CC07BF",
        borderRadius: 10,
        elevation: 5,
        width: "35%",
        height: 40,
        display: "flex",
        justifyContent: "center",
    },
    startButton: {
        backgroundColor: "#31F10C",
        borderRadius: 10,
        elevation: 5,
        width: "35%",
        height: 40,
        display: "flex",
        justifyContent: "center",
    },
});

export default StopwatchContainer;
