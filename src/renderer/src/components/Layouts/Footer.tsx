const Footer = (): JSX.Element => {
  return (
    <div>
      <p className="dark:text-white-dark text-center ltr:sm:text-center rtl:sm:text-center pt-6">
        ©Copyright {new Date().getFullYear()} by phần mềm MKT
      </p>
    </div>
  )
}

export default Footer
