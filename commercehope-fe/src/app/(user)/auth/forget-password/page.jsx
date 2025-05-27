// guard
import GuestGuard from 'src/guards/guest';
//  components
import ForgetPasswordMain from 'src/components/_main/auth/forgetPassword';

// Meta information
export const metadata = {
  title: 'Forgot Password | Commercehope - Reset Your Password and Regain Access',
  description:
    'Forgot your password? Reset it with Commercehope for seamless access to your account. Regain control and enjoy hassle-free browsing, secure transactions, and personalized experiences. Get back on track with Commercehope now!',
  applicationName: 'Commercehope',
  authors: 'Commercehope',
  keywords:
    'forgot password, Commercehope, reset password, Commercehope password recovery, password reset, password recovery, account access, regain access, secure login, secure access, hassle-free login, personalized login, password recovery tool, forgotten password'
};

export default function ForgetPassword() {
  return (
    <>
      <GuestGuard>
        <ForgetPasswordMain />
      </GuestGuard>
    </>
  );
}
