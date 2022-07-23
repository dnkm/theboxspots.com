import { useAuthUser, withAuthUserTokenSSR, withAuthUser, AuthAction } from 'next-firebase-auth';

function Dashboard() {
    return (
        <div>
            hello world
        </div>
    );
}

export const getServerSideProps = withAuthUserTokenSSR({
    whenUnauthed: AuthAction.REDIRECT_TO_LOGIN
})()

export default withAuthUser({
    whenUnauthedAfterInit: AuthAction.REDIRECT_TO_APP
})(Dashboard)