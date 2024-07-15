import CheckboxField from '../CustomField/CheckboxField'
import InputField from '../CustomField/InputField'
import InputNumberField from '../CustomField/InputNumberField'
import { LiaHandPointer } from 'react-icons/lia'
import { Dispatch, FC, SetStateAction } from 'react'
import {
  PropsHandleTextarea,
  PropsInNumberIndividual,
  PropsSwitchScript
} from '../Modal/ModalAddScript'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { FieldValues, UseFormHandleSubmit, UseFormRegister, useForm } from 'react-hook-form'
import TextAreaField from '../CustomField/TextAreaField'

const FormInteractionIndividual: FC<{
  inNumber: PropsInNumberIndividual
  setInNumber: Dispatch<SetStateAction<PropsInNumberIndividual>>
  register: UseFormRegister<FieldValues>
  setHandleTextarea: Dispatch<SetStateAction<PropsHandleTextarea>>
  isShowTextarea: boolean
}> = ({ inNumber, setInNumber, register, setHandleTextarea, isShowTextarea }): JSX.Element => {
  const { t } = useTranslation()
  console.log(isShowTextarea, 'isShowTextarea')

  return (
    <div className="relative right-0 " style={{ animation: 'move_choiceList_right 0.3s linear' }}>
      <div className="flex items-center border-b pb-3 pt-1">
        <CheckboxField
          name="read_noti"
          register={{ ...register('read_noti') }}
          title={t('read_noti')}
          classInputContainer="w-[280px]"
          classLabel=" text-sm"
          defaultChecked
        />
      </div>
      <div className="py-3 flex items-center justify-between">
        <div className="w-fit">
          <div className="flex items-center ">
            <CheckboxField
              name="surf_blog"
              title={t('surf_blog')}
              classLabel=" text-sm"
              register={{ ...register('surf_blog') }}
              classInputContainer="w-[280px]"
              defaultChecked
            />
            <div className="flex items-center">
              <InputNumberField
                min={1}
                name="surf_blog_1"
                register={{ ...register('surf_blog_1') }}
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
                name="surf_blog_2"
                register={{ ...register('surf_blog_2') }}
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
              name="surf_story"
              register={{ ...register('surf_story') }}
              title={t('surf_story')}
              defaultChecked
              classLabel=" text-sm"
              classInputContainer="w-[280px]"
            />
            <div className="flex items-center">
              <InputNumberField
                min={1}
                register={{ ...register('surf_story_1') }}
                name="surf_story_1"
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
                register={{ ...register('surf_story_2') }}
                name="surf_story_2"
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
              name="like_post_news"
              title={t('like_post_news')}
              register={{ ...register('like_post_news') }}
              classLabel=" text-sm"
              classInputContainer="w-[280px]"
              defaultChecked
            />
            <div className="flex items-center">
              <InputNumberField
                min={1}
                name="like_post_news_1"
                register={{ ...register('like_post_news_1') }}
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
                name="like_post_news_2"
                register={{ ...register('like_post_news_2') }}
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
          <div className="flex items-center ">
            <CheckboxField
              name="share_post_random_wall"
              title={t('share_post_random_wall')}
              register={{ ...register('share_post_random_wall') }}
              classLabel=" text-sm"
              defaultChecked
              classInputContainer="w-[280px]"
            />
            <div className="flex items-center">
              <InputNumberField
                min={1}
                name="share_post_random_wall_1"
                register={{ ...register('share_post_random_wall_1') }}
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
                max={100}
                name="share_post_random_wall_2"
                register={{ ...register('share_post_random_wall_2') }}
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
              title={t('share_random_wall')}
              classLabel=" text-sm"
              defaultChecked
              name="share_random_wall"
              register={{ ...register('share_random_wall') }}
              classInputContainer="w-[280px]"
            />
            <div className="flex items-center">
              <InputNumberField
                min={1}
                name="share_random_wall_1"
                max={100}
                register={{ ...register('share_random_wall_1') }}
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
                register={{ ...register('share_random_wall_2') }}
                name="share_random_wall_2"
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
          <div className="flex items-center ">
            <CheckboxField
              name="follow_random_by_who_post"
              title={t('follow_random_by_who_post')}
              register={{ ...register('follow_random_by_who_post') }}
              classInputContainer="w-[280px]"
              defaultChecked
              classLabel="text-sm"
            />
            <div className="flex items-center">
              <InputNumberField
                min={1}
                name="follow_random_by_who_post_1"
                register={{ ...register('follow_random_by_who_post_1') }}
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
                span={t('video')}
                classInputContainer=" flex items-center justify-start"
              />{' '}
            </div>
          </div>
        </div>
      </div>{' '}
      <div className="pt-5 border-t flex items-center justify-between">
        <div className="w-full">
          <div className="flex items-center">
            <CheckboxField
              title={t('surf_video_on_watch')}
              register={{ ...register('surf_video_on_watch') }}
              name="surf_video_on_watch"
              classLabel=" text-sm"
              defaultChecked
              classInputContainer="w-[280px]"
            />
            <div className="flex items-center">
              <InputNumberField
                min={1}
                register={{ ...register('surf_video_on_watch_1') }}
                name="surf_video_on_watch_1"
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
                register={{ ...register('surf_video_on_watch_2') }}
                name="surf_video_on_watch_2"
                max={100}
                onChange={(e: any) =>
                  setInNumber((pre) => ({
                    ...pre,
                    surfVideoOnWatch: { ...pre.surfVideoOnWatch, two: e.target.value }
                  }))
                }
                value={inNumber.surfVideoOnWatch.two}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                span="Video."
                clsLabel="whitespace-pre-wrap"
                classInputContainer="w-full flex items-center justify-start"
              />
            </div>
            <div className="flex items-center">
              <InputNumberField
                min={1}
                register={{ ...register('surf_video_on_watch_3') }}
                name="surf_video_on_watch_3"
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
                register={{ ...register('surf_video_on_watch_4') }}
                name="surf_video_on_watch_4"
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
          <div className="my-2">
            <div className="w-full flex items-center ">
              <CheckboxField
                name="comment_post_news"
                title={t('comment_post_news')}
                defaultChecked
                register={{ ...register('comment_post_news') }}
                classLabel=" text-sm"
                classInputContainer="w-[280px]"
                onChange={(e: any) =>
                  setHandleTextarea((pre) => ({ ...pre, comment_post_news: e.target.checked }))
                }
              />
              <div className="flex items-center">
                <InputNumberField
                  min={1}
                  register={{ ...register('comment_post_news_1') }}
                  name="comment_post_news_1"
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
                  register={{ ...register('comment_post_news_2') }}
                  name="comment_post_news_2"
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
            </div>
            <div className={`mt-2 ${isShowTextarea ? '' : 'pointer-events-none opacity-60'}`}>
              <TextAreaField
                isRequire
                title={t('please_enter_comment_post_here')}
                placeholder="..."
                register={{ ...register('please_enter_comment_post_here', { required: true }) }}
                name="please_enter_comment_post_here"
                clsTextArea="text-[15px] p-5  "
                clsTextLabel="!text-sm font-medium "
              />
              {/* {errors.ai_title && (
                <p className="text-[13px] mt-[-3px] text-red-500 ">{t('require')}</p>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormInteractionIndividual
