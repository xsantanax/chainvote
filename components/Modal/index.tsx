import { useVotes } from '../../hooks/useVotes'
import * as S from './styles'

type Props = {
  onClose: () => void
  children: any
}

const Modal = ({ onClose }: Props) => {
  const { currentUser } = useVotes()
  return (
    <S.Container>
      <S.Content>
        <S.CloseWrap onClick={onClose}>
          <S.CloseIcon src='/img/cancel.svg' />
        </S.CloseWrap>
        <S.Title>Votos</S.Title>
        {currentUser && (
          <div>
            {currentUser.id} recebeu os seguintes votos:
            <div className='mt-4 text-center'>
              {currentUser.allVoters.map((voter: any) => (
                <div
                  key={voter}
                  className={
                    currentUser.directVoters?.includes(voter) && 'underline'
                  }
                >
                  {voter}
                </div>
              ))}
            </div>
          </div>
        )}
      </S.Content>
    </S.Container>
  )
}

export default Modal
