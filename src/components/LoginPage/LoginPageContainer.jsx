import React from "react";
import LoginPage from "./LoginPage";
import {connect} from "react-redux";
import {updateEmailCreator, updatePasswordCreator} from "../../redux/auth-reducer";

// class LoginPageContainer extends React.Component {
//     render() {
//         return <LoginPage {...this.props} />
//     }
// }

let mapStateToProps = (state) => {
    return {
        loginPage: state.auth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateEmail: (email) => {
            dispatch(updateEmailCreator(email));
        },
        updatePassword: (password) => {
            dispatch(updatePasswordCreator(password))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);