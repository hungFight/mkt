import { Modal } from 'flowbite-react'
import { Dispatch, SetStateAction, useState } from 'react'
import ButtonFlowbite from '../ButtonFlowbite'

type TermsPopupProps = {
  isShow: boolean
  setIsShow?: Dispatch<SetStateAction<boolean>>
}

const ModalTerm = ({ isShow, setIsShow }: TermsPopupProps): JSX.Element => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = (): void => setIsChecked(!isChecked)
  const handleClose = (): void => setIsShow && setIsShow(false)
  const handleSubmit = (): void => {
    if (isChecked) {
      setIsShow && setIsShow(false)
    }
  }

  return (
    <Modal show={isShow} onClose={handleClose} className="modal-config modal">
      <Modal.Header className="px-5 py-3">Điều khoản sử dụng</Modal.Header>
      <Modal.Body className="overflow-y-scroll max-h-[80vh]">
        <div className="w-60vw h-72vh text-black flex flex-col gap-4">
          <p className="text-sm indent-4">
            Chào mừng bạn đến với phần mềm MKT của chúng tôi. Trước khi sử dụng phần mềm này, vui
            lòng đọc kỹ các điều khoản sau đây. Sử dụng phần mềm của chúng tôi đồng nghĩa với việc
            bạn đồng ý và tuân thủ tất cả các điều khoản dưới đây. Nếu bạn không đồng ý với bất kỳ
            điều khoản nào, xin vui lòng không sử dụng phần mềm của chúng tôi.
          </p>
          <h3 className="font-bold text-xl">I - Chính sách bảo mật</h3>
          <h4 className="font-semibold text-base indent-2">1. Thông tin cần thiết</h4>
          <p className="indent-6 text-sm">
            Để sử dụng được phần mềm, khách hàng vui lòng cung cấp đầy đủ các thông tin: Họ và Tên,
            Số Điện Thoại và Email để thuận tiện trong việc cung cấp bản quyền và hỗ trợ sau bán
            hàng được tốt nhất.
          </p>
          <h4 className="font-semibold text-base indent-2">
            2. Vì sao chúng tôi cần thông tin của bạn.
          </h4>
          <p className="indent-6 text-sm">
            Tận tâm là 1 trong 5 giá trị cốt lõi của Phần mềm MKT do đó mục tiêu lớn nhất của PM MKT
            là mang lại cho doanh nghiệp, cá nhân khách hàng sử dụng phần mềm một trải nghiệm hoàn
            hảo nhất. Vì vậy, chúng tôi sử dụng thông tin cá nhân của bạn nhằm:
          </p>
          <ul className="indent-6 text-sm flex flex-col gap-3">
            <li>
              Dùng thông tin cá nhân của bạn để đối chiếu, so sánh và có căn cứ hỗ trợ khách hàng
              trong các vấn đề như: chuyển, đổi máy; Cài lại phần mềm; chuyển giao người sử dụng… và
              các yếu tố hỗ trợ khác
            </li>
            <li>
              Gửi thông báo các chương trình, sự kiện của chúng tôi đến với quý đối tác, quý khách
              hàng.
            </li>
            <li>Giải quyết tranh chấp, các vấn đề tranh chấp phát sinh liên quan đến phần mềm.</li>
            <li>Đo lường và cải thiện các dịch vụ của chúng tôi.</li>
          </ul>
          <h4 className="font-semibold text-base indent-2">3. Bảo mật thông tin bản quyền</h4>
          <p className="indent-6 text-sm">
            Khi sử dụng phần mềm MKT của chúng tôi, bạn sẽ cần cung cấp một số thông tin cá nhân để
            đăng ký tài khoản và sử dụng các tính năng của phần mềm. Chúng tôi cam kết bảo vệ thông
            tin cá nhân của bạn và chỉ sử dụng thông tin này cho mục đích đăng ký và quản lý tài
            khoản của bạn. Chúng tôi không bán, cho thuê hoặc chia sẻ thông tin cá nhân của bạn với
            bất kỳ bên thứ ba nào mà không có sự đồng ý của bạn. Chúng tôi có thể tiết lộ thông tin
            cá nhân của bạn trong một số trường hợp sau:
          </p>
          <ul className="indent-6 text-sm flex flex-col gap-3">
            <li>Chúng tôi được bạn đồng ý tiết lộ các thông tin này;</li>
            <li>
              Bên thứ ba mà bạn ủy quyền hoặc cho phép có yêu cầu chúng tôi cung cấp thông tin của
              bạn
            </li>
            <li>
              Theo yêu cầu pháp lý hoặc từ một cơ quan chính phủ hoặc nếu chúng tôi tin rằng hành
              động đó là cần thiết nhằm tuân theo các yêu cầu pháp lý hoặc chiếu theo pháp luật.
            </li>
            <li>Bảo vệ quyền, lợi ích hợp pháp hoặc tài sản của một ai khác.</li>
            <li>
              Sử dụng dữ liệu thông tin cá nhân, doanh nghiệp khách hàng vì mục đích chung, không
              được sự chấp nhận của khách hàng.
            </li>
          </ul>
          <h3 className="font-bold text-xl">II – Các hành vi nghiêm cấm khi sử dụng phần mềm</h3>
          <p className="indent-6 text-sm">
            Phần mềm MKT nghiêm cấm khách hàng sử dụng dịch vụ sản phẩm của chúng tôi cung cấp vào
            các mục đích sau:
          </p>
          <ul className="indent-6 text-sm">
            <li>
              Chống phá nhà nước CHXHCN Việt Nam, gây ảnh hưởng đến an ninh quốc gia, trật tự xã hội
              tuyên truyền chiến tranh khủng bố; gây hận thù, mâu thuẫn giữa các dân tộc, tôn giáo.
            </li>
            <li>Tuyệt đối không bàn luận về các vấn đề chính trị</li>
            <li>
              Nghiêm cấm các hành vi xúc phạm, nhạo báng người khác bằng bất cứ hình thức nào (nhạo
              báng, chê bai, kỳ thị tôn giáo, sắc tộc, dân tộc).
            </li>
            <li>
              Thực hiện tấn công mạng, khủng bố mạng, gián điệp mạng, tội phạm mạng, gây sự cố, tấn
              công, xâm nhập chiếm quyền điều khiển hoặc phá hoại hệ thống thông tin.
            </li>
            <li>
              Giả mạo tổ chức, cá nhân phát tán thông tin giả mạo, thông tin sai sự thật xâm hại đến
              quyền và lợi ích hợp pháp của tổ chức, cá nhân.
            </li>
          </ul>
          <h3 className="font-bold text-xl">III- Chấm dứt sử dụng</h3>
          <p className="indent-6 text-sm">
            Bản điều khoản này không giới hạn bất kỳ quyền lợi nào của bạn theo luật pháp hiện hành.
            Nếu bất kỳ điều khoản nào trong bản điều khoản này bị coi là không hợp lệ hoặc không
            thực thi được, điều đó không ảnh hưởng đến tính hiệu lực của các điều khoản khác.
          </p>
          <p className="indent-6 text-sm">
            Chúng tôi có quyền chấm dứt tài khoản của bạn nếu bạn vi phạm bất kỳ điều khoản nào
            trong bản điều khoản này.
          </p>
          <h3 className="font-bold text-xl">IV- Liên lạc </h3>
          <p className="indent-6 text-sm">
            Nếu bạn có bất kỳ câu hỏi hoặc đề xuất nào liên quan đến phần mềm MKT của chúng tôi, vui
            lòng liên hệ với chúng tôi qua địa chỉ email hoặc số điện thoại được cung cấp trên trang
            web của chúng tôi.
          </p>
          <span className="text-red-500">
            <i className="indent-4 text-lg">
              * <b>Lưu ý:</b>
            </i>
            <p className="indent-6 text-sm">
              Khi sử dụng các giải pháp của Phần mềm MKT cung cấp, chúng tôi sẽ hoàn toàn không chịu
              trách nhiệm trực tiếp, gián tiếp về các hoạt động của bạn khi bạn sử dụng công cụ,
              giải pháp của chúng tôi. Chúng tôi không chịu trách nhiệm trước pháp luật hay bồi
              thường cho người dùng phần mềm vào mục đích trái với quy định của pháp luật. Tất cả
              các trường hợp vi phạm quy định của pháp luật đều do người dùng chịu hoàn toàn trách
              nhiệm.
            </p>
            <p className="indent-6 text-sm">
              Phần mềm MKT cung cấp công cụ, giải pháp giúp người dùng tối ưu công việc quản lý,
              marketing bán hàng, tối ưu chi phí và nhân lực. Do đó, người dùng phải tuân thủ theo
              các quy định đã thống nhất. Phần mềm MKT không chịu trách nhiệm nếu người dùng làm sai
              quy định.
            </p>
            <p className="indent-6 text-sm">
              Phần mềm MKT yêu cầu mọi tổ chức cá nhân sử dụng phần mềm phải tuân thủ theo nghị định
              Nghị định số 72/2013/NĐ-CP của Chính phủ: Quản lý, cung cấp, sử dụng dịch vụ Internet
              và thông tin trên mạng và luật an ninh mạng.
            </p>
            <p className="indent-6 text-sm">
              Trân trọng cảm ơn bạn đã sử dụng sản phẩm và dịch vụ của chúng tôi.
            </p>
          </span>
        </div>
      </Modal.Body>
      <Modal.Footer className="flex justify-between items-center gap-3 px-5 py-3">
        <div className="flex flex-col items-center justify-center">
          <div className="justify-start w-full">
            <label htmlFor="agree-to-terms-of-use" className="flex flex-row gap-1 items-center">
              <input
                type="checkbox"
                name="agree-to-terms-of-use"
                id="agree-to-terms-of-use"
                className="form-checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                // disabled={!isEndOfPage}
              />
              <span className="text-sm">Đồng ý điều khoản sử dụng và không hiển thị thêm nữa</span>
            </label>
          </div>
        </div>
        <ButtonFlowbite type="submit" color="blue" onClick={handleSubmit} disabled={!isChecked}>
          Đồng ý
        </ButtonFlowbite>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalTerm
