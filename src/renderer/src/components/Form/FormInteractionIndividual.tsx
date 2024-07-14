import CheckboxField from '../CustomField/CheckboxField'
import InputField from '../CustomField/InputField'
import InputNumberField from '../CustomField/InputNumberField'
import { LiaHandPointer } from 'react-icons/lia'
import { Dispatch, FC, SetStateAction } from 'react'
import { PropsInNumberIndividual, PropsSwitchScript } from '../Modal/ModalAddScript'
import { useTranslation } from 'react-i18next'

const FormInteractionIndividual: FC<{
  inNumber: PropsInNumberIndividual
  setInNumber: Dispatch<SetStateAction<PropsInNumberIndividual>>
}> = ({ inNumber, setInNumber }): JSX.Element => {
  const { t } = useTranslation()
  const handleSubmit = (): void => {
    console.log(123)
  }
  return (
    <form className="relative right-0 " style={{ animation: 'move_choiceList_right 0.3s linear' }}>
      <div className="flex items-center border-b pb-3 pt-1">
        <CheckboxField
          name="not_same"
          title={t('read_noti')}
          classInputContainer="w-[280px]"
          classLabel=" text-sm"
        />

        <div className="flex items-center">
          <InputNumberField
            min={1}
            name="stream"
            max={100}
            title={t('each_video_watch')}
            onChange={(e: any) =>
              setInNumber((pre) => ({
                ...pre,
                eachVideo: { ...pre.eachVideo, one: e.target.value }
              }))
            }
            value={inNumber.eachVideo.one}
            classInput="ml-2 !w-[70px] !px-2 !py-1"
            clsLabel="whitespace-pre-wrap"
            clsTitle="w-max"
            classInputContainer=" flex items-center justify-start ml-2"
          />{' '}
          <InputNumberField
            min={1}
            name="stream"
            max={100}
            onChange={(e: any) =>
              setInNumber((pre) => ({
                ...pre,
                eachVideo: { ...pre.eachVideo, two: e.target.value }
              }))
            }
            value={inNumber.eachVideo.two}
            classInput="ml-2 !w-[70px] !px-2 !py-1"
            span={t('second')}
            clsLabel="whitespace-pre-wrap"
            classInputContainer="w-full flex items-center justify-start"
          />
        </div>
      </div>
      <div className="py-3 flex items-center justify-between">
        <div className="w-fit">
          <div className="flex items-center ">
            <CheckboxField
              name="not_same"
              title={t('surf_blog')}
              classLabel=" text-sm"
              classInputContainer="w-[280px]"
            />
            <div className="flex items-center">
              <InputNumberField
                min={1}
                name="stream"
                max={100}
                onChange={(e: any) =>
                  setInNumber((pre) => ({
                    ...pre,
                    surfNews: { ...pre.surfNews, one: e.target.value }
                  }))
                }
                value={inNumber.surfNews.one}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                clsLabel="whitespace-pre-wrap"
                classInputContainer=" flex items-center justify-start"
              />{' '}
              <InputNumberField
                min={1}
                name="stream"
                max={100}
                onChange={(e: any) =>
                  setInNumber((pre) => ({
                    ...pre,
                    surfNews: { ...pre.surfNews, two: e.target.value }
                  }))
                }
                value={inNumber.surfNews.two}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                span={t('second')}
                clsLabel="whitespace-pre-wrap"
                classInputContainer="w-full flex items-center justify-start"
              />
            </div>
          </div>{' '}
          <div className="flex items-center my-2">
            <CheckboxField
              name="not_same"
              title={t('surf_story')}
              classLabel=" text-sm"
              classInputContainer="w-[280px]"
            />
            <div className="flex items-center">
              <InputNumberField
                min={1}
                name="stream"
                max={100}
                onChange={(e: any) =>
                  setInNumber((pre) => ({
                    ...pre,
                    surfStory: { ...pre.surfStory, one: e.target.value }
                  }))
                }
                value={inNumber.surfStory.one}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                clsLabel="whitespace-pre-wrap"
                classInputContainer=" flex items-center justify-start"
              />{' '}
              <InputNumberField
                min={1}
                name="stream"
                max={100}
                onChange={(e: any) =>
                  setInNumber((pre) => ({
                    ...pre,
                    surfStory: { ...pre.surfStory, two: e.target.value }
                  }))
                }
                value={inNumber.surfStory.two}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                span="Story"
                clsLabel="whitespace-pre-wrap"
                classInputContainer="w-full flex items-center justify-start"
              />
            </div>
          </div>
          <div className="flex items-center ">
            <CheckboxField
              name="not_same"
              title={t('like_post_news')}
              classLabel=" text-sm"
              classInputContainer="w-[280px]"
            />
            <div className="flex items-center">
              <InputNumberField
                min={1}
                name="stream"
                max={100}
                onChange={(e: any) =>
                  setInNumber((pre) => ({
                    ...pre,
                    likeNews: { ...pre.likeNews, one: e.target.value }
                  }))
                }
                value={inNumber.likeNews.one}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                clsLabel="whitespace-pre-wrap"
                classInputContainer=" flex items-center justify-start"
              />{' '}
              <InputNumberField
                min={1}
                name="stream"
                max={100}
                onChange={(e: any) =>
                  setInNumber((pre) => ({
                    ...pre,
                    likeNews: { ...pre.likeNews, two: e.target.value }
                  }))
                }
                value={inNumber.likeNews.two}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                span={t('post')}
                clsLabel="whitespace-pre-wrap"
                classInputContainer="w-full flex items-center justify-start"
              />
            </div>
          </div>
        </div>
        <div className="w-[0.5px] border-r h-[145px]"></div>
        <div className="w-[50%] flex flex-wrap">
          <div className="flex items-center">
            <CheckboxField
              name="not_same"
              title={t('share_post_random_wall')}
              classLabel=" text-sm"
              classInputContainer="w-[280px]"
            />
            <div className="flex items-center">
              <InputNumberField
                min={1}
                name="stream"
                max={100}
                onChange={(e: any) =>
                  setInNumber((pre) => ({
                    ...pre,
                    shareRandomPost: { ...pre.shareRandomPost, one: e.target.value }
                  }))
                }
                value={inNumber.shareRandomPost.one}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                clsLabel="whitespace-pre-wrap"
                classInputContainer=" flex items-center justify-start"
              />{' '}
              <InputNumberField
                min={1}
                name="stream"
                max={100}
                onChange={(e: any) =>
                  setInNumber((pre) => ({
                    ...pre,
                    shareRandomPost: { ...pre.shareRandomPost, two: e.target.value }
                  }))
                }
                value={inNumber.shareRandomPost.two}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                span={t('Bài viết')}
                clsLabel="whitespace-pre-wrap"
                classInputContainer="w-full flex items-center justify-start"
              />
            </div>
          </div>
          <div className="flex items-center my-2">
            <CheckboxField
              name="not_same"
              title={t('surf_story_on_watch')}
              classLabel=" text-sm"
              classInputContainer="w-[280px]"
            />
            <div className="flex items-center">
              <InputNumberField
                min={1}
                name="stream"
                max={100}
                onChange={(e: any) =>
                  setInNumber((pre) => ({
                    ...pre,
                    surfVideoOnWatch: { ...pre.surfVideoOnWatch, one: e.target.value }
                  }))
                }
                value={inNumber.surfVideoOnWatch.one}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                clsLabel="whitespace-pre-wrap"
                classInputContainer=" flex items-center justify-start"
              />{' '}
              <InputNumberField
                min={1}
                name="stream"
                max={100}
                onChange={(e: any) =>
                  setInNumber((pre) => ({
                    ...pre,
                    surfVideoOnWatch: { ...pre.surfVideoOnWatch, two: e.target.value }
                  }))
                }
                value={inNumber.surfVideoOnWatch.two}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                span="Video"
                clsLabel="whitespace-pre-wrap"
                classInputContainer="w-full flex items-center justify-start"
              />
            </div>
          </div>
          <div className="flex items-center">
            <CheckboxField
              name="not_same"
              title={t('share_random_wall')}
              classLabel=" text-sm"
              classInputContainer="w-[280px]"
            />
            <div className="flex items-center">
              <InputNumberField
                min={1}
                name="stream"
                max={100}
                onChange={(e: any) =>
                  setInNumber((pre) => ({
                    ...pre,
                    shareRandom: { ...pre.shareRandom, one: e.target.value }
                  }))
                }
                value={inNumber.shareRandom.one}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                clsLabel="whitespace-pre-wrap"
                classInputContainer=" flex items-center justify-start"
              />{' '}
              <InputNumberField
                min={1}
                name="stream"
                max={100}
                onChange={(e: any) =>
                  setInNumber((pre) => ({
                    ...pre,
                    shareRandom: { ...pre.shareRandom, two: e.target.value }
                  }))
                }
                value={inNumber.shareRandom.two}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                span="Video"
                clsLabel="whitespace-pre-wrap"
                classInputContainer="w-full flex items-center justify-start"
              />
            </div>
          </div>
        </div>
      </div>{' '}
      <div className="pt-5 border-t flex items-center justify-between">
        <div className="w-full">
          <div className="flex items-center">
            <CheckboxField
              name="not_same"
              title={t('comment_post_news')}
              classLabel=" text-sm"
              classInputContainer="w-[280px]"
            />
            <div className="flex items-center">
              <InputNumberField
                min={1}
                name="stream"
                max={100}
                onChange={(e: any) =>
                  setInNumber((pre) => ({
                    ...pre,
                    commentNews: { ...pre.commentNews, one: e.target.value }
                  }))
                }
                value={inNumber.commentNews.one}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                clsLabel="whitespace-pre-wrap"
                classInputContainer=" flex items-center justify-start"
              />{' '}
              <InputNumberField
                min={1}
                name="stream"
                max={100}
                onChange={(e: any) =>
                  setInNumber((pre) => ({
                    ...pre,
                    commentNews: { ...pre.commentNews, two: e.target.value }
                  }))
                }
                value={inNumber.commentNews.two}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                span={t('post')}
                clsLabel="whitespace-pre-wrap"
                classInputContainer="w-full flex items-center justify-start"
              />
            </div>
            <a
              href=""
              className="font-medium text-sm flex items-center ml-3 text-blue-500 hover:underline"
            >
              <div className="rotate-[85deg] text-[20px] mr-1 text-red-500">
                <LiaHandPointer />
              </div>{' '}
              {t('please_enter_content_each_line')}
            </a>
          </div>
          <div className="flex items-center my-2">
            <CheckboxField
              name="not_same"
              title={t('find_video_by_keyword')}
              classInputContainer="w-[280px]"
              classLabel="text-sm"
            />
            <div className="flex items-center">
              <InputField
                name="keyword_video"
                placeholder={t('enter_keyword_into')}
                classInputContainer="ml-[8px]"
                inputClassName="!py-[5px] px-[10px] hover:shadow-[0_0_2px_#00a6ff] border border-[#00a6ff] change_placeholder_inter"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default FormInteractionIndividual
