const Footer = (): JSX.Element => {
  return (
    <div className="w-1/2 justify-end">
      {/* <p className="dark:text-white-dark text-center ltr:sm:text-center rtl:sm:text-center pt-6">
        ©Copyright {new Date().getFullYear()} by phần mềm MKT
      </p> */}
      <div className="flex">
        <p>huytq@phanmemmkt.vn</p>
        <div className="flex gap-3">
          <p>Thời hạn sử dụng còn:</p>
          <p>10 ngày</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
