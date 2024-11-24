import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "center",
    },

    workspace: {
        height: '100%',
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: 20,
    },

    backgroundImage: {
        height: '100%',
    },

    input: {
        backgroundColor: "white",
        height: 50,
        borderRadius: 20,
        width: 350,
        paddingLeft: 25,
    },

    inputParent: {
        justifyContent: "center",
        alignSelf: "stretch",
    },

    unit: {
        position: "absolute",
        alignSelf: "flex-end",
        paddingRight: 25,
        fontSize: 30,
    },

    temperatureTxt: {
        fontSize: 70,
        color: "white",
    },

    button: {
        backgroundColor: "black",
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderRadius: 30,
        width: 250,
    },

    buttonTxt: {
        alignSelf: "center",
        fontWeight: "bold",
        color: "white",
    }
});