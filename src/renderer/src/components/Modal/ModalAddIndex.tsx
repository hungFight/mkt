import { configTableAddInAddIndex } from '@renderer/config/configTable'
import { Modal } from 'flowbite-react'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import MantineTableCustom from '../MantineTableCustom'
import { useTranslation } from 'react-i18next'
import ToolTips from '../Tooltips'
import { CiCirclePlus } from 'react-icons/ci'
import { RiQuillPenFill } from 'react-icons/ri'
import { IoReloadCircleSharp } from 'react-icons/io5'
import { GoTrash } from 'react-icons/go'
import ButtonC from '../CustomField/ButtonC'
import 'react-toastify/dist/ReactToastify.css'
import ModalOneField from './ModalOneField'
import ModalProgress from './ModalProgress'
interface ModalAddAccountProps {
  isShow: boolean
  setIsShow?: Dispatch<SetStateAction<boolean>>
}

const ModalAddIndex: FC<ModalAddAccountProps> = ({ isShow, setIsShow }) => {
  const { t } = useTranslation()
  const [error, setError] = useState('')
  const [isShowModalUpdate, setShowModalUpdate] = useState<
    { id: number; value: string } | undefined
  >()
  const [isShowModalAdd, setShowModalAdd] = useState<null | string>(null)
  const handleClose = (): void => setIsShow && setIsShow(false)
  const handleSubmit = (): void => {
    setIsShow && setIsShow(false)
    toast.success(t('account_added_successfully'))
  }
  const actionIcon = [
    {
      uid: 1,
      title: 'Xoá',
      bg: 'bg-red-500 ',
      icon: <GoTrash />,
      onClick: (id) => {
        const ok = confirm('Bạn có chắc muốn xoá không')
        if (ok) {
          toast.success('Xoá thành công!')
          setData((pre) => pre.filter((r) => r.id !== id))
        }
      }
    },
    {
      uid: 2,
      title: 'Chỉnh sửa',
      bg: 'bg-blue-500',
      icon: <RiQuillPenFill />,
      onClick: (id, value) => setShowModalUpdate({ id, value })
    }
  ]
  const [data, setData] = useState([
    {
      id: 1,
      indexName: 'Hello',
      action: (
        <div className="flex gap-2 w-full">
          {actionIcon.map((r) => (
            <ToolTips key={r.uid} content={r.title}>
              <ButtonC
                icon={r.icon}
                title={r.title}
                onClick={() => r.onClick(1, 'Hello')}
                className={r.bg}
              />
            </ToolTips>
          ))}
        </div>
      )
    },
    {
      id: 2,
      indexName: 'Hello 2',
      action: (
        <div className="flex gap-2 w-full">
          {actionIcon.map((r) => (
            <ToolTips key={r.uid} content={r.title}>
              <ButtonC
                icon={r.icon}
                title={r.title}
                onClick={() => r.onClick(2, 'Hello 2')}
                className={r.bg}
              />
            </ToolTips>
          ))}
        </div>
      )
    },
    {
      id: 3,
      indexName: 'Hello 3',
      action: (
        <div className="flex gap-2 w-full">
          {actionIcon.map((r) => (
            <ToolTips key={r.uid} content={r.title}>
              <ButtonC
                icon={r.icon}
                title={r.title}
                onClick={() => r.onClick(3, 'Hello 3')}
                className={r.bg}
              />
            </ToolTips>
          ))}
        </div>
      )
    },
    {
      id: 4,
      indexName: 'Hello 3',
      action: (
        <div className="flex gap-2 w-full">
          {actionIcon.map((r) => (
            <ToolTips key={r.uid} content={r.title}>
              <ButtonC
                icon={r.icon}
                title={r.title}
                onClick={() => r.onClick(3, 'Hello 3')}
                className={r.bg}
              />
            </ToolTips>
          ))}
        </div>
      )
    }
  ])
  const handleUpdate = () => {
    if (isShowModalUpdate?.value)
      setData((pre) =>
        pre.map((rb) => {
          if (rb.id === isShowModalUpdate.id) {
            rb.indexName = isShowModalUpdate.value
            rb.action = (
              <div className="flex gap-2 w-full">
                {actionIcon.map((r) => (
                  <ToolTips key={r.uid} content={r.title}>
                    <ButtonC
                      icon={r.icon}
                      title={r.title}
                      onClick={() => r.onClick(rb.id, rb.indexName)}
                      className={r.bg}
                    />
                  </ToolTips>
                ))}
              </div>
            )
            setShowModalUpdate(undefined)
            toast.success('chỉnh sửa thành công!')
          }
          return rb
        })
      )
    else setError('Invalid data!')
  }
  const handleAdd = () => {
    if (isShowModalAdd) {
      setData((pre) => {
        const idd = (pre[pre.length - 1].id += 1)
        return [
          ...pre,
          {
            indexName: isShowModalAdd,
            id: idd,
            action: (
              <div className="flex gap-2 w-full">
                {actionIcon.map((r) => (
                  <ToolTips key={r.uid} content={r.title}>
                    <ButtonC
                      icon={r.icon}
                      title={r.title}
                      onClick={() => {
                        r.onClick(idd, isShowModalAdd)
                        console.log()
                      }}
                      className={r.bg}
                    />
                  </ToolTips>
                ))}
              </div>
            )
          }
        ]
      })
      toast.success(t('add_success'))
      setShowModalAdd(null)
    } else setError(t('inValid'))
  }
  return (
    <Modal show={isShow} onClose={handleClose} className="modal-acc modal">
      {isShowModalUpdate && (
        <ModalOneField
          rootClick={() => setShowModalUpdate(undefined)}
          submit={handleUpdate}
          icon={<RiQuillPenFill />}
          titleB={t('update')}
          titleC={t('cancel')}
          title={t('edit')}
          onChange={(e: any) => {
            if (isShowModalUpdate)
              setShowModalUpdate((pre) => ({ ...isShowModalUpdate, value: e.target.value }))
            if (error) setError('')
          }}
          value={isShowModalUpdate.value}
          error={error}
        />
      )}
      {isShowModalAdd !== null && (
        <ModalOneField
          rootClick={() => setShowModalAdd(null)}
          submit={handleAdd}
          icon={<CiCirclePlus />}
          title={t('add_new')}
          titleB={t('add')}
          titleC={t('cancel')}
          onChange={(e: any) => {
            setShowModalAdd(e.target.value)
            if (error) setError('')
          }}
          value={isShowModalAdd}
          error={error}
        />
      )}
      <div className="bg-[#f2f2f2] rounded-tr-[6px] rounded-tl-[6px]">
        <Modal.Header className="px-5 py-3 font-bold items-center">
          {t('add_category')}
        </Modal.Header>
      </div>
      <Modal.Body>
        <div className="px-2 py-2   relative my-5 rounded-xl">
          <div className="flex  w-full justify-between">
            <ButtonC
              title={t('add_new')}
              icon={<CiCirclePlus />}
              className="bg-blue-500 p-1"
              classNameIcon="text-[20px]"
              onClick={() => setShowModalAdd('')}
            />{' '}
          </div>
          <div className="rounded-xl border mt-1 m">
            <MantineTableCustom
              column={configTableAddInAddIndex}
              data={data}
              clsTable="max-h-[60vh]"
            />
          </div>
        </div>
      </Modal.Body>{' '}
      <ToastContainer />
    </Modal>
  )
}

export default ModalAddIndex
