import {StyleSheet, Dimensions} from "react-native";
import * as colors from '../colors/index';

export const STYLES = StyleSheet.create({
    container: {
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height,
        backgroundColor: '#fff'
    },
    headView: {
        alignSelf: 'center',
        justifyContent: 'center',
        height: 40,
        width: '100%',
        backgroundColor: colors.PRIMARY,
    },
    headText: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    Heading: {
        color:colors.TEXT,
        fontSize: 35,
        fontWeight: 'bold',
        alignSelf: 'center',
        position: 'absolute',
        top: 40
        // bottom: 42
    },
    subHeading: {
        marginLeft: 10, 
        color: colors.SECONDARY, 
        fontSize: 20, 
        marginTop: 20, 
        fontWeight: 'bold'
    },
    appButton: {
        color:colors.TEXT,
        fontSize: 12,
        marginTop: 10,
        fontWeight: 'bold',
        backgroundColor: colors.PRIMARY,
        paddingVertical: 7,
        paddingHorizontal: 15,
        borderRadius: 5,
        bottom: 10,
        color: '#ffffff'
    },
    appButtonUsers: {
        color:colors.TEXT,
        fontSize: 12,
        marginTop: 10,
        fontWeight: 'bold',
        backgroundColor: colors.PRIMARY,
        paddingVertical: 7,
        paddingHorizontal: 12,
        borderRadius: 5,
        bottom: 10
    },
    textInputName: {
        marginLeft: 10, 
        color: colors.TEXT, 
        fontSize: 18, 
        alignItems: 'center', 
        fontWeight: 'bold'
    },
    inputNewR: {
        backgroundColor: 'white',
        borderWidth: 1,
        height: 40,
        width: '63%',
        bottom: 7,
        paddingHorizontal: 10,
        borderRadius: 5,
        borderColor: '#707070',
        fontFamily: 'Montserrat-Regular',
        fontSize: 12
    },
    input2NewR: {
        backgroundColor: 'white',
        borderWidth: 1,
        width: '63%',
        bottom: 7,
        paddingHorizontal: 10,
        borderRadius: 5,
        borderColor: '#707070',
        fontFamily: 'Montserrat-Regular',
    },
    inputReg: {
        backgroundColor: 'white',
        borderWidth: 1,
        height: Dimensions.get("screen").height / 26,
        width: Dimensions.get("screen").width / 4.3,
        bottom: 7,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5,
        borderColor: '#707070',
        fontFamily: 'Montserrat-Regular',
        fontSize: 10,
        margin: 2
    },
    inputNewAna: {
        backgroundColor: 'white',
        borderWidth: 1,
        height: 40,
        width: '48%',
        bottom: 7,
        paddingHorizontal: 10,
        borderRadius: 5,
        borderColor: '#707070',
        fontSize: 12,
        fontFamily: 'Montserrat-Regular',
    },
    input2NewAna: {
        backgroundColor: 'white',
        borderWidth: 1,
        height: 30,
        width: '30%',
        bottom: 7,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        borderColor: '#707070',
        fontSize: 12,
        fontFamily: 'Montserrat-Regular'
    },
    input3NewAna: {
        backgroundColor: 'white',
        borderWidth: 1,
        width: '63%',
        bottom: 7,
        paddingHorizontal: 10,
        borderRadius: 5,
        borderColor: '#707070',
        fontFamily: 'Montserrat-Regular',
    },
    inputNewBodyWor: {
        backgroundColor: 'white',
        borderWidth: 1,
        height: 40,
        width: '52%',
        bottom: 7,
        paddingHorizontal: 10,
        borderRadius: 5,
        borderColor: '#707070',
        fontSize: 12,
        fontFamily: 'Montserrat-Regular',
    },
    input3NewBodyWor: {
        backgroundColor: 'white',
        borderWidth: 1,
        width: '52%',
        bottom: 7,
        paddingHorizontal: 10,
        borderRadius: 5,
        borderColor: '#707070',
        fontFamily: 'Montserrat-Regular',
    },
    inputReqQuotation: {
        backgroundColor: 'white',
        borderWidth: 1,
        height: Dimensions.get("screen").height / 26,
        width: Dimensions.get("screen").width / 2.9,
        bottom: 7,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5,
        borderColor: '#707070',
        fontFamily: 'Montserrat-Regular',
        fontSize: 10,
        margin: 2
    },
    inputReqQuotationRows: {
        backgroundColor: 'white',
        borderWidth: 1,
        height: Dimensions.get("screen").height / 26,
        width: Dimensions.get("screen").width / 5,
        bottom: 7,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5,
        borderColor: '#707070',
        fontFamily: 'Montserrat-Regular',
        fontSize: 10,
        margin: 2
    },
    inputReqQuotationRows2: {
        backgroundColor: 'white',
        borderWidth: 1,
        height: Dimensions.get("screen").height / 26,
        width: Dimensions.get("screen").width / 6,
        bottom: 7,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5,
        borderColor: '#707070',
        fontFamily: 'Montserrat-Regular',
        fontSize: 10,
        margin: 2
    },

    inputReqGoodRows: {
        backgroundColor: 'white',
        borderWidth: 1,
        height: Dimensions.get("screen").height / 26,
        width: Dimensions.get("screen").width / 4,
        bottom: 7,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5,
        borderColor: '#707070',
        fontFamily: 'Montserrat-Regular',
        fontSize: 10,
        margin: 2
    },

    inputSettingRow: {
        backgroundColor: 'white',
        borderWidth: 1,
        height: Dimensions.get("screen").height / 26,
        width: Dimensions.get("screen").width / 6,
        bottom: 7,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5,
        borderColor: '#707070',
        fontFamily: 'Montserrat-Regular',
        fontSize: 10,
        margin: 2
    },

    // table CSS

    RowView: {
        alignItems: 'center', justifyContent: 'center'
    },

    RowText: {
        fontWeight: 'bold', fontSize: 12
    },

    filterLine: {
        borderBottomWidth: 4, flexDirection: 'column', borderColor: colors.SECONDARY 
    },

    cell: {
        borderWidth: 1,
        flex: 1, 
        alignItems: 'center',
        height: 40,
    },
    cell2: {
        borderWidth: 1,
        flex: 1, 
        alignItems: 'center',
        height: 50,
        backgroundColor: '#B0B0B0',
    },
    tableText: {
        margin: 5,
        fontSize: 11
    },
    tableText2: {
        margin: 5,
        fontSize: 12
    },
    tableText3: {
        margin: 5,
        fontSize: 14
    },

    // end table CSS

    // Modal CSS

    modalView: {
        backgroundColor: '#B0B0B0',
        borderWidth: 1,
        borderColor: colors.TEXT,
        width: '70%',
        alignSelf: 'flex-end',
        position: 'relative',
        marginTop: '-51%',
        marginRight: 10,
        alignItems: 'center'
    },
    modalText: {
        color: colors.TEXT
    },

    modalViewProductPurchase: {
        backgroundColor: '#B0B0B0',
        borderWidth: 1,
        borderColor: colors.TEXT,
        width: '50%',
        alignSelf: 'flex-end',
        position: 'relative',
        marginTop: '-40%',
        marginRight: 150,
        alignItems: 'center',
    },

    modalViewProductPurchaseText: {
        color: colors.TEXT,
        fontSize: 11
    },

    modalViewRegistration: {
        width: '77%',
        marginLeft: '-5.5%',
        height: Dimensions.get("screen").height,
    },

    CollapseHeader: {
        backgroundColor: '#f5f5f5', 
        borderWidth: 2, 
        borderColor: '#6d6d6d', 
        paddingHorizontal: 10, 
        paddingVertical: 10, 
        flexDirection: 'row', 
        alignItems: 'center',
        marginTop: 10
    },
    CollapseBody: {
        borderWidth: 2, 
        borderColor: '#6d6d6d', 
        paddingHorizontal: 7, 
        paddingVertical: 3.5, 
        marginTop: 10
    }

    // end Modal CSS


})