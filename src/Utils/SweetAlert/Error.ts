import Swal from "sweetalert2";

export const SwalBadRequest = () => {
  Swal.fire({
    icon: 'error',
    title: 'Error!',
    text: '값을 제대로 전달하지 못하였습니다.'
  })
}

export const SwalUnauthorized = () => {
  Swal.fire({
    icon: 'error',
    title: 'Error!',
    text: '토큰이 존재하지 않습니다.'
  })
}

export const SwalServerError = () => {
  Swal.fire({
    icon: 'error',
    title: 'Error!',
    text: '서버에 오류가 생겼습니다.'
  })
}

export const SwalErrorCustomText = (text) => {
  Swal.fire({
    icon: 'error',
    title: 'Error!',
    text: `${text}`
  })
}

export const SwalDiscordance = () => {
  Swal.fire({
    icon: 'error',
    title: 'Error!',
    text: '아이디 또는 비밀번호가 일치하지 않습니다.'
  })
}

export const SwalCustom = ({ title, text }) => {
  Swal.fire({
    icon: 'error',
    title: `${title}`,
    text: `${text}`
  })
}