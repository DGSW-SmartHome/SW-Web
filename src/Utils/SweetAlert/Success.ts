import Toast from "./Toast"

export const SwalChangeName = () => {
  Toast.fire({
    icon: 'success',
    title: '방 이름이 변경되었습니다.'
  })
}

export const SwalIDCheck = () => {
  Toast.fire({
    icon: 'success',
    title: '사용 가능한 아이디입니다.'
  })
}

export const SwalSucessCustomText = ({text}: {text:string}) => {
  Toast.fire({
    icon: 'success',
    title: `${text}`
  })
}