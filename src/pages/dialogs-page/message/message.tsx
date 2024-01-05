import { FC } from 'react'

import { formatDistanceToNow } from 'date-fns'
import { ru } from 'date-fns/locale'

import noReaded from '@/assets/noreaded.svg'
import readed from '@/assets/readed.svg'

import s from './message.module.scss'

type MessageProps = {
  avatar?: any
  user: UserType
  text?: string
  date?: any
  isMe?: boolean
  isReaded?: boolean
  attachments?: AttachmentType[]
}
type UserType = {
  name: string
  fullName: string
}

type AttachmentType = {
  filename: string
  url: string
}

export const Message: FC<MessageProps> = ({
  avatar,
  user,
  text,
  date,
  isMe,
  isReaded,
  attachments,
}) => {
  const formattedDate = date
    ? formatDistanceToNow(new Date(date), { addSuffix: true, locale: ru })
    : ''
  return (
    <div className={`${isMe ? s.messageIsMe : s.message}`}>
      <div className={s.messageAvatar}>
        <img src={avatar} alt={`Avatar ${user.fullName}`} />
      </div>
      <div className={s.messageContent}>
        <div className={s.messageBubble}>
          <p className={s.messageText}>{text}</p>
        </div>
        <div className={s.messageAttachments}>
          {attachments?.map((el, index) => (
            <div className={s.messageAttachmentsItem} key={index}>
              <img src={el.url} alt={el.filename} />
            </div>
          ))}
        </div>
        <span className={s.messageDate}>
          {isMe && <img src={isReaded ? readed : noReaded} alt="" />}
          {formattedDate}
        </span>
      </div>
    </div>
  )
}
