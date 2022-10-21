import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'

/*
* 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

// нужно создать правильный тип вместо any
export type MessageType = {
    id:number
    user:{
        avatar:string
        name: string
    }
    message:{
        text:string
        time:string

    }
}

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: 'https://pngicon.ru/file/uploads/vinni-pukh-v-png-256x256.png', // можно менять
        name: 'Винни-пух',  // можно менять
    },
    message: {
        text: 'По-моему, пчёлы что-то подозревают!', // можно менять
        time: '09:01', // можно менять
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: 'https://citaty.info/files/portraits/unnamed_3_0.jpg', // можно менять
        name: 'Пятачок', // можно менять
    },
    message: {
        text: 'Может, они думают, что ты хочешь утащить у них мёд?', // можно менять
        time: '09:02', // можно менять
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Homework #1</div>
            <div className={s2.hw}>
                {/*проверка отображения (не менять)*/}
                <div>
                    <Message message={message0} />
                    <FriendMessage message={friendMessage0} />
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message} />
            </div>
        </div>
    )
}

export default HW1
