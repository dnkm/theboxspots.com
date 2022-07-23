import { withAuthUserTokenSSR, withAuthUser, AuthAction } from 'next-firebase-auth';

function Login() {
    return (
        <div>

        </div>
    );
}

export const getServerSideProps = withAuthUserTokenSSR({
    whenAuthed: AuthAction.REDIRECT_TO_APP
})()

export default withAuthUser({
    whenAuthed: AuthAction.REDIRECT_TO_APP
})(Login)