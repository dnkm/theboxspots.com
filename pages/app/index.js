// import { useAuthUser, withAuthUserTokenSSR, withAuthUser, AuthAction } from 'next-firebase-auth';

function Dashboard() {
  let user = useAuthUser();
  return (
    <div>
      hello world
      <button onClick={() => user.signOut()}>Logout</button>
    </div>
  );
}

// export const getServerSideProps = withAuthUserTokenSSR({
//     whenUnauthed: AuthAction.REDIRECT_TO_LOGIN
// })()

// export default withAuthUser({
//     whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN
// })(Dashboard)
