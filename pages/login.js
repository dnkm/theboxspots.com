import { withAuthUserTokenSSR, withAuthUser, AuthAction } from 'next-firebase-auth';

function Login() {
    return (
        <div>
            hello world
        </div>
    );
}

export const getServerSideProps = withAuthUserTokenSSR({
    whenAuthed: AuthAction.REDIRECT_TO_APP
})()

export default withAuthUser({
    whenAuthed: AuthAction.REDIRECT_TO_APP
})(Login)