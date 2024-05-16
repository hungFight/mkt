import { Image } from '@mantine/core'
import logo from '@renderer/assets/images/logo-login.png'
import ButtonFlowbite from '@renderer/components/ButtonFlowbite'
import InputCopy from '@renderer/components/CustomField/InputCoppy'
import InputField from '@renderer/components/CustomField/InputField'
import InputPassword from '@renderer/components/CustomField/InputPassword'
import configStatic from '@renderer/config'
import { setPageTitle } from '@renderer/store/themeConfigSlice'
import { t } from 'i18next'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Login = (): JSX.Element => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setPageTitle('Login'))
  })
  const navigate = useNavigate()

  const submitForm = (): void => {
    navigate(configStatic.router.home)
  }

  return (
    <div className="w-[80%] 2xl:w-[68%] p-[50px] h-[90vh] rounded-[30px] right-50px relative items-center flex flex-col justify-center custom-shadow">
      <div>
        <Image src={logo} alt="logo" />
      </div>
      <form className="mt-5 space-y-4 w-full" onSubmit={submitForm}>
        <InputField type="email" isRequire name="email" placeholder="Nhập email" required />
        <InputPassword name="password" placeholder={`${t(`Nhập mật khẩu`)}`} isShadow isRequire />

        <ButtonFlowbite
          type="submit"
          color="blue"
          className="min-w-[250px] w-full mx-auto bg-blue-700 font-semibold"
          size="lg"
        >
          {t('Đăng Nhập')}
        </ButtonFlowbite>
        <Link
          to={configStatic.router.home}
          className="text-right w-full block text-blue-500 text-[14px]"
        >
          Quên mật khẩu
        </Link>

        <p className="flex flex-nowrap gap-2 justify-center">
          <p className="whitespace-nowrap text-[14px]">Bạn chưa có tài khoản?</p>
          <Link to={configStatic.router.home} className="text-blue-500 text-[14px]">
            Tạo tài khoản mới
          </Link>
        </p>
        <InputCopy name="his" text={'his'} classWapperCopy="col-span-2" />
      </form>
    </div>
  )
}

export default Login
