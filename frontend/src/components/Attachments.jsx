import avatarLogo from '../assets/avatar-DIE1AEpS.jpg'
import sugnupAvatar from '../assets/signupAvatar.jpg'
import notFound from '../assets/404-NotFound.svg'

export const LoginPicture = () => {
  return (
    <>
    <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
      <img src={avatarLogo} className="rounded-circle" alt="Войти"/>
    </div>
    </>
  )
};

export const SugnupPicture = () => {
  return (
    <>
    <div>
      <img src={sugnupAvatar} className="rounded-circle" alt="Регистрация"></img>
    </div>
    </>
  )
};

export const NotFoundPicture = () => {
  return (
    <img
      alt="Страница не найдена"
      className="img-fluid"
      style={{ maxWidth: '450px', height: 'auto' }}
      src={notFound}
    />
  );
};