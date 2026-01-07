export default function SignupValidation({ username, password, retypedPassword }) {
    if (password != retypedPassword || username == "" || password == "" || password.length < 8 || password.length > 12) {
        alert("please enter valid password")

    }
    else {
        ///
    }
}
