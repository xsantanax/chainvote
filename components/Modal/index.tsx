import * as S from './styles'
// import ContactForm from 'components/ContactForm'

type Props = {
  onClose: () => void
  children: any
}

const Modal = ({ onClose, children }: Props) => {
  return (
    <S.Container>
      <S.Content>
        <S.CloseWrap onClick={onClose}>
          <S.CloseIcon src='/img/cancel.svg' />
        </S.CloseWrap>
        <S.Title>Votes</S.Title>
        {/* <ContactForm /> */}
        {children}
      </S.Content>
    </S.Container>
  )
}

export default Modal
