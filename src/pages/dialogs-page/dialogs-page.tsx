import { Message } from '@/pages/dialogs-page/message/message'

export const DialogsPage = () => {
  return (
    <>
      <Message
        user={{ name: 'dsads', fullName: 'dasd' }}
        text={
          ' Прибыв на территории вблизь границы войска Кутая и Сиама заметили бурную активность на территории Индокитайского Союза. Это может значить лишь то что они готовятся к войне. Но несмотря на это войска Кутая и Сиама не начали наступление. Ведь надо было согласовать всё со чтпбом и сделать каординированную атаку с другими странами потдержавшими ультиматум.'
        }
        avatar={
          'https://sun9-11.userapi.com/impf/c844321/v844321177/1fbb02/K1aztBpYqno.jpg?size=720x960&quality=96&sign=3e3ab41e1df4ea90f2483c9f8c4ee547&type=album'
        }
        date={'2023-12-29T22:00:09Z'}
        attachments={[
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/100x100/?random=1&nature',
          },
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/100x100/?random=2&nature',
          },
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/100x100/?random=3&nature',
          },
        ]}
      />
      <Message
        user={{ name: 'dsads', fullName: 'dasd' }}
        text={
          'Прибыв на территории вблизь границы войска Кутая и Сиама заметили бурную активность на территории Индокитайского Союза. Это может значить лишь то что они готовятся к войне. Но несмотря на это войска Кутая и Сиама не начали наступление. Ведь надо было согласовать всё со чтпбом и сделать каординированную атаку с другими странами потдержавшими ультиматум.'
        }
        avatar={
          'https://sun9-11.userapi.com/impf/c844321/v844321177/1fbb02/K1aztBpYqno.jpg?size=720x960&quality=96&sign=3e3ab41e1df4ea90f2483c9f8c4ee547&type=album'
        }
        date={'2023-12-29T22:00:09Z'}
        isMe={true}
        isReaded={true}
        attachments={[
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/100x100/?random=1&nature',
          },
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/100x100/?random=2&nature',
          },
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/100x100/?random=3&nature',
          },
        ]}
      />
    </>
  )
}
